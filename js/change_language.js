// Реализация смены языка
let googlePlay = document.querySelector('.content-box__footer_googlePlay');

function changeLang() {
    let selectBox = document.querySelector(".selectBox");
    let selectedValue = selectBox.options[selectBox.selectedIndex].value;
    if (selectedValue === 'en') {
        googlePlay.innerHTML =
            '<img src="images/googlePlay-EN.png" alt="googlePlay">'
            ;
    } else {
        googlePlay.innerHTML =
            '<img src="images/googleplay-RU.png" alt="googlePlay">'
            ;
    }
}