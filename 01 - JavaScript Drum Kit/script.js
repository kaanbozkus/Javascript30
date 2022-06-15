function playSound(e) {
  const audio = document.querySelector(`audio[data-key=${e.code}]`);
  const key = document.querySelector(`div[data-key=${e.code}]`);
  key.classList.add("playing");
  if (!audio) return;
  audio.currentTime = 0; // rewind to the start
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
