var myList = document.getElementsByTagName("LI");
var i, span, txt;
var closeButton = document.getElementsByClassName("closeButton");

function elementScript() {
    span = document.createElement("SPAN");
    txt = document.createTextNode("\u26D4");
    span.className = "closeButton";
    span.appendChild(txt);
    myList[i].appendChild(span);
    
    span = document.createElement("SPAN");
    txt = document.createTextNode("\u25A2");
    span.className = "checker";
    span.appendChild(txt);
    myList[i].appendChild(span);
    
    
    closeButton[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

for (i = 0; i < myList.length; i++) {
    elementScript();
}

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("newTask").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Error. No input");
    } else {
        document.getElementById("myToDoList").appendChild(li);
    }
    document.getElementById("newTask").value = "";

    span = document.createElement("SPAN");
    txt = document.createTextNode("\u26D4");
    span.className = "closeButton";
    span.appendChild(txt);
    li.appendChild(span);

    span = document.createElement("SPAN");
    txt = document.createTextNode("\u25A2");
    span.className = "checker";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < closeButton.length; i++) {
        closeButton[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
    }
}, false);
