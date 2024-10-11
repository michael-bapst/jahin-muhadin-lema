let audioStarted = false;

document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("overlay");
    const startButton = document.getElementById("startButton");
    const audio = document.getElementById("background-audio");

    startButton.addEventListener('click', function() {
        audio.play().catch(error => {
            console.error("Audio playback failed:", error);
        });
        overlay.style.display = 'none';
        audioStarted = true;
        showSlides();
    });
});

let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Wechselt jede 5 Sekunden das Bild
}
