let tasks = [];
let orderedList = document.getElementById("orderedList"); 



for (let i = 0; i < tasks.length; i++) {
    orderedList.innerHTML += "<li class='li'>" + tasks[i] + "</li>";
}


function addTask() {
    let formValue = document.getElementById("box").value;
    

    if (formValue.length === 0) {
        alert("There is no task");
    }
    else if (formValue.length > 30) {
        alert("Should be smaller than 30 characters")
        document.getElementById("box").value = "";    
    }
    

    else {
        tasks.push(formValue);
        orderedList.innerHTML += "<li>" + formValue + "</li>"
        document.getElementById("box").value = "";    
    
        }
}