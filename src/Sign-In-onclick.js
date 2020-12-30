let clickSingIp = document.getElementById('authorization')
let modalSingIp = document.getElementById('signIn')
let closeModalSingIp = document.getElementById('close-signIn')
let getPasswordValue = document.getElementById("passValue");
let getLoginValue = document.getElementById("loginValue");

authorization.onclick = function (event) {
    modalSingIp.style.display = "flex"
}     

closeModalSingIp.onclick = function (event) {
    modalSingIp.style.display = 'none'
    getPasswordValue.value = ''
    getLoginValue.value = ''
}

window.onclick = function (event) {
    if (event.target === modalSingIp)
    modalSingIp.style.display = 'none'
}


