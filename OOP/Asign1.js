// We have used the setTimeout function recursively to run our slideshow. Javascript provides a setInterval(function() {console.log("Hi");}, 3000), which executes the callback function every n seconds. In the example shown, n is 3 seconds. Can you change the slideshow example (as we did in the lectures) to make use of the setInterval function instead of setTimeout?


function showSlide() {
    console.log("Showing slide");
    setTimeout(showSlide, 3000); // Calls itself after 3 seconds
}
showSlide();

setInterval(function() {
    console.log("Showing slide");
}, 3000); // Executes every 3 seconds