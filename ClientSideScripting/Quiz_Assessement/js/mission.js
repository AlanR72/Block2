const countdownEl = document.getElementById('countdown');
const rocketEl = document.getElementById('rocket');

let count = 10;

function updateCountdown() {
  countdownEl.textContent = count;
  if (count === 0) {
    countdownEl.textContent = 'Liftoff!'; // Display Liftoff when countdown hits zero
    setTimeout(() => {
      countdownEl.style.opacity = '0'; // Fade out the 'Liftoff!' message
      rocketEl.style.transform = 'translateY(-200vh)'; // Move rocket off-screen
    }, 1000); // Wait for 1 second before fading the message and starting the rocket
  } else {
    count--;
    setTimeout(updateCountdown, 1000); // Continue countdown every second
  }
}

updateCountdown();
