var launch = document.querySelector(".launchChat")
var container = document.querySelector(".container")
var trash = document.querySelector(".trash")

launch.addEventListener("click", function () {

    container.style.opacity = "1"
    container.style.top = "0px"

})

function loop(element) {
    for (i = 0; element[i] < element.length; i++) {
        return element[i]
    }
}

var input = document.querySelector(".type")
var sendButton = document.querySelector(".send")


sendButton.addEventListener("click", function () {
    var inputValue = input.value
    var chatWindow = document.querySelector(".chatting")
    var p = document.createElement("p")
    var image = document.createElement("img")
    if (inputValue.charAt(0) == inputValue.charAt(0).toLowerCase() && !inputValue == "") {
        p.className = "right";
        p.innerHTML = inputValue;
        image.src = "image/man.png"
        image.className = "rightImage"
        chatWindow.appendChild(p);
        chatWindow.appendChild(image);

    }
    else if (inputValue == "") {
        alert("Type!")
    }
    else {
        p.className = "left";
        p.innerHTML = inputValue;
        image.src = "image/support.png"
        image.className = "leftImage"
        chatWindow.appendChild(image);
        chatWindow.appendChild(p);
    }
    input.value = ""

    p.addEventListener("click", function () {

        if (p.className.indexOf("selected") == -1) {
            p.classList.add("selected")
            if (p.nextElementSibling == null){p.previousElementSibling.classList.add("selectedIm") }
            else {
                p.nextElementSibling.classList.add("selectedIm")
            }
        }
        else {
            p.classList.remove("selected")
            if (p.nextElementSibling == null){p.previousElementSibling.classList.remove("selectedIm") }
            else {
                p.nextElementSibling.classList.remove("selectedIm")
            }

        }

    })

    trash.addEventListener("click", function () {
        var selected = document.querySelector(".selected")
        var selectedIm = document.querySelector(".selectedIm")
        selected.parentNode.removeChild(selected)
        selectedIm.parentNode.removeChild(selectedIm)
        
    })

})

