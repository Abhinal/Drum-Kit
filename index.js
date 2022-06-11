for (var i = 0; i < document.querySelectorAll(".drum").length; i++)
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(()=>(activeButton.classList.remove("pressed")), 200);
}

function playSound(choice) {
    switch (choice) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            break
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            break
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            break
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            break
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            break
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            break
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            break
    }
    audio.play();
}

function handleClick() {
    var buttonHTML = this.innerHTML;
    buttonAnimation(buttonHTML)
    playSound(buttonHTML)
}

addEventListener("keypress", function (event) { buttonAnimation(event.key); playSound(event.key); })