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

    if (localStorage.getItem('hasReturned') === 'true') {
        var altText = "Welcome back to the Main menu, cadet!";
        
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
        var defaultText = "Hey There Cadet ! Welcome to the Space Academy!";
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

    document.getElementById("menuButton").style.display = "none"; // Hide the button
};

// Function to handle click and show alternative text one character at a time
function welcomeClick() {
    var altText = "Let's continue your training by clicking a subject from the list below!";
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

var i = 0; // Initialize the counter variable

// Function to handle typing text
function numeracyBubble() {
    var txt = "Hey There Cadet! Let's test your counting skills";
    var speechspeed = 50;

    // Display text letter by letter
    if(i < txt.length){
        document.getElementById('welcome_txt').innerHTML += txt.charAt(i);
        i++;
        setTimeout(numeracyBubble, speechspeed);
    }
    
}

// Function to handle click and show alternative text one character at a time
function numeracyClick() {
    var altText = "Ok Cadet! Let's work through the quiz!";
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
    document.getElementById("numeracyButton").style.display = "none";
}

function literacyBubble() {
    var txt = "Hey There Cadet! Let's test your literacy skills";
    var speechspeed = 50;

    // Display text letter by letter
    if(i < txt.length){
        document.getElementById('welcome_txt').innerHTML += txt.charAt(i);
        i++;
        setTimeout(literacyBubble, speechspeed);
    }
    
}

// Function to handle click and show alternative text one character at a time
function literacyClick() {
    var altText = "Ok Cadet! Let's work through the quiz!";
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
    document.getElementById("literacyButton").style.display = "none";
}

function historyBubble() {
    var txt = "Hey There Cadet! Let's test your counting skills";
    var speechspeed = 50;

    // Display text letter by letter
    if(i < txt.length){
        document.getElementById('welcome_txt').innerHTML += txt.charAt(i);
        i++;
        setTimeout(historyBubble, speechspeed);
    }
    
}

// Function to handle click and show alternative text one character at a time
function historyClick() {
    var altText = "Ok Cadet! Let's work through the quiz!";
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
    document.getElementById("historyButton").style.display = "none";
}

function wellbeingBubble() {
    var txt = "Hey There Cadet! How good is your Health and Wellbeing knowledge";
    var speechspeed = 50;

    // Display text letter by letter
    if(i < txt.length){
        document.getElementById('welcome_txt').innerHTML += txt.charAt(i);
        i++;
        setTimeout(wellbeingBubble, speechspeed);
    }
    
}

// Function to handle click and show alternative text one character at a time
function wellbeingClick() {
    var altText = "Ok Cadet! Let's work through the quiz!";
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
    document.getElementById("wellbeingButton").style.display = "none";
}

function awarenessBubble() {
    var txt = "Let's find out how Socially Aware you are Cadet!";
    var speechspeed = 50;

    // Display text letter by letter
    if(i < txt.length){
        document.getElementById('welcome_txt').innerHTML += txt.charAt(i);
        i++;
        setTimeout(awarenessBubble, speechspeed);
    }
    
}

// Function to handle click and show alternative text one character at a time
function awarenessClick() {
    var altText = "Ok Cadet! Let's work through the quiz!";
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
    document.getElementById("awarenessButton").style.display = "none";
}

function validateLogin(){

    document.getElementById('nameError').textContent = "";
    document.getElementById('emailError').textContent = "";
    
    var name = document.getElementById('userName').value.trim();
    var email = document.getElementById('userEmail').value.trim();
    
    
    //Validate email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(name === ''){
        document.getElementById('nameError').textContent = 'Name is required!';
        document.getElementById('nameError').style.color = 'red';
        document.getElementById('nameError').style.fontSize = '2em';
        return false;
    }
        
    if(!emailRegex.test(email)){
        document.getElementById('emailError').innerHTML = 'Invalid email address';
        document.getElementById('emailError').style.color = 'red';
        document.getElementById('emailError').style.fontSize = '2em';
        return false;
    }
    
    setTimeout(()=>{
        window.location.href = 'menu.html';
        },1500);
        
        return false;
        
    }

    // let questions = [
        
    //     'What is the capital city of Scotland?',
    //     'What is the capital city of Ireland?',
    //     'What is the capital city of Peru?',
    //     'What is the capital city of France?'
    // ];
    
    // let currentQuestion = 0;

    // function setQuestions(){
    //     for(var i=0; i < questions.length; i++)
    //     {
    //         document.getElementById('q'+ i).children[0].innerHTML = questions[i];
    //     }
    //     showQuestion(currentQuestion);
    // }

    // function showQuestion(index){
    //     let allQuestions = document.getElementsByClassName('question');
    //     for(let i = 0; i < allQuestions.length; i++){
    //         allQuestions[i].style.display = 'none';
    //     }

    //     document.getElementById('q'+ index).style.display = 'block';
    // }
    
    // function checkAnswers() {
    //     let counter = 0;
    
    //     // Check the current question's answer based on the visible question
    //     let currentAnswer = document.getElementById('aq' + currentQuestion);
    
    //     if (currentAnswer) {
    //         let answer = currentAnswer.value.toLowerCase();
    
    //         if (currentQuestion === 0 && answer === 'edinburgh') {
    //             counter++;
    //             document.getElementById('aq0').style.display = 'none';
    //             document.getElementById('q0').style.backgroundColor = 'green';
    //             document.getElementById('q0').style.width = '75%';
    //             document.getElementById('q0').style.textAlign = 'center';
    //             document.getElementById('q0').style.height = '60px';
    //             document.getElementById('q0').children[0].innerHTML = 'Correct, the capital city of Scotland is Edinburgh';
    //         } else if (currentQuestion === 1 && answer === 'dublin') {
    //             counter++;
    //             document.getElementById('aq1').style.display = 'none';
    //             document.getElementById('q1').style.backgroundColor = 'green';
    //             document.getElementById('q1').style.width = '75%';
    //             document.getElementById('q1').style.textAlign = 'center';
    //             document.getElementById('q1').style.height = '60px';
    //             document.getElementById('q1').style.fontSize = '1.3em';
    //             document.getElementById('q1').children[0].innerHTML = 'Correct, the capital city of Ireland is Dublin';
    //         } else if (currentQuestion === 2 && answer === 'lima') {
    //             counter++;
    //             document.getElementById('aq2').style.display = 'none';
    //             document.getElementById('q2').style.backgroundColor = 'green';
    //             document.getElementById('q2').children[0].innerHTML = 'Correct, the capital city of Peru is Lima';
    //         } else if (currentQuestion === 3 && answer === 'paris') {
    //             counter++;
    //             document.getElementById('aq3').style.display = 'none';
    //             document.getElementById('q3').style.backgroundColor = 'green';
    //             document.getElementById('q3').children[0].innerHTML = 'Correct, the capital city of France is Paris';
    //         } else {
    //             document.getElementById('aq' + currentQuestion).style.display = 'none';
    //             document.getElementById('q' + currentQuestion).style.backgroundColor = 'red';
    //             document.getElementById('q' + currentQuestion).style.width = '75%';
    //             document.getElementById('q' + currentQuestion).style.textAlign = 'center';
    //             document.getElementById('q' + currentQuestion).style.height = '60px';
    //             document.getElementById('q' + currentQuestion).children[0].innerHTML = 'Incorrect, the answer is ' + getCorrectAnswer(currentQuestion);
    //         }
    //     }
    
    //     document.getElementById('score').innerHTML = 'Score:' + counter;
    
    // }

    // function getCorrectAnswer(index) {
    //     // This function returns the correct answer for each question based on its index
    //     const answers = ['Edinburgh', 'Dublin', 'Lima', 'Paris'];
    //     return answers[index];
    // }

    // function nextQuestion(){
    //     document.getElementById('q' + currentQuestion).style.display = 'none';
    //     currentQuestion++;

    //     if(currentQuestion < questions.length){
    //         showQuestion(currentQuestion);
    //     }
    // }
    // window.onload = function() {
    //     setQuestions();
    //     typeWriter();
    // };

    