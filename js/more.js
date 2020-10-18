const editTaskButton = document.querySelector('[data-edit-task-button]')
const deleteTaskButton = document.querySelector('[data-delete-task-button]')

editTaskButton.addEventListener('click', e => {
    editTask();
})

function editTask() {
    prompt("What is you new task name?");
}

deleteTaskButton.addEventListener('click', e => {
    deleteTask();
})

function deleteTask() {
}