const inputbox = document.getElementById('input-box');
const tasklist = document.getElementById('task-list');
function addtast() {
    if (inputbox.value === '') {
        alert("متن مورد نظر خود را وارد کنید")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        li.classList.add("test")
        tasklist.appendChild(li);
        let div = document.createElement("div");
        div.classList.add("tools")
        li.appendChild(div);

        let button = document.createElement("button");
        button .innerHTML = "<i class=\"fas fa-check\"></i>";
        button.classList.add("complete")
        div.appendChild(button);

        let button3 = document.createElement("button");
        button3.innerHTML = "<i class=\"fas fa-times\"></i>";
        button3.classList.add("delete")
        div.appendChild(button3);

        inputbox.value =  inputbox.ariaPlaceholder;

        saveTasksToLocalStorage();
    }
}
function saveTasksToLocalStorage() {
    let tasks = [];
    document.querySelectorAll("#task-list li").forEach(li => {
        tasks.push({
            text: li.childNodes[0].nodeValue.trim(),
            completed: li.classList.contains("completed")
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function loadTasksFromLocalStorage() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = task.text;
        tasklist.appendChild(li);
        if (task.completed) {
            li.classList.add("completed");
        }

        let div = document.createElement("div");
        div.classList.add("tools");
        li.appendChild(div);

        let button = document.createElement("button");
        button.innerHTML = "<i class=\"fas fa-check\"></i>";
        button.classList.add("complete");
        div.appendChild(button);

        let button3 = document.createElement("button");
        button3.innerHTML = "<i class=\"fas fa-times\"></i>";
        button3.classList.add("delete");
        div.appendChild(button3);
    });
}
loadTasksFromLocalStorage();
tasklist.addEventListener("click" , function (e) {
    if (e.target.matches('.complete')) {
        e.target.closest('li').classList.toggle("completed");
    }
    else if (e.target.className === "delete") {
        e.target.closest('li').remove();
    }
},false);
tasklist.addEventListener("click" , function (e) {
    if (e.target.matches('.complete')) {
        e.target.closest('li').classList.toggle("completed");
        saveTasksToLocalStorage();
    }
    else if (e.target.matches('.delete')) {
        e.target.closest('li').remove();
        saveTasksToLocalStorage();
    }
}, false);
tasklist.addEventListener("click" , function (e) {
    if (e.target.matches('.complete')) {
        e.target.closest('li').classList.toggle("completed");
        saveTasksToLocalStorage();
    }
    else if (e.target.matches('.delete')) {
        e.target.closest('li').remove();
        saveTasksToLocalStorage();
    }
}, false);

const checklist = document.getElementById("complete-container");
const completeds = document.getElementsByClassName("complete")
function checklistcontainer() {
    if (checklist.value === ""){
        let alerth1 =document.createElement("h1");
        alerth1.innerHTML = "شما هیج فعالیتی را انجام ندادید";
    }
    else {
        let completedli = document.createElement("li");
        completedli.innerHTML = document.getElementsByClassName("completed").value;
    }
}
$(document).ready(function (){
    $('.theme-switcher').change(function (){

        $('body').toggleClass('light-theme');
    });
});
