// Task List App
let taskFormEl = document.querySelector('#task-form');
taskFormEl.addEventListener('submit', function (event) {
    // event.preventDefault();

    let taskInputEl = document.querySelector('#input-item');
    let task = taskInputEl.value.trim();  // trim function delete the extra space, before and after the item you have written (spacebar's space)

    // get task form local storage
    let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    taskList.unshift(task);

    // set to local storage
    localStorage.setItem('tasks', JSON.stringify(taskList));

    displayTask();

    window.reload();

});

// display Task
let displayTask = () => {
    let taskListEl = document.querySelector('#task-list');
    let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
     if (taskList.length !== 0){
         let eachTask = '';
         for (let task of taskList){
             eachTask += `<li class="list-group-item list-group-item-action list-group-item-warning">
                       <span class="font-weight-bold">${task}</span>
                        <button class="close">
                            <i class="fa-times-circle"></i>
                        </button>
                    </li> `;
         }
         taskListEl.innerHTML = eachTask;
     }
};
displayTask();

// Remove Task
let taskListEl = document.querySelector('#task-list');
taskListEl.addEventListener('click', function (event) {
    let targetElement = event.target;
    if (targetElement.classList.contains('fa-times-circle')){
        let actualEl = targetElement.parentElement.parentElement;
        let selectedTask = actualEl.innerText;
    }


    // get task form local storage
    let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    taskList = taskList.filter(function (task) {
        return task.trim() !== selectedTask.trim();
    });
    localStorage.setItem('tasks', JSON.stringify(taskList));
    displayTask();
});