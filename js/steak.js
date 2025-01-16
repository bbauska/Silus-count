const confettiContainer = document.querySelector('#confetti-container');
const showConfetti = () => {
  const confetti = document.createElement('div');
  confetti.textContent = '🥩';
  confetti.classList.add('confetti');
  confetti.style.left = Math.random() * innerWidth + 'px';
  confettiContainer.appendChild(confetti);

  setTimeout(() => {
    confetti.remove();
  }, 5000);  /* 5000 - how far down the screen before disappears */
};

setInterval(() => {
  showConfetti();
}, 100);  /* 400 */
