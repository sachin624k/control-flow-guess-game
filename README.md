# 🎮 Guess My Favorite Series Game

<p align="center">
  <img src="images/img1.png" width= 450px" height="550px" />
  <img src="images/img2.png" width="450px" height="538px" />
</p>

---

A simple interactive browser game where the user tries to guess my favorite series — **Money Heist**.

Built using:

* HTML
* CSS (external file)
* JavaScript (clean logic)

---

## How It Works

1. User enters a guess in the input field
2. Clicks **Submit**
3. Based on input:

   * Correct → Shows success message + image
   * Wrong → Shows error message + image
   * "quit" → Stops the game

---

## JavaScript Logic (Core Concept)

This project is based on a **looping guess concept**, originally written using `prompt()`:

```javascript
const favSeries = "Money Heist";
let guess = prompt("Guess my favorite series!");

while ((guess !== favSeries) && (guess !== "quit")) {
    guess = prompt("Wrong! Guess again or type 'quit' to give up.");
}

if (guess === favSeries) {
    console.log("Congratulations! You guessed it right!");
} else {
    console.log("Better luck next time!");
}
```

---

## Loop Concept Explained (Very Simple)

### `while` loop

A `while` loop runs **again and again** until a condition becomes false.

### Condition used:

```javascript
(guess !== favSeries) && (guess !== "quit")
```

Meaning:

* Keep asking the user **again and again**
* UNTIL:

  * user guesses correct
  * OR types `"quit"`