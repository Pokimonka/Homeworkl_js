let textarea = document.querySelector('textarea');

textarea.value = localStorage.text;

textarea.addEventListener("change", () => {
    console.log(textarea.value);
    localStorage.setItem('text',textarea.value);
})