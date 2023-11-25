function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const taskText = taskInput.value;
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
     
            listItem.remove();
            updateLocalStorage();
        };

        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);
        updateLocalStorage();

        taskInput.value = '';
    }
}

function updateLocalStorage() {
    const taskList = document.getElementById('taskList');
    const tasks = [];
    for (let i = 0; i < taskList.children.length; i++) {
        tasks.push(taskList.children[i].textContent.replace('Delete', '').trim());
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function loadingAllTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(taskText => {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            listItem.remove();
            updateLocalStorage();
        };

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
    });
}

loadingAllTasks();
