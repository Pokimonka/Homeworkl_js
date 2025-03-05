let fontSizeControls = document.querySelectorAll(".font-size");
let book = document.querySelector(".book");
const booksFS = "book_fs-";
let classBook = "book";
document.getElementBy
function SetBookClass(sizeAttr) {
    if (classBook !== "book") {
        book.classList.remove(classBook);
    }
    classBook = booksFS + sizeAttr;
    if (sizeAttr) {
        book.classList.add(classBook);
    } else {
        book.className = "book";
    }
}

function controlClick(control) {

    fontSizeControls.forEach(c => {
        c.classList.remove("font-size_active");
    })

    this.classList.add("font-size_active");
    control.preventDefault();
    sizeAttr = this.getAttribute("data-size");
    SetBookClass(sizeAttr);
}

fontSizeControls.forEach(ctrl => {
    ctrl.addEventListener("click", controlClick);
})

