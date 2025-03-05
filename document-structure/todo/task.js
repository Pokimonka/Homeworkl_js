function removeTask(el) {

    el.preventDefault();
    el.target.parentNode.remove();

}

function createTask(el) {
    el.preventDefault();
    let input = document.querySelector(".tasks__input");

    let taskList = document.querySelector(".tasks__list");

    let task = document.createElement("div");
    task.classList.add("task");

    task.insertAdjacentHTML('afterbegin', `
          <div class="task__title">
            ${input.value}
          </div>
          <a href="#" class="task__remove">&times;</a>
    `);

    let taskRemove = task.querySelector(".task__remove");
   
    taskList.appendChild(task);

    taskRemove.addEventListener("click", removeTask);

    input.value = "";
}


let btn = document.querySelector(".tasks__add");
btn.addEventListener("click", createTask);

// let tasks = document.querySelector(".tasks");
// tasks.addEventListener("click", () => {
    
//     let taskList = document.querySelector(".tasks__list");
//     if (taskList.childNodes.length > 0) {
//         let removeBtn = document.querySelectorAll(".task__remove");
//         removeBtn.forEach(rbtn => {
//             rbtn.addEventListener("click", removeTask);
//         })
//     }
// })




