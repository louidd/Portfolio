let increment = document.getElementById("increment");
let count = document.getElementById("count");
let count_display = 0;

increment.addEventListener("click", function() {
    if (count_display < 50) {
        count_display++;
        count.textContent = count_display;
    } else {
        alert("You've Reached the limit!");
    }
});

let decrement = document.getElementById("decrement");

decrement.addEventListener("click", function() {
    if (count_display > -50) {
        count_display--;
        count.textContent = count_display;
    } else {
        alert("You've Reached the limit!");
    }
});

let reset = document.getElementById("reset");

reset.addEventListener("click", function() {
    count_display = 0;
    count.textContent = count_display;
});
