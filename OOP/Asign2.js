// JavaScript code for slideshow with fade-in effect
let images = ["deloitte_task2.png", "deloitte_task2.png", ]; // Replace with your image paths
let currentIndex = 0;
const slideshow = document.getElementById("slideshow");

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    slideshow.style.opacity = 0; // Start fade-out
    setTimeout(() => {
        slideshow.src = images[currentIndex]; // Change image
        slideshow.style.opacity = 1; // Fade-in
    }, 500); // Wait for fade-out to complete
}

setInterval(showNextImage, 3000); // Change image every 3 seconds
