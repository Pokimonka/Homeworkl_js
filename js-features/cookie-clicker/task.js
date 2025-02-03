const cookieCounter = document.getElementById("clicker__counter");
const cookieSpeed = document.getElementById("clicker__speed");

const cookieImg = document.getElementById("cookie");
let big = false;
let clickSmall;
let clickBig;
let first = true;
cookieImg.onclick = () => {
    cookieCounter.textContent = +cookieCounter.textContent + 1;
    if (big) {
        clickBig = new Date();
        clickBig = clickBig.getTime();
        big = false;
        cookieImg.width -= 30;
        cookieImg.height -= 30;
        cookieSpeed.textContent = (1/(clickBig - clickSmall))*1000;
    } else {
        clickSmall = new Date();
        clickSmall = clickSmall.getTime();
        big = true;
        cookieImg.width += 30;
        cookieImg.height += 30;
        if (!first) {
            cookieSpeed.textContent = (1/(clickSmall - clickBig))*1000;
        }
        first = false;
    }

}