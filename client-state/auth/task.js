let form = document.querySelector('form');
let singinBtn = document.querySelector('#signin__btn');
let welcome = document.querySelector('.welcome');
let signin = document.querySelector('.signin');

form.addEventListener('submit', (f) => {
    f.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    const formData = new FormData(form);
    xhr.send(formData);
    xhr.onload = function() {
        if (JSON.parse(xhr.response)['success']) {
            welcome.textContent += JSON.parse(xhr.response)['user_id'];
            welcome.classList.add("welcome_active"); 
            signin.classList.remove("signin_active");
        } else {
            alert('Неверный логин/пароль');
            form.reset;
        }
        
    };
})
