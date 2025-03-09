function createItem(xhrResponse) {
    let valutes = xhrResponse["response"]["Valute"];
    let code;
    let value;
    let items = document.querySelector("#items");

    for(obj in valutes) {
        code = valutes[obj]["CharCode"];
        value = valutes[obj]["Value"];
        
        let item = `
        <div class="item">
            <div class="item__code">
                ${code}
            </div>
            <div class="item__value">
                ${value}
            </div>
            <div class="item__currency">
                руб.
            </div>
        </div>`;
        items.insertAdjacentHTML('beforeEnd', item);
    }
}

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

xhr.addEventListener('readystatechange', () =>{
    if(xhr.readyState === 4) {
        loader.classList.remove("loader_active");
        createItem(JSON.parse(xhr.responseText));
        };
})




























