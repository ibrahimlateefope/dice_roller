const diceCount = document.getElementById("diceCount");
const rollDice = document.getElementById("rollDice");
const resultsEl = document.getElementById("results");
const resultSum = document.getElementById("results-sum");
const resultImgs = document.querySelector(".result-box_imgs");
function randomIndex(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
rollDice.addEventListener("click", function () {
    let count = Number(diceCount.value);
    let result = [];
    let images = [];
    for (let i = 0; i < count; i++) {
        const roll = randomIndex(1, 6);
        result.push(roll);
        images.push(`<img src="dice_images/${roll}.svg" />`);
    }
    resultsEl.textContent = `Result: ${result.join(" ")}`;
    const total = result.reduce((sum, num) => sum + num, 0);
    resultSum.textContent = `Sum: ${total}`;
    resultImgs.innerHTML = images.join(" ");
    console.log(images.join(" "));
});
