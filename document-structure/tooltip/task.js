const hasTooltip = document.querySelectorAll(".has-tooltip");

let tooltip = document.createElement("div");
tooltip.classList.add('tooltip');

function positionTooltip(text) {
    let left = text.getBoundingClientRect().left;
    let top = text.getBoundingClientRect().bottom;
    tooltip.style.top = top + "px";
    tooltip.style.left = left + "px";
}

function createTooltip(text) {
    tooltip.textContent = text.title;
    tooltip.classList.add("tooltip_active");
    text.insertAdjacentElement("afterEnd", tooltip);
}

hasTooltip.forEach((element) => {
    element.addEventListener("click", (el) => {
        el.preventDefault();
        positionTooltip(element);
        createTooltip(element);
        
    })
})

