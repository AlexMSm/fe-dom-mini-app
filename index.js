let block = document.getElementById("block");
let gap = document.getElementById("gap");
let jet = document.getElementById("jet");
let boosting = false;
let counter = 0;

gap.addEventListener("animationiteration", () => {
  let random = Math.random() * 3;
  let top = random * 100 + 150;
  gap.style.top = -top + "px";
  counter++;
});

setInterval(function () {
  let jetTop = parseInt(window.getComputedStyle(jet).getPropertyValue("top"));
  if (!boosting) {
    jet.style.top = jetTop + 1 + "px";
  }
  if (jetTop > 490) {
    alert(`GOOSER - Score: ${counter}`);
    counter = 0;
    jet.style.top = 100 + "px";
  }
}, 10);

document.addEventListener("keydown", (event) => {
  console.log(event.key);
  if (event.key === "ArrowUp") {
    boostUp();
  } else if (event.key === "ArrowDown") {
    boostDown();
  }
});

function boostUp() {
  boosting = true;
  let boostCount = 0;

  let boostInterval = setInterval(function () {
    const jetTop = parseInt(
      window.getComputedStyle(jet).getPropertyValue("top")
    );
    jet.style.top = jetTop - 3 + "px";
    if (jetTop < 6) {
      console.log("reset position");
      jet.style.top = 6 + "px";
    }
    if (boostCount > 15) {
      clearInterval(boostInterval);
      boosting = false;
      boostCount = 0;
    }
    boostCount++;
  }, 30);
}

function boostDown() {
  let boostCount = 0;
  let boostInterval = setInterval(function () {
    const jetTop = parseInt(
      window.getComputedStyle(jet).getPropertyValue("top")
    );
    jet.style.top = jetTop + 3 + "px";
    if (boostCount > 10) {
      clearInterval(boostInterval);
      boosting = false;
      boostCount = 0;
    }
    boostCount++;
  }, 50);
}
