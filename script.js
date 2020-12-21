var character = document.getElementById("character");
var block = document.getElementById("bullet");
var startTime = new Date();
var lost = false;
var playerTime = new Date();

function jump() {
    if (character.classList !== "animate") {
        character.classList.add("animate");
    }
    
    setTimeout(function() {
        character.classList.remove("animate");
    }, 500);

}

var checkDead = setInterval(function() {
    // top position of the character
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    // left position of the block
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    
    if(blockLeft < 40 && blockLeft > 0 && characterTop >= 130) {
        // blocks are hitting
        block.style.animation = "none";
        block.style.display = "none"
        alert("You lose");
        lost = true
    }
    
    if(!lost) {
        endTime = new Date();
        var timeDiff = endTime - startTime; //in ms
        // strip the ms
        timeDiff /= 1000;

        // get seconds 
        playerTime = Math.round(timeDiff);
        document.getElementById("timeScore").innerHTML = playerTime;
    }
}, 10);
