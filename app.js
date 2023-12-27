let tasks = [];
let orderedList = document.getElementById("orderedList");

function renderTasks() {
    orderedList.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = tasks[i];
        
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.id='deleteButton';
        deleteButton.addEventListener("click", function() {
            deleteTask(i);
        });

        listItem.appendChild(deleteButton);
        orderedList.appendChild(listItem);
    }
}

function addTask() {
    let formValue = document.getElementById("box").value;

    if (formValue.length === 0) {
        alert("There is no task");
    } else if (formValue.length > 25) {
        alert("Should be smaller than 25 characters");
        document.getElementById("box").value = "";
    } else {
        tasks.push(formValue);
        renderTasks();
        document.getElementById("box").value = "";
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
    console.log("Task deleted at index: " + index);
}
