const favSeries = "Money Heist";

function checkGuess() {
    let guess = document.getElementById("guessInput").value;
    let message = document.getElementById("message");
    let image = document.getElementById("resultImage");

    if ((guess !== favSeries) && (guess !== "quit")) {
        message.textContent = "❌ Wrong! Try again.";
        image.src = "https://cdn-icons-png.flaticon.com/512/463/463612.png";
        image.style.display = "block";
    }

    if (guess === favSeries) {
        message.textContent = "🎉 Congratulations! You guessed it right!";
        image.src = "https://www.denofgeek.com/wp-content/uploads/2021/09/money-heist-ending.jpeg?fit=1200%2C675";
        image.style.display = "block";
    } else if (guess === "quit") {
        message.textContent = "You gave up!";
        image.style.display = "none";
    }
}