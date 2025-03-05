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
    
    cart.insertAdjacentHTML('afterbegin', `
    <div class="cart__product" data-id=${id}>
        <img class="cart__product-image" src=${imgSrc}>
        <div class="cart__product-count">${count}</div>
    </div>
    `);
}

function addToCart(id, count, imgSrc) {
    let cart = document.querySelector(".cart__products");
    let products = cart.querySelectorAll(".cart__product");
    let isIdInCart = Array.from(products).findIndex(prod => prod.getAttribute("data-id") == id);
    if (isIdInCart >= 0) {
        let countInCart = products[isIdInCart].querySelector(".cart__product-count");
        countInCart.textContent = +countInCart.textContent + +count;
    } else {
        createProductInCart(id, count, imgSrc);
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


