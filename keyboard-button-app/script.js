let buttons = document.getElementsByClassName("btn");
for (let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click", function(){
        let buttonInnerHTML = this.innerHTML;
        let output = document.querySelector("#result");
        output.textContent = buttonInnerHTML + " is activated";
    });
}
document.addEventListener("keydown", function(event) {
    let key = event.key.toUpperCase();

    if (key === "A" || key === "B" || key === "C") {
        document.querySelector("#result").innerHTML = key + " was activated!";
    }
});