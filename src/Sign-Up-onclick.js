let clickSingUp = document.getElementById("registration");
let modalSingUp = document.getElementById("modalWindow");
let closeModalSingUp = document.getElementById("close");
let getPassword = document.getElementById("pass");
let getLogin = document.getElementById("login");

registration.onclick = function (event) {
  modalSingUp.style.display = "flex";
};

closeModalSingUp.onclick = function (event) {
  modalSingUp.style.display = "none";
  getPassword.value = ''
  getLogin.value = ''

};

window.onclick = function (event) {
  if (event.target === modalSingUp) modalSingUp.style.display = "none";
};
