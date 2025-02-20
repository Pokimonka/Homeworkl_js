let rotatorCase = document.querySelector(".rotator__case");
let firstRotator = rotatorCase;

function GetRotator() {
    rotatorCase.classList.remove("rotator__case_active");
    rotatorCase = rotatorCase.nextElementSibling;
    if (!rotatorCase) {
        rotatorCase = firstRotator;
    }
    console.log(rotatorCase);
    rotatorCase.classList.add("rotator__case_active");

}

setInterval(() => {
    GetRotator();
}, 1000);