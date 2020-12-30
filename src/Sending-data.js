let getPassword = document.getElementById("pass");
let getLogin = document.getElementById("login");
let btnSubmit = document.getElementById("submit");
let enterLogin = document.getElementById("errorLogin");
let enterPassword = document.getElementById("errorPassword");
let getAvatar = document.getElementById("upload-photo");
let uploadAvatar = document.getElementById("errorAvatar");
let getPhoto = document.getElementById("getPhoto");
let loginExists = document.getElementById("loginExists");
let registrationText = document.getElementById("RegistrationText");
let thanksModal = document.getElementById("thanks-modal");
let windowSingUp = document.getElementById("modalWindow");
let errorAvatarSize = document.getElementById("errorAvatarSize");
let passwordCharacters = document.getElementById('passwordCharacters')

getPassword.oninput = (event) => {
  getPassword.classList.remove("input-error");
  enterPassword.classList.remove("error-message--visible");
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
  if (
    event.target.files === "image/png" ||
    ("image/jpeg" && img.size <= 300000)
  ) {
    var reader = new FileReader();

    getPhoto.title = img.name;

    reader.onload = function (event) {
      getPhoto.src = event.target.result;
      getPhoto.style = `
     border-radius: 50%;
     width: 100px;
     height: 100px;
     `;
    };

    reader.readAsDataURL(img);
  } else {
    console.log("bye");
  }
};

btnSubmit.onclick = async function (event) {
  var login = getLogin.value;
  var pass = getPassword.value;
  var avatar = getPhoto.src;
  if (login && pass && avatar) {
    var users = await (await fetch("http://localhost:3000/user")).json();
    if (users.some((item) => item.login === login)) {
      getLogin.classList.add("input-error");
      loginExists.classList.add("error-message--visible");
    } else {
      windowSingUp.style.display = "none";
      thanksModal.style.display = "flex";
      registrationText.style.display = "block";
      setTimeout(function () {
        thanksModal.style.display = "none";
        registrationText.style.display = "none";
      }, 1500);
      if (login.length !== 0 && pass.length !== 0 && avatar) {
        fetch("http://localhost:3000/user", {
          method: "POST",
          body: JSON.stringify({
            login: login,
            password: pass,
            userAvatar: avatar,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }).then((response) => console.log(response.status));
      }
      getPassword.classList.remove("input-error");
      enterPassword.classList.remove("error-message--visible");
      getLogin.value = "";
      getPassword.value = "";
      getPhoto = "";
    }
  } else {
    getLogin.classList.add("input-error");
    enterLogin.classList.add("error-message--visible");
    getPassword.classList.add("input-error");
    enterPassword.classList.add("error-message--visible");
    uploadAvatar.classList.add("error-message--visible");
    return;
  }
};
