for (let i=0; i<document.querySelectorAll("#drum").length; i++) {
    document.querySelectorAll("#drum")[i].addEventListener("click", function() {
        let buttonInnerHTML = this.innerHTML;
        let output = document.querySelector("#output");
    
        switch (buttonInnerHTML) {
            case "w":
                console.log("Play tome-1");
                output.innerHTML = "Play tom-1";

                //AUDIO VERSION
                let toml = new Audio("sounds/tom-1.mp3");
                toml.play();
                break;
            case "a":
                console.log("Play tome-2");
                output.innerHTML = "Play tom-2";
                //AUDIO VERSION
                let toma = new Audio("sounds/tom-2.mp3");
                toma.play();
                break;

            case "s":
                console.log("Play tome-3");
                output.innerHTML = "Play tom-3";
                //AUDIO VERSION
                let toms = new Audio("sounds/tom-3.mp3");
                toms.play();
                break; 
        }});
    }