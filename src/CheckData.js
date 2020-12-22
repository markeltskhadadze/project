let getPasswordValue = document.getElementById("passValue");
let getLoginValue = document.getElementById("loginValue");
let btnSubmitAut = document.getElementById("submit-aut");
const clickonSingIp = document.getElementById("authorization");
const windowSingIp = document.getElementById("signIn");
const thanksModal = document.getElementById("thanks-modal");
let incorrectData = document.getElementById("incorrectData");

getPasswordValue.oninput = (event) => {
  getPasswordValue.classList.remove("input-error");
  // if (event.target.value.length >= 7) {
  //   var passValue = event.target.value;
  // } else {
  //   alert("Bye");
  // }
};

getLoginValue.oninput = (event) => {
  getLoginValue.classList.remove("input-error");
  incorrectData.classList.remove("error-message--visible");
  // if (event.target.value.length !== 0) {
  //   var loginValue = event.target.value;
  // }
};

btnSubmitAut.onclick = async function (event) {
  var response = await (await fetch("http://localhost:3000/user")).json();
  if (
    response.some(
      (item) =>
        item.login === getLoginValue.value &&
        item.password === getPasswordValue.value
    )
  ) {
    getLoginValue.value = "";
    getPasswordValue.value = "";
    windowSingIp.style.display = "none";
    thanksModal.style.display = "flex";
    setTimeout(function () {
      thanksModal.style.display = "none";
    }, 1000);
  } else {
    getLoginValue.value = "";
    getPasswordValue.value = "";
    getPasswordValue.classList.add("input-error");
    getLoginValue.classList.add("input-error");
    incorrectData.classList.add("error-message--visible");
  }
};
