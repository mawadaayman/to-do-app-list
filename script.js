const inputbox = document.querySelector("#input-box");
const ul = document.querySelector("#list");

function addtask() {
    if (inputbox.value === '') {
        alert("you must write something");
    }else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        ul.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputbox.value = "";
    saveData()
}

ul.addEventListener("click", function(e) {

    if (e.target.tagName === "LI"){
    
    e.target.classList.toggle("checked");
    saveData()
    }
    
    else if(e.target.tagName === "SPAN"){ 
    
    e.target.parentElement.remove();
    saveData()
    }
    
    }, false);

function saveData(){
    localStorage.setItem("data", ul.innerHTML)
}

function showtasks(){
    ul.innerHTML = localStorage.getItem("data")
}
showtasks()





















