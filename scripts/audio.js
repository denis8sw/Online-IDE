

document.addEventListener("DOMContentLoaded", function() {
    // Get the audio element
    const clickSound = document.getElementById("clickSound");

    // Add event listener to the entire document for keydown event
    document.addEventListener("keydown", function(event) {
        // Play the click sound
        if(audioEnable == true) {
            clickSound.currentTime = 0; // Reset audio to start
            clickSound.play();
        }
    });
});
