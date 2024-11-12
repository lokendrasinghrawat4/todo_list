// Toggle the task form visibility
function toggleForm() {
    const formContainer = document.getElementById('form-container');
    formContainer.style.display = formContainer.style.display === 'none' ? 'block' : 'none';
}

// Add event listener to the "Add Task" button
document.getElementById('addTaskButton').addEventListener('click', toggleForm);

// Add task submission event
document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskInput = document.getElementById('task');
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        addTask(taskValue);
        taskInput.value = '';
        toggleForm(); // Hide the form after adding the task
    }
});

// Function to add a task to the list
function addTask(taskValue) {
    const taskList = document.getElementById('task-list');

    // Create task item elements
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';

    const taskContent = document.createElement('span');
    taskContent.textContent = taskValue;
    taskItem.appendChild(taskContent);

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
}
