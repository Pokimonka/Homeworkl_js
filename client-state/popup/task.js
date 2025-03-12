function setCookie(name, value) {
    document.cookie = name + "=" + encodeURIComponent(value) + ';secure';
}

function getCookie(name) {
    const pairs = document.cookie.split(';');
    const cookie = pairs.find(p => p.startsWith(name + '=')); 
    return cookie ? cookie.substring(name.length + 1) : "";
}

// работает только в мозиле, хром не вывозит))

let popup = document.querySelector(".modal");
let closePopup = document.querySelector(".modal__close");

if (!getCookie('popup')) {
    popup.classList.add('modal_active');
} 


closePopup.addEventListener('click', () => {
    setCookie('popup', 'close');
    popup.classList.remove('modal_active');
    console.log(document.cookie);
});

// в общем, через localStorage можно реализовать это и в хроме.
// любые настройки куки будут только локальные, ну или настраивать через js,
// но я пока не разобралась как

// Я могла бы воткнуть здесь проверку браузера, 
// но вам наверное будет проще проверять через комменты))

// if (!localStorage.popup){
//     popup.classList.add('modal_active');
// }

// closePopup.addEventListener('click', () => {
//     localStorage.setItem('popup', 'close');
//     popup.classList.remove('modal_active');
//     console.log(document.cookie);
// });