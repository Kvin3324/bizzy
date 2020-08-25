import React from "react";
import Header from "../Header/Header";
import UserProfileStyled from "../../style/UserProfileStyled.style";
import EditImg from "../../img/edit_img.svg";
import InputsForm from "../InputsForm/InputsForm";
import bcImg from "../../img/bc_desktop.svg";
import IconSettings from "../../img/settings_mobile.svg";
import IconSectionCards from "../../img/icon_cards.svg";
import IconAdd from "../../img/icon_add.svg";

// import Footer from "../Footer/Footer";

function UserProfile() {
  const [data, setData] = React.useState({
    btnDisabled: true,
    error: {}
  });

  React.useEffect(() => {
    const arrInputId = [
      "inputFirstName",
      "inputLastName",
      "inputMail",
      "inputJob",
      "inputCity"
    ];
    const newState = { ...data };
    const obj = {
      error: false,
      message: "",
      accessToChange: false
    };

    arrInputId.forEach(element => (newState.error[element] = { ...obj }));

    if (window.matchMedia("screen and (min-width: 1000px)").matches) {
      document.querySelector("body").style = `background-image: url(${bcImg})`;
    }

    return setData(newState);
  }, []); //eslint-disable-line

  // function addInput(e) {
  //   if (e.keyCode === 13) {
  //     document.activeElement.blur();
  //   }
  // }

  return (
    <>
      <Header />
      <UserProfileStyled as="main">
        <section className="profile--user--data">
          <div className="profile--user--data--title">
            <div className="profile--user--data--img">
              <img src={EditImg} alt="edit--img"></img>
            </div>
            <div className="profile--user--data--name">
              <h2>Hello Katrine :)</h2>
            </div>
          </div>
          <div className="profile--user--data--form">
            <div className="input--data--name">
            <InputsForm
                type="text"
                inputId="inputFirstName"
                // inputRef={inputFirstName}
                inputPlaceholder="Katrine"
                // inputCheckError={userAuth}
                isError={data.error.inputFirstName ? data.error.inputFirstName : ""}
              ></InputsForm>
              <InputsForm
                type="text"
                inputId="inputLastName"
                // inputRef={inputLastName}
                inputPlaceholder="Moreau"
                // inputCheckError={userAuth}
                isError={data.error.inputLastName ? data.error.inputLastName : ""}
              ></InputsForm>
            </div>
            <InputsForm
                type="mail"
                inputId="inputMail"
                // inputRef={inputMail}
                inputPlaceholder="adresse@gmail.com"
                // inputCheckError={userAuth}
                isError={data.error.inputMail ? data.error.inputMail : ""}
              ></InputsForm>
              <InputsForm
                type="text"
                inputId="inputJob"
                // inputRef={inputJob}
                inputPlaceholder="Votre poste"
                // inputCheckError={userAuth}
                isError={data.error.inputJob ? data.error.inputJob : ""}
              ></InputsForm>
              <InputsForm
                type="text"
                inputId="inputCity"
                // inputRef={inputCity}
                inputPlaceholder="Votre ville"
                // inputCheckError={userAuth}
                isError={data.error.inputCity ? data.error.inputCity : ""}
              ></InputsForm>
              <div className="profile--user--about">
                <textarea
                  id="inputMessage"
                  rows="6"
                  cols="34"
                  placeholder="Ajoutez une description à votre profil :)."
                  // ref={refInputMessage}
                  // onBlur={checkUserInfos}
                  // onChange={checkUserInfos}
                ></textarea>
              </div>
              <div className="profile--user--btn">
                <input type="button" value="Modifier vos données"></input>
              </div>
          </div>
        </section>
        <section className="profile--security">
          <div className="profile--security--title">
            <h2>Connexion et sécurité</h2>
            <div className="profile--security--img">
              <img src={IconSettings} alt="settings--icon"></img>
            </div>
          </div>
          <div className="profile--security--buttons">
            <input type="button" value="Changer mon mot de passe"></input>
            <input type="button" value="Supprimer mon profil"></input>
          </div>
        </section>
        {/* Si les cards sont vides */}
        <section className="profile--user--cards">
          <div className="profile--user--cards--title">
            <h2>Vos dernières annonces</h2>
            <div className="profile--user--cards--img">
              <img src={IconSectionCards} alt="icon--section--cards"></img>
            </div>
          </div>
          <div className="user--cards">
            <p>
              Vous n'avez jamais posté quelque chose ici.
            </p>
            <p>
              N'hésitez pas à proposer des activités à la communauté Bizzy, créez votre première card !
            </p>
            <div className="user--cards--btn">
              <input type="button" value="New Card"></input>
              <div>
                <img src={IconAdd} alt="add--card"></img>
              </div>
            </div>
          </div>
        </section>
      </UserProfileStyled>
      {/* <Footer /> */}
    </>
  );
}

export default UserProfile;
