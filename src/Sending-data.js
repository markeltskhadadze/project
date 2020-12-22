let getPassword = document.getElementById("pass");
let getLogin = document.getElementById("login");
let btnSubmit = document.getElementById("submit");
let enterLogin = document.getElementById("errorLogin");
let enterPassword = document.getElementById("errorPassword");
let getAvatar = document.getElementById("upload-photo");
let uploadAvatar = document.getElementById("errorAvatar");
let getPhoto = document.getElementById("getPhoto");

getPassword.oninput = (event) => {
  getPassword.classList.remove("input-error");
  enterPassword.classList.remove("error-message--visible");
  //    if (event.target.value.length < 7) {
  //        console.log ('Password must be more than 7 characters')
  //    }
};

getLogin.oninput = (event) => {
  getLogin.classList.remove("input-error");
  enterLogin.classList.remove("error-message--visible");
};

getAvatar.oninput = (event) => {
  uploadAvatar.classList.remove("error-message--visible");
};

getAvatar.onchange = (event) => {
  var img = event.target.files[0];
  if (img) {
    getPhoto.style = `
    border-radius: 50%;
    width: 100px;
    height: 100px;
    `
    getPhoto.src = img
  }
};

btnSubmit.onclick = async function (event) {
  var login = getLogin.value;
  var pass = getPassword.value;
  if (!login && !pass) {
    getLogin.classList.add("input-error");
    enterLogin.classList.add("error-message--visible");
    getPassword.classList.add("input-error");
    enterPassword.classList.add("error-message--visible");
    uploadAvatar.classList.add("error-message--visible");
    return;
  }
  if (login && pass) {
    var users = await (await fetch("http://localhost:3000/user")).json();
    if (users.some((item) => item.login === login)) {
    } else {
      console.log("Hi");
      if (login.length !== 0 && pass.length !== 0) {
        fetch("http://localhost:3000/user", {
          method: "POST",
          body: JSON.stringify({
            login: login,
            password: pass,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }).then((response) => console.log(response.status));
      }
      getLogin.value = "";
      getPassword.value = "";
    }
  } else {
    console.log("bye bye");
  }
};
