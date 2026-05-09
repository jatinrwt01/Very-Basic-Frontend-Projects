const previousGuesses = [];
let count = 10;
const rNum = Math.floor(Math.random() * 100) + 1;

const button = document.getElementById("submit-btn");

button.addEventListener("click", (e) => {
    e.preventDefault();

    const input = document.getElementById("number-input");
    const inputNumber = Number(input.value);

    const display = document.querySelector(".low-or-high");

    if (count <= 0) {
        display.innerHTML = "No more guesses left. You lost :(";
        return;
    }

    previousGuesses.push(inputNumber);
    document.getElementById("p-guesses").innerHTML =
        previousGuesses.join(", ");

    count--;
    document.getElementById("g-remains").innerHTML = count;

    if (inputNumber < 1 || inputNumber > 100) {
        display.innerHTML = "Guess not in range.";
    } else if (inputNumber === rNum) {
        display.innerHTML = `Your guess ${inputNumber} is correct!`;
        button.disabled = true;
    } else if (inputNumber < rNum) {
        display.innerHTML = `${inputNumber} is low. Guess higher.`;
    } else {
        display.innerHTML = `${inputNumber} is high. Guess lower.`;
    }
});