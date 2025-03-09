function addButtonListener() {
    let btns = document.querySelectorAll('.poll__answer');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert("Спасибо, ваш голос засчитан!");
        });
    });
}

let xhr = new XMLHttpRequest();
xhr.open('GET', ' https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

xhr.addEventListener('readystatechange', () =>{

    let card = document.querySelector('.card');

    if(xhr.readyState === 4) {
        let resp = JSON.parse(xhr.responseText);
        let title = resp['data']['title'];
        let answers = resp['data']['answers'];
        let buttons = '';

        answers.forEach(answ => {
            buttons += `
            <button class="poll__answer">
                ${answ}
            </button>`
        });

        let poll = `
        <div class="poll">
            <div class="poll__title" id="poll__title">
                ${title}
            </div>
            <div class="poll__answers poll__answers_active" id="poll__answers">
                ${buttons}
            </div>
        </div>
        `;
        card.insertAdjacentHTML('AfterBegin', poll);

        addButtonListener();
    };
});