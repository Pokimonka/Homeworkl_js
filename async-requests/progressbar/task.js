let form = document.querySelector("form");
const progress = document.getElementById('progress');
form.addEventListener("submit", (f) => {
    f.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.upload.addEventListener("progress", (e) => {
        progress.setAttribute('max', e.total);
        progress.value = e.loaded;
    })
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    const formData = new FormData(form)
    xhr.send(formData);
    
})







