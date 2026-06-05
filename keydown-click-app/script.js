let buttons = document.getElementsByClassName("btn");
for (let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click", function(){
        let buttonInnerHTML = this.innerHTML;
        let output = document.querySelector("#result");
        output.textContent = buttonInnerHTML + " is activated";
        switch (buttonInnerHTML){
            case "A":
                output.textContent = "A is activated";
                let toml = new Audio("sounds/tom-1.mp3");
                toml.play();
                break;
            case "B":
                output.textContent = "B is activated";
                let toml2 = new Audio("sounds/tom-2.mp3");
                toml2.play();
                break;
            case "C":
                output.textContent = "C is activated";
                let toml3 = new Audio("sounds/tom-3.mp3");
                toml3.play();
                break;
        }
    });
}
document.addEventListener("keydown", function(event) {
    let key = event.key.toUpperCase();

    if (key == "A" || key === "B" || key == "C") {
        document.querySelector("#result").innerHTML = key + " was activated!";
    }
});