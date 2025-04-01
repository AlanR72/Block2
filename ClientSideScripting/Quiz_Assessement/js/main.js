function updateDateandTime(){

let currentDateTime = new Date();

let day = currentDateTime.getDate();
let month = currentDateTime.getMonth() +1;
let year = currentDateTime.getFullYear();
let hours = currentDateTime.getHours();
let minutes = currentDateTime.getMinutes();
let seconds = currentDateTime.getSeconds();

hours = String(hours).padStart(2, '0');
minutes = String(minutes).padStart(2, '0');
seconds = String(seconds).padStart(2, '0');

let formattedDate = `${day}/${month}/${year}`;
let formattedTime = `${hours}:${minutes}:${seconds}`;



document.getElementById('starDate').innerHTML = 
`<h3>STARDATE:</h3>
<p>Date: ${formattedDate}</p>
<p>Time: ${formattedTime}</p>`;
}

setInterval(updateDateandTime, 1000);

//function to display alt message when returning to menu page

function returnMenu() {
    document.getElementById('returnMenu').addEventListener('click', function(event) {
        localStorage.setItem('hasReturned', 'true');  // Store flag indicating user has returned
        window.location.href = 'menu.html';  // Navigate to the menu page
    });
}


var speechspeed = 50;
function welcomeBubble(){
    var welcomeTxtElement = document.getElementById('welcome_txt');
    
    var j = 0;
    var username = getCookie('username');
    if (localStorage.getItem('hasReturned') === 'true') {
        var altText = "Welcome back to the Main menu, " + username +"!";
        
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
    } else {
        
        // Regular welcome message for first-time visitors
        var defaultText = "Hey There " + username + "! Welcome to the Space Academy!";
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
    var altText = "Let's continue your training " + username + " by clicking a subject from the list!";
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
    document.getElementById("welcomeButton").style.display = "none";
}


function validateLogin() {
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

    // Redirect to another page after validation
    setTimeout(() => {
        window.location.href = 'menu.html';
    }, 1500);

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
            loginNameElement.innerText = `Welcome ${username}!`;
        } else {
            loginNameElement.innerText = 'Welcome Guest!';
        }
    }
}

// Wrap everything inside DOMContentLoaded as loginForm was throwing error when loading
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


