function createTask() {
    let input = document.querySelector(".tasks__input");

    let taskList = document.querySelector(".tasks__list");

    let task = document.createElement("div");
    task.classList.add("task")

    let taskTitle = document.createElement("div");
    taskTitle.classList.add("task__title");
    taskTitle.textContent = input.value;

    let taskRemove = '<a href="#" class="task__remove">&times;</a>';

    task.appendChild(taskTitle);

    taskTitle.insertAdjacentHTML("afterEnd", taskRemove);

    taskList.appendChild(task);
    input.value = "";
}

function removeTask(el) {

    el.preventDefault();
    el.target.parentNode.remove();

}

let btn = document.querySelector(".tasks__add");
btn.addEventListener("click", createTask);

let tasks = document.querySelector(".tasks");
tasks.addEventListener("click", () => {
    
    let taskList = document.querySelector(".tasks__list");

    if (taskList.childNodes.length) {

        let removeBtn = document.querySelectorAll(".task__remove");
        removeBtn.forEach(rbtn => {
            rbtn.addEventListener("click", removeTask);
        })
    }
})




