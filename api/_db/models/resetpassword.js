const { verify, sign } = require("jsonwebtoken");
const { promisify } = require("util");
const { randomFill } = require("crypto");
const { hash } = require("bcrypt");

const mongo = require("../index");
const sessionValid = require("../../_utils/sessionValid");

const createTokenKey = promisify(randomFill);
const signJwtPromise = promisify(sign);

export async function GET(params) {
  const mongobdd = await mongo();
  const passwordForget = mongobdd.db("bizzy").collection("passwordforget");
  const user = await passwordForget.findOne(
    { forgotPassword: params.get("token") },
    { projection: { _id: 1 } }
  );

  if (user === null) {
    await mongobdd.close();
    return {
      code: 401,
      content: "Token parameter is not valid, try resend a forgot password request."
    };
  }

  const userCollection = mongobdd.db("bizzy").collection("users");
  const tokenUser = await userCollection.findOne(
    { _id: user._id },
    { projection: { token: 1 } }
  );

  await mongobdd.close();
  return {
    code: 200,
    data: {
      token: tokenUser.token
    }
  };
}

export async function PUT(data) {
  const mongobdd = await mongo();
  const passwordForgetCollection = mongobdd.db("bizzy").collection("passwordforget");
  const userCollection = mongobdd.db("bizzy").collection("users");
  const { newpswd, token, jwtToken, cookie } = data;
  let user;

  if (cookie) {
    user = await sessionValid(cookie, { checkToken: false });
    if (!user._id) return user;
  } else {
    user = await passwordForgetCollection.findOne(
      { forgotPassword: token },
      { projection: { _id: 1 } }
    );

    if (user === null) {
      await mongobdd.close();
      return {
        code: 401,
        content:
          "One parameter in the body is either expired or not correct please try to send a new forgot password request."
      };
    }
  }

  const userData = await userCollection.findOne(
    { _id: user._id },
    {
      projection: { verifyJWTToken: 1, mail: 1 }
    }
  );

  return verify(jwtToken, userData.verifyJWTToken, async function v(err) {
    const newPassword = await hash(newpswd, 10);

    if (err) {
      if (err.name === "TokenExpiredError") {
        const newJWTTokenKey = await createTokenKey(Buffer.alloc(16));
        const newToken = await signJwtPromise(
          `{
                    data: ${userData.mail},
                    exp: ${Math.floor(Date.now() + 60 * 8640 * 1000)}
                }`,
          newJWTTokenKey.toString("hex")
        );

        await userCollection.findOneAndUpdate(
          { _id: userData._id },
          {
            $set: {
              password: newPassword,
              token: newToken,
              verifyJWTToken: newJWTTokenKey.toString("hex")
            }
          }
        );
        await passwordForgetCollection.findOneAndDelete({ _id: userData._id });

        await mongobdd.close();
        return {
          code: 200,
          content: `Password update for ${userData.mail}.`
        };
      }

      await mongobdd.close();
      return {
        code: 401
      };
    }

    await userCollection.findOneAndUpdate(
      { _id: userData._id },
      { $set: { password: newPassword } }
    );
    await passwordForgetCollection.findOneAndDelete({ _id: userData._id });

    await mongobdd.close();
    return {
      code: 201,
      content: `Password update for ${userData.mail}.`
    };
  });
}