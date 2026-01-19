/*
# JavaScript ES5
# JavaScript ES6+
# Bootstrap 5.3.8
# Bootstrap Icon
# Popper.js 2.11.8
# Todo List
# script.js
*/

/*----------TO-DO LIST----------*/
const STORAGE_KEY = 'todoTasks';
let tasks = [];
let secondInterval = null;

const selectForm = document.querySelector('.todo-form'); // Select input

window.addEventListener('load', () => {
    if(tasks.length > 0) {
        showTimestamp();
    }
});

// Load tasks from localStorage
const loadTasks = () => {
    const storedTasks = localStorage.getItem(STORAGE_KEY);
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
    renderTasks();
    updateStatus();
}

// Save tasks to localStorage
const saveTasks = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

selectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const getTask = e.target.task;
    const text = getTask.value.trim(); 

    if (validateInputTodo(text, getTask)) {
        const task = {
            id: Date.now(),
            content: text,
            completed: false // Task status
        };
        tasks.push(task); // Add to array
        getTask.value = ''; // Clear the input field
    }
    showTimestamp();
    saveTasks();
    renderTasks(); 
    updateStatus();
});

// Validate input for to-do list
const validateInputTodo = (input, element) => {
    if(input) {
        element.parentNode.classList.remove('error');
        return true;
    } else {
        element.parentNode.classList.add('error');
        return false;
    }
}

// Date & Time display
function showTimestamp() {
    // Clear any existing interval first to prevent duplicates
    if (secondInterval) {
        clearInterval(secondInterval);
    }

    let date = new Date();
    let dateString = date.toLocaleDateString('en-GB', { 
        day: '2-digit', 
        month: 'long', 
        year: 'numeric' 
    });
    
    function updateSeconds() {
        // Check if tasks exist before updating
        if (tasks.length === 0) {
            clearInterval(secondInterval);
            secondInterval = null;
            document.querySelector('.time-status').textContent = '';
            document.querySelector('.date-status').textContent = '';
            return;
        }

        date.setSeconds(date.getSeconds() + 1);
        let updatedTimeString = date.toLocaleTimeString('en-GB', { 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
        });
        document.querySelector('.time-status').textContent = updatedTimeString;
    }

    // Start the interval
    secondInterval = setInterval(updateSeconds, 1000);

    // Set initial values
    document.querySelector('.date-status').textContent = dateString;
    updateSeconds(); // Call once immediately to show time right away
}

//Call this function when you want to stop the clock manually
function stopClock() {
    if (secondInterval) {
        clearInterval(secondInterval);
        secondInterval = null;
        document.querySelector('.time-status').textContent = '';
        document.querySelector('.date-status').textContent = '';
    }
}

// Render this task to the UI
function renderTasks() {
    const taskList = document.querySelector('.todo-list');
    if (tasks.length === 0) {
        taskList.innerHTML = `
            <li class="empty-status">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#ccc" width="100" height="100" viewBox="0 0 32 32" id="Layer_1" data-name="Layer 1"><path d="M6.97,30.75H25.03c.41,0,.75-.34,.75-.75V3.89c0-.41-.34-.75-.75-.75h-2.56v-1.14c0-.41-.34-.75-.75-.75s-.75,.34-.75,.75v1.14h-4.22v-1.14c0-.41-.34-.75-.75-.75s-.75,.34-.75,.75v1.14h-4.22v-1.14c0-.41-.34-.75-.75-.75s-.75,.34-.75,.75v1.14h-2.56c-.41,0-.75,.34-.75,.75V30c0,.41,.34,.75,.75,.75Zm.75-26.11h1.81v1.14c0,.41,.34,.75,.75,.75s.75-.34,.75-.75v-1.14h4.22v1.14c0,.41,.34,.75,.75,.75s.75-.34,.75-.75v-1.14h4.22v1.14c0,.41,.34,.75,.75,.75s.75-.34,.75-.75v-1.14h1.81V29.25H7.72V4.64Z"/><path d="M16.86,9.66h-6.57c-.41,0-.75,.34-.75,.75s.34,.75,.75,.75h6.57c.41,0,.75-.34,.75-.75s-.34-.75-.75-.75Z"/><path d="M16.86,16.19h-6.57c-.41,0-.75,.34-.75,.75s.34,.75,.75,.75h6.57c.41,0,.75-.34,.75-.75s-.34-.75-.75-.75Z"/><path d="M16.86,22.73h-6.57c-.41,0-.75,.34-.75,.75s.34,.75,.75,.75h6.57c.41,0,.75-.34,.75-.75s-.34-.75-.75-.75Z"/><path d="M10.28,14.27h3.61c.41,0,.75-.34,.75-.75s-.34-.75-.75-.75h-3.61c-.41,0-.75,.34-.75,.75s.34,.75,.75,.75Z"/><path d="M10.28,21h3.61c.41,0,.75-.34,.75-.75s-.34-.75-.75-.75h-3.61c-.41,0-.75,.34-.75,.75s.34,.75,.75,.75Z"/><path d="M13.89,25.79h-3.61c-.41,0-.75,.34-.75,.75s.34,.75,.75,.75h3.61c.41,0,.75-.34,.75-.75s-.34-.75-.75-.75Z"/></svg>
                <p class="mt-4 mb-0">No tasks yet. Add one to get started!</p>
            </li>
                `;
        return;
    }
    taskList.innerHTML = tasks.map(task => `
        <li class="task-item" data-id="${task.id}">
            <input type="checkbox" class="complete-checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTaskCompletion(${task.id})"/>
            <span class="task-text ${task.completed ? 'completed' : ''}">${task.content}</span>
            <input type="text" name="" class="edit-input" value="${task.content}" "/>
            <button class="btn btn-edit" onclick="editTask(${task.id})">Edit</button>
            <button class="btn btn-save" onclick="saveTask(${task.id})">Save</button>
            <button class="btn btn-delete" onclick="deleteTask(${task.id})">Delete</button>
        </li>
    `).join('');
}

function toggleTaskCompletion(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = !task.completed;
        saveTasks();
        renderTasks();
        updateStatus();
    }
}

function editTask(id) {
    const listItem = document.querySelector(`li[data-id="${id}"]`);
    const taskText = listItem.querySelector('.task-text');
    const editInput = listItem.querySelector('.edit-input');
    const editButton = listItem.querySelector('.btn-edit');
    const saveButton = listItem.querySelector('.btn-save');
    taskText.style.display = 'none';
    editButton.style.display = 'none';
    editInput.style.display = 'inline-block';
    saveButton.style.display = 'inline-block';
    editInput.focus();
    saveTasks();
}

function saveTask(id) {
    const listItem = document.querySelector(`li[data-id="${id}"]`);
    const editInput = listItem.querySelector('.edit-input');
    const newText = editInput.value.trim();
    if (newText) {
        const task = tasks.find(task => task.id === id);
        if (task) {
            task.content = newText;
            saveTasks();
            renderTasks();
            updateStatus();
        }
    }
}

function deleteTask(id) {
    if(confirm('Are you sure you want to delete this task?')) {
        tasks = tasks.filter(task => task.id !== id);
        saveTasks();
        renderTasks();
        updateStatus();
    }
    if(tasks.length === 0) {
        stopClock();
    }
}

function updateStatus() {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const activeTasks = totalTasks - completedTasks;

    document.querySelector('.active-tasks').textContent = activeTasks;
    document.querySelector('.total-tasks').textContent = totalTasks;
    document.querySelector('.completed-tasks').textContent = completedTasks;
}

loadTasks();
/*----------END TO-DO LIST----------*/