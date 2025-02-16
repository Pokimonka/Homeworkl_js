let tabs = Array.from(document.querySelectorAll(".tab"));
let tabContents = document.querySelectorAll(".tab__content ");

function removeActive(){
    let tabActive = document.querySelector(".tab_active");
    tabActive.classList.remove("tab_active");

    let tabContentActive = document.querySelector(".tab__content_active");
    tabContentActive.classList.remove("tab__content_active");
}

function clickTab(el) {
    removeActive();
    
    el.target.classList.add("tab_active");
    
    let index = tabs.indexOf(el.target);
    tabContents[index].classList.add("tab__content_active");
}

tabs.forEach((element) => {
    element.addEventListener("click", clickTab);
})