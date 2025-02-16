let dropdownList = document.querySelector('.dropdown__list');
let dropdownValue = document.querySelector('.dropdown__value');
let dropdownItem = document.querySelectorAll('.dropdown__link');
   
function onDropdownClick() {
    dropdownList.classList.toggle('dropdown__list_active');
}

dropdownValue.addEventListener('click', onDropdownClick);

function onItemClick(item) {
    item.preventDefault();
    dropdownList.classList.remove('dropdown__list_active');
    dropdownValue.textContent = item.currentTarget.textContent;
}

dropdownItem.forEach(item => {
    item.addEventListener('click', onItemClick);
})
