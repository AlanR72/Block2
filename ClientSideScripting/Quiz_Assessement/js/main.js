//MAIN javascript containing code for all pages

//Author: Alan Robb
//Date: 06/05/2025

// Create the container as date/time was loading unsmoothly
function initializeStarDate() {
    const container = document.getElementById('starDate');
    //Template literal `` allows multi line strings
    container.innerHTML = `
      <h2>STARDATE:</h2>
      <p id="dateLine"></p>
      <p id="timeLine"></p>
    `;
  }

  // Update just the text as container already loaded allowing for smooth transition
function updateDateandTime() {
    const now = new Date();
  
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    //Padstart must be a string and below creates 2 digits starting with 0 for recognisable time format i.e 01:02:03
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    //Displays date and time in 'stardate' element as 'template literal' ie allows variables and expressions embedded in strings
    document.getElementById('dateLine').textContent = `Date: ${day}/${month}/${year}`;
    document.getElementById('timeLine').textContent = `Time: ${hours}:${minutes}:${seconds}`;
  }
  
  // Set it up
  initializeStarDate();
  updateDateandTime(); // Show right away
  //set interval makes time update every second
  setInterval(updateDateandTime, 1000);


//function to display alt message when returning to menu page

function returnMenu() {
    //function listens for click of returnMenu button and creates small data file called hasReturned in local storage
    document.getElementById('returnMenu').addEventListener('click', function(event) {
        localStorage.setItem('hasReturned', 'true');  // Store flag indicating user has returned
        window.location.href = 'menu.html';  // Navigate to the menu page
    });
}
// Make sure the function runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', returnMenu);

var speechspeed = 50;
function welcomeBubble(){
    var welcomeTxtElement = document.getElementById('welcome_txt');
    
    var j = 0;
    var username = getCookie('username');
    if (localStorage.getItem('hasReturned') === 'true') {
        var altText = "Welcome back to the Main Menu, " + username +"! You can check your progress at any point at the bottom of the Menu Page!";
        document.getElementById('welcomeButton').style.display = "none";
        localStorage.removeItem('hasReturned');  // Clear the flag after use

        // Display text letter by letter
        function typeAltText() {
           
            if (j < altText.length) {
                welcomeTxtElement.innerHTML += altText.charAt(j);
                j++;
                setTimeout(typeAltText, speechspeed); // Adjust speed of typing
            }
        }
    
        // Start typing the "Welcome back" message
        typeAltText();
    }

    else {
        
        // Regular welcome message for first-time visitors
        var defaultText = "Hey There " + username + "! Welcome to the Space Academy! Click the button below for quiz instructions.";
        var j = 0;
        // Display text letter by letter for default message
        function typeDefaultText() {
            if (j < defaultText.length) {
                welcomeTxtElement.innerHTML += defaultText.charAt(j);
                j++;
                setTimeout(typeDefaultText, speechspeed); // Adjust speed of typing
            }
        }
    
        // Start typing the default message
        typeDefaultText();
        
    }

};

// Function to handle click and show alternative text one character at a time
function welcomeClick() {
    var username = getCookie('username');
    var altText = "Let's start your training " + username + " by clicking a Quiz Subject from the list!";
    var j = 0; // Initialize a new counter for the alternative text

    // Clear the previous text and start typing the alternative text
    document.getElementById('welcome_txt').innerHTML = '';
    
    // Create a typing effect for the alternative text
    function typeAltText() {
        if (j < altText.length) {
            document.getElementById('welcome_txt').innerHTML += altText.charAt(j);
            j++;
            setTimeout(typeAltText, 50); // Adjust the speed of typing if needed
        }
    }

    // Start the typing effect for the alternative text
    typeAltText();
    //Hide welcome button
    document.getElementById("welcomeButton").style.display = "none";
}


//Function that uses regular expressions to validate authentic email address and name present
function validateLogin() {
    //Accesses span elements in HTML page to display error if incorrect
    document.getElementById('nameError').textContent = "";
    document.getElementById('emailError').textContent = "";

    var name = document.getElementById('userName').value.trim();
    var email = document.getElementById('userEmail').value.trim();

    // Validate email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required!';
        document.getElementById('nameError').style.color = 'red';
        document.getElementById('nameError').style.fontSize = '2em';
        return false;
    }

    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerHTML = 'Invalid email address';
        document.getElementById('emailError').style.color = 'red';
        document.getElementById('emailError').style.fontSize = '2em';
        return false;
    }

    // Cookie and welcome message update
    setCookie('username', name, 7);  // Cookie expires in 7 days
    updateWelcomeMessage();          // Update the welcome message

    // Redirect to another page after validation using anonymous function
    setTimeout(() => {
        window.location.href = 'menu.html';
    }, 1000);

    return false;  // Prevent form submission
}


// Function to create a cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Cookie expiry time
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get the value of a cookie by name
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}

// Function to update the welcome message with the username
function updateWelcomeMessage() {
    const loginNameElement = document.getElementById('loginName');
    
    // Ensure the element exists before updating
    if (loginNameElement) {
        const username = getCookie('username');
        if (username) {
            loginNameElement.innerText = `Welcome Cadet ${username}!`;
        }else {
            loginNameElement.innerText = 'Welcome Guest!';
        }
    }
}

// Wrapped everything inside DOMContentLoaded as loginForm was throwing error when loading
document.addEventListener('DOMContentLoaded', function() {
    // Ensure the form is available before adding the onsubmit event
    const form = document.getElementById('loginForm');
    if (form) {
        form.onsubmit = function(event) {
            event.preventDefault(); // Prevent form from submitting the traditional way

            // Call the validateLogin function to perform validation
            if (validateLogin()) {
                // If the form is valid, update the welcome message
                updateWelcomeMessage();
            }
        };
    }

    // Run the welcome message update on page load
    updateWelcomeMessage();
});

function displayPassed(){

    let allPassed = true; // Track if all conditions are met

    // Retrieve the scores from localStorage. Logical OR ensures variable returns a score OR 0 so value is always returned
    const numeracyScore = sessionStorage.getItem('numeracyScore') || 0;
    if(numeracyScore > 2){
        document.getElementById('numeracyPassed').style.display = "block";
        document.getElementById('numeracyPassed').style.color = "lightgreen";
        document.getElementById('numeracyPassed').style.fontSize = "1.5em";
    }else {
        allPassed = false;
    }

    // Retrieve the scores from localStorage
    const literacyScore = sessionStorage.getItem('literacyScore') || 0;
    if(literacyScore > 2){
        document.getElementById('literacyPassed').style.display = "block";
        document.getElementById('literacyPassed').style.color = "lightgreen";
        document.getElementById('literacyPassed').style.fontSize = "1.5em";
    }else {
        allPassed = false;
    }

    // Retrieve the scores from localStorage
    const historyScore = sessionStorage.getItem('historyScore') || 0;
    if(historyScore > 2){
        document.getElementById('historyPassed').style.display = "block";
        document.getElementById('historyPassed').style.color = "lightgreen";
        document.getElementById('historyPassed').style.fontSize = "1.5em";
    }else {
        allPassed = false;
    }
    // Retrieve the scores from localStorage
    const awarenessScore = sessionStorage.getItem('awarenessScore') || 0;
    if(awarenessScore > 2){
        document.getElementById('awarenessPassed').style.display = "block";
        document.getElementById('awarenessPassed').style.color = "lightgreen";
        document.getElementById('awarenessPassed').style.fontSize = "1.5em";
    }else {
        allPassed = false;
    }
    // Retrieve the scores from localStorage
    const healthWellbeingScore = sessionStorage.getItem('healthWellbeingScore') || 0;
    if(healthWellbeingScore > 2){
        document.getElementById('wellbeingPassed').style.display = "block";
        document.getElementById('wellbeingPassed').style.color = "lightgreen";
        document.getElementById('wellbeingPassed').style.fontSize = "1.5em";
    }else {
        allPassed = false;
    }

    // Store the final result in sessionStorage
    sessionStorage.setItem('allConditionsPassed', allPassed);

    // Call passedAstro() ONLY if allPassed is true
    if (allPassed) {
        passedAstro();
    }
    return allPassed;
    
}
displayPassed();

//Function to display alternative astronaut image and welcome message if all quizzes are passed
function passedAstro(){
    var username = getCookie('username')
    const allConditionsPassed = sessionStorage.getItem('allConditionsPassed');
    //Alternative message for speech bubble
    const passedTxtElement = document.getElementById('passedTxt');
    
    if (allConditionsPassed === 'true') {
        let passedMessage = document.getElementById('passedMessage');
        let passedPara = document.getElementById('passedPara');

        //New welcome message hidden before allPassed
        passedMessage.innerHTML = "CONGRATULATIONS Astronaut " + username + "!";
        passedPara.innerHTML = "You have successfully completed your training!";
        //Hide original welcome message
        document.getElementById('loginName').style.display = "none";
        document.getElementById('loginPara').style.display = "none";
        passedMessage.style.display = "block"; // Show the passedMessage
        passedPara.style.display = "block";

        passedTxtElement.style.fontSize = ".9em";
        var txt = "WOO HOO!! Congratulations " + username + "! You have passed all the quizzes! Click below to proceed to the Graduation Page!";
        
        var speechspeed = 50;
        var i = 0;

        // Clear the content of the element before starting to type new text
        passedTxtElement.innerHTML = '';

        // Display text letter by letter for graduation message
        function typeAllPassedText() {
            if (i < txt.length) {
                passedTxtElement.innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeAllPassedText, speechspeed);
            }
        }
        
        //Hide original elements and display passed elements
        document.getElementById('welcome_txt').style.display = "none";
        document.getElementById('passedTxt').style.display = "block";
        document.getElementById('welcomeButton').style.display = "none";
        document.getElementById('mainAstro').style.display = "none";
        document.getElementById('partyAstro').style.display = "block";
        document.getElementById('speech_bubble').style.marginLeft = "5%";
        document.getElementById('passedButton').style.display = "block";
        
    // Start typing the All Passed message
        typeAllPassedText();
    }
}

function passedClick() {
    window.location.href = "graduation_page.html";
}