let button = document.querySelector(".netflix-button");
let body = document.body;
let interacted = false;
let animationDone = false;

function startAnimation() {
  button.classList.add("start");
  console.log(startAnimation);

  setTimeout(() => {
    animationDone = true;
    if (!interacted) {
      triggerAction(); // Hvis ingen interaktion sker, skift baggrund
    }
  }, 3000); // 3 sekunder til animationen fuldføres
}

function triggerAction() {
  body.style.backgroundColor = "#e50914"; // Skifter baggrund til Netflix-rød
  button.style.display = "none"; // Skjuler knappen
  console.log(triggerAction);
}

function handleInteraction() {
  interacted = true;
  console.log(handleInteraction);
}

// Lyt efter interaktioner
button.addEventListener("click", triggerAction);
window.addEventListener("mousemove", handleInteraction);
window.addEventListener("keydown", handleInteraction);

// Start animationen, når siden loader
startAnimation();
