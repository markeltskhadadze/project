const clickSingIp = document.getElementById('authorization')
const modalSingIp = document.getElementById('signIn')
const closeModalSingIp = document.getElementById('close-signIn')

authorization.onclick = function (event) {
    modalSingIp.style.display = "flex"
}     

closeModalSingIp.onclick = function (event) {
    modalSingIp.style.display = 'none'
}

window.onclick = function (event) {
    if (event.target === modalSingIp)
    modalSingIp.style.display = 'none'
}


