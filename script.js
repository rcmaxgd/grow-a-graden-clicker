let crops = 0;

let upgrade1 = 0; // Tuinman
let upgrade2 = 0; // Gieter
let upgrade3 = 0; // Groeilamp

const cropCount = document.getElementById("crop-count");
const clickButton = document.getElementById("click-button");

const upgrade1Btn = document.getElementById("upgrade1");
const upgrade2Btn = document.getElementById("upgrade2");
const upgrade3Btn = document.getElementById("upgrade3");

clickButton.addEventListener("click", () => {
  crops += 1;
  updateDisplay();
});

upgrade1Btn.addEventListener("click", () => {
  if (crops >= 50) {
    crops -= 50;
    upgrade1++;
    updateDisplay();
  }
});

upgrade2Btn.addEventListener("click", () => {
  if (crops >= 200) {
    crops -= 200;
    upgrade2++;
    updateDisplay();
  }
});

upgrade3Btn.addEventListener("click", () => {
  if (crops >= 1000) {
    crops -= 1000;
    upgrade3++;
    updateDisplay();
  }
});

function updateDisplay() {
  cropCount.textContent = crops;
  document.getElementById("u1-count").textContent = upgrade1;
  document.getElementById("u2-count").textContent = upgrade2;
  document.getElementById("u3-count").textContent = upgrade3;
}

// Automatische productie
setInterval(() => {
  crops += upgrade1 * 1;   // Tuinman = 1 per sec
  crops += upgrade2 * 5;   // Gieter = 5 per sec
  crops += upgrade3 * 20;  // Groeilamp = 20 per sec
  updateDisplay();
}, 1000);
