var character = document.getElementById("character");
var block = document.getElementById("block");

function jump() {
    if (!character.classList.contains("animate")) {
        character.classList.add("animate");
        setTimeout(function() {
            character.classList.remove("animate");
        }, 500);
    }
}
var block = document.getElementById("block"); // Replace with your block ID
var checkDead = setInterval(function() {
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top")); // Assuming 'top' is used for vertical position

    // Condition where the block is within a certain horizontal range and the character is at or below a certain vertical position
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130 ) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("You lose!");
        clearInterval(checkDead); // To stop the interval once the game is over
    }
}, 10);