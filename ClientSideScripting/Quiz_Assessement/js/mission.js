//Mission Page Javascript

//Author: Alan Robb
//Date: 06/05/2025

const countdownEl = document.getElementById('countdown');
const rocketEl = document.getElementById('rocket');
const astroEl = document.querySelector('.astro');
const speechBubbleEl = document.querySelector('.speech_bubble'); // Select the speech bubble element
const goodbyeEl = document.getElementById('goodbye'); // Select the Goodbye element

let count = 10;
let i = 0; // Typing index
let hasLaunchedBubble = false; // To prevent multiple runs

// Function to get username from cookies
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return "Astronaut";
}

// Typing effect function
function launchBubble() {
  const username = getCookie('username');
  const txt = "Congratulations Astronaut " + username + "! Good Luck on your first mission. See you on Space Station Astra. Up, up and Awaayyy!";
  const speechspeed = 50;

  if (i < txt.length) {
    document.getElementById('launch_txt').innerHTML += txt.charAt(i);
    i++;
    setTimeout(launchBubble, speechspeed);
  } else {
    // When typing is finished, fade the speech bubble after 2 seconds
    setTimeout(fadeSpeechBubble, 2000); // Delay fade by 2 seconds
  }
}

// Fade out the speech bubble
function fadeSpeechBubble() {
  speechBubbleEl.style.transition = 'opacity 2s'; // Smooth fade effect
  speechBubbleEl.style.opacity = '0'; // Fade out
}

// Countdown function
function updateCountdown() {
  countdownEl.textContent = count;

  // Start typing at the same time as countdown starts (first run only)
  if (count === 10 && !hasLaunchedBubble) {
    launchBubble();
    hasLaunchedBubble = true;
  }

  if (count === 8) { // Start floating astronaut after 2 seconds (countdown reaches 8)
    setTimeout(floatAstro, 2000); // Delay astronaut floating by 2 seconds
  }

  if (count === 0) {
    countdownEl.textContent = 'Lift-off!';
    setTimeout(() => {
      countdownEl.style.opacity = '0';
      rocketEl.style.transform = 'translateY(-200vh)';
    }, 1000);

    // After the rocket disappears, show the Goodbye message after the rocket animation
    setTimeout(showGoodbye, 8000); // Delay the Goodbye message for 3 seconds (after rocket animation)
  } else {
    count--;
    setTimeout(updateCountdown, 1000);
  }
}

// Start countdown
updateCountdown();

// Astronaut floating
function floatAstro() {
  astroEl.style.transform = 'translate(-50%, -100vh)';
}

// Show Goodbye message after everything completes
function showGoodbye() {
  goodbyeEl.style.transition = 'opacity 2s'; // Smooth fade-in
  goodbyeEl.style.opacity = '1'; // Make the Goodbye message visible
  goodbyeEl.innerHTML = 'Goodbye! See you on your next mission!'; // Set the Goodbye message text
}
