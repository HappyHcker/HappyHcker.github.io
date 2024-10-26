//Allert popup
window.addEventListener('load', function() {
    alert("🚨 Breaking News: James and Peter Kissed!");
});

//Readmore buttons -> function
const readMoreButtons = document.querySelectorAll('.read-more-btn');

readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert("Full article coming soon! Stay tuned.");
    });
});

document.getElementById('article3').addEventListener('click', function() {
    window.location.href = 'Article-3.html';
});

//Date Function
const dateElement = document.getElementById('date');
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const today = new Date().toLocaleDateString('en-US', options);

dateElement.textContent = `Today's Date: ${today}`;

//Sound Function
document.getElementById("playSoundButton").addEventListener("click", function() {
    var sound = document.getElementById("funnySoundAudio");
    sound.play();
});

document.getElementById("playQuote").addEventListener("click", function() {
    var sound = document.getElementById("quoteAudio");
    sound.play();
});
