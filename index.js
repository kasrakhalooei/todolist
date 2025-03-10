const inputbox = document.getElementById('input-box');
const tasklist = document.getElementById('task-list');
function addtast() {
    if (inputbox.value === '') {
        alert("متن مورد نظر خود را وارد کنید")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        tasklist.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
}
tasklist.addEventListener("click" , function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
},false)
