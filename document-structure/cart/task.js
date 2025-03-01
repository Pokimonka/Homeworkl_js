let plus = document.querySelectorAll(".product__quantity-control_inc");
let minus = document.querySelectorAll(".product__quantity-control_dec");

plus.forEach(pl => {
    pl.addEventListener("click", () => {
        pl.previousElementSibling.textContent = +(pl.previousElementSibling.textContent) + 1;
    })
})

minus.forEach(mn => {
    mn.addEventListener("click", () => {
        if (mn.nextElementSibling.textContent > 1) {
            mn.nextElementSibling.textContent = +(mn.nextElementSibling.textContent) - 1;
        }
    })
})

function createProductInCart(id, count, imgSrc) {
    let cart = document.querySelector(".cart__products");

    let div = document.createElement("div");
    div.classList.add("cart__product");
    div.setAttribute("data-id", id);

    let img = `<img class="cart__product-image" src=${imgSrc}>`;
    let divCount = `<div class="cart__product-count">${count}</div>`;

    div.insertAdjacentHTML("afterBegin", divCount);
    div.insertAdjacentHTML("afterBegin", img);

    cart.appendChild(div);
}

function addToCart(id, count, imgSrc) {
    let cart = document.querySelector(".cart__products");
    let products = cart.querySelectorAll(".cart__product");
    if (products) {
        let isIdInCart = Array.from(products).findIndex(prod => prod.getAttribute("data-id") == id);
        if (isIdInCart >= 0) {
            let countInCart = products[isIdInCart].querySelector(".cart__product-count");
            countInCart.textContent = +countInCart.textContent + +count;
        } else {
            createProductInCart(id, count, imgSrc);
        }
    }
}

let addBtn = document.querySelectorAll(".product__add");

addBtn.forEach(btn => {
    btn.addEventListener("click", b => {
        let control = b.target.previousElementSibling;
        let count = control.querySelector(".product__quantity-value").textContent;
        let img = control.parentNode.parentNode.previousElementSibling;
        let imgSrc = img.getAttribute("src");
        let id = img.parentNode.getAttribute("data-id");
        console.log(count);
        console.log(imgSrc);
        console.log(id);
        addToCart(id, count, imgSrc);
    })
})


