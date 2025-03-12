let form = document.querySelector('form');
let singinBtn = document.querySelector('#signin__btn');
let welcome = document.querySelector('.welcome');
let signin = document.querySelector('.signin');

if (localStorage.id) {
    welcome.textContent += localStorage.id;
    welcome.classList.add("welcome_active"); 
    signin.classList.remove("signin_active");
}

form.addEventListener('submit', (f) => {
    f.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    const formData = new FormData(form);
    xhr.send(formData);
    xhr.onload = function() {
        if (JSON.parse(xhr.response)['success']) {
            let id = JSON.parse(xhr.response)['user_id'];
            welcome.textContent += id;
            localStorage.setItem('id', id);
            welcome.classList.add("welcome_active"); 
            signin.classList.remove("signin_active");
        } else {
            alert('Неверный логин/пароль');
            form.reset;
        }
        
    };
})
