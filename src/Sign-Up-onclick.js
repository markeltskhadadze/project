const clickSingUp = document.getElementById("registration");
const modalSingUp = document.getElementById("modalWindow");
const closeModalSingUp = document.getElementById("close");
// let enterLogin = document.getElementById("errorLogin");
// let enterPassword = document.getElementById("errorPassword");

registration.onclick = function (event) {
  modalSingUp.style.display = "flex";
};

closeModalSingUp.onclick = function (event) {
  modalSingUp.style.display = "none";
  // enterLogin.classList.remove("enter-data");
  // enterPassword.classList.remove("enter-data");
};

window.onclick = function (event) {
  if (event.target === modalSingUp) modalSingUp.style.display = "none";
};
