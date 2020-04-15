function FetchData(path, method, data = {}) {
  let apiurl;

  if (process.env.NODE_ENV === "development") {
    apiurl = "http://localhost:3000/api"
  } else {
    apiurl = "https://bizzy.now.sh/api"
  }

  if (!path) {
    return console.error(new Error('You should enter a path.').message);
  } else {
    typeof path !== 'string' && console.error(new Error('The path parameter should be a string').message);
  }

  if (method) {
    typeof method !== 'string' && console.error(new Error('The method parameter should be a string').message);

    if (!['GET', 'PUT', 'POST', 'DELETE'].includes(method.toUpperCase())) {
      return console.error(new Error("The method doesn't exist.").message);
    }
  } else {
    method = 'GET';
  }

  return fetch(`${apiurl}${path}`, {
    method: method,
    body: data.body && JSON.stringify(data.body)
  })
    .then(response => {
      if (response.status >= 500 && response.status <= 600) {
        return Promise.reject(new Error("Oops something went wrong with the server. Please try again in a few minutes or send me a message if the problem persists."));
      }
      return response.json();
    })
    .then(dataParsed => {
      if (dataParsed === undefined) {
        return Promise.reject(new Error("Oops something went wrong with the server. Please try again in a few minutes or send me a message if the problem persists."));
      }

      if (dataParsed.error) {
        return Promise.reject(dataParsed.message);
      }
      return dataParsed;
    })
};

export default FetchData;