let getPasswordValue = document.getElementById("passValue");
let getLoginValue = document.getElementById("loginValue");
let btnSubmitAut = document.getElementById("submit-aut");
let clickonSingIp = document.getElementById("authorization");
let windowSingIp = document.getElementById("signIn");
let thanksModal = document.getElementById("thanks-modal");
let authorizationText = document.getElementById('authorizationText')
let incorrectData = document.getElementById("incorrectData");

getPasswordValue.oninput = (event) => {
  getPasswordValue.classList.remove("input-error");
};

getLoginValue.oninput = (event) => {
  getLoginValue.classList.remove("input-error");
  incorrectData.classList.remove("error-message--visible");
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
    authorizationText.style.display = "block";
    setTimeout(function () {
      thanksModal.style.display = "none";
      authorizationText.style.display = 'none'
    }, 1500);
  } else {
    getLoginValue.value = "";
    getPasswordValue.value = "";
    getPasswordValue.classList.add("input-error");
    getLoginValue.classList.add("input-error");
    incorrectData.classList.add("error-message--visible");
  }
};
