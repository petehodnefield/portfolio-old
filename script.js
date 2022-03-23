
var listEl = document.querySelector(".list");
var formEl = document.querySelector("#schedule-form");
var sectionEl = document.querySelector(".form-host");

var Yaya = function() {

    event.preventDefault();

    var createListItem = document.createElement("li");
    createListItem.className = "list-item";   
    var divEl = document.querySelector(".task-addition");

    createListItem.innerHTML = "<h2>" + listEl + "</h2>";
    
    divEl.appendChild(createListItem);
    sectionEl.appendChild(divEl);

}

formEl.addEventListener("submit", Yaya());