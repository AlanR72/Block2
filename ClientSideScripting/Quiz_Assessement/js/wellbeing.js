// Health and Wellbeing Quiz JavaScript

var i = 0; // Initialize the counter variable

function wellbeingBubble() {
    var username = getCookie('username');
    var txt = "Hey There " + username + "I am Astronaut Hercules. Let's see how Healthy you are!";
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
    username = getCookie('username');
    var altText = "Ok " + username + "! Drag the correct answers across to the correct box!";
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


document.addEventListener('DOMContentLoaded', function() {
    loadHealthWellbeingQuestion();  // Load the first question when the page is ready
});
let healthWellbeingCurrentQuestionIndex = 0;
let healthWellbeingScore = 0;

const healthWellbeingQuestions = [
    {
        healthWellbeing_question: "What helps you stay hyrdated?",
        type: "text", // Text input
        correctAnswer: "Water",
        feedback: "Correct! Water helps you stay hydrated."
    },
    {
        healthWellbeing_question: "Which of these is a healthy snack?(Select all that apply)",
        type: "checkbox", // Multiple correct answers
        options: ["Chocolate", "Fruit", "Crisps", "Porridge"],
        correctAnswer: ["Fruit", "Porridge"],
        feedback: "Correct! Fruit and Porridge."
    },
    {
        healthWellbeing_question: "What is the best way to stay healthy?",
        type: "radio", // Multiple choice
        options: ["Eat candy every day", "Drink water and exercise regularly", "Stay up late and watch TV", "Skip meals"],
        correctAnswer: "Drink water and exercise regularly",
        feedback: "Correct! Drink water and exercise regularly."
    },
    {
        healthWellbeing_question: "Complete the phrase. An _____ a day keeps the doctor away?",
        type: "text", // Text input
        correctAnswer: "apple",
        feedback: "Correct! An apple a day keeps the doctor away."
    },
    {
        healthWellbeing_question: "Which of these is bad for your health? (Choose all that apply)",
        type: "checkbox",
        options: ["Eating junk food", "Sleeping to little", "Too many fizzy drinks", "All of the above."],
        correctAnswer: "All of the above.",
        feedback: "Correct! All of the above."
    }
];

const healthWellbeingQuestionContainer = document.getElementById('health-wellbeing-question');
const healthWellbeingOptionsContainer = document.getElementById('health-wellbeing-options-container');
const healthWellbeingFeedbackContainer = document.getElementById('health-wellbeing-feedback');
const healthWellbeingSubmitButton = document.getElementById('health-wellbeing-submit-btn');
const healthWellbeingNextButton = document.getElementById('health-wellbeing-next-btn');
const healthWellbeingTotalScoreElement = document.getElementById('health-wellbeing-total-score');
const healthWellbeingScoreContainer = document.getElementById('health-wellbeing-score-container');

function loadHealthWellbeingQuestion() {
    const question = healthWellbeingQuestions[healthWellbeingCurrentQuestionIndex];
    healthWellbeingQuestionContainer.textContent = question.healthWellbeing_question;
    healthWellbeingOptionsContainer.innerHTML = ''; // Clear previous options

    if (question.type === "text") {
        const input = document.createElement('input');
        input.type = "text";
        input.id = "health-wellbeing-answer";
        healthWellbeingOptionsContainer.appendChild(input);
    } else if (question.type === "radio") {
        question.options.forEach(option => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = "radio";
            input.name = "health-wellbeing-radio";
            input.value = option;
            label.appendChild(input);
            label.appendChild(document.createTextNode(option));
            healthWellbeingOptionsContainer.appendChild(label);
            healthWellbeingOptionsContainer.appendChild(document.createElement('br'));
        });
    } else if (question.type === "checkbox") {
        question.options.forEach(option => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = "checkbox";
            input.value = option;
            label.appendChild(input);
            label.appendChild(document.createTextNode(option));
            healthWellbeingOptionsContainer.appendChild(label);
            healthWellbeingOptionsContainer.appendChild(document.createElement('br'));
        });
    }

    healthWellbeingQuestionContainer.style.opacity = 0; // Reset opacity for fade-in
    setTimeout(() => {
        healthWellbeingQuestionContainer.style.animation = "fadeIn 1s forwards"; // Apply fade-in animation
    }, 100);

    healthWellbeingFeedbackContainer.textContent = ''; // Clear previous feedback
    healthWellbeingSubmitButton.style.display = 'inline-block'; // Show submit button
    healthWellbeingNextButton.style.display = 'none'; // Hide next button
}

function submitHealthWellbeingAnswer() {
    const question = healthWellbeingQuestions[healthWellbeingCurrentQuestionIndex];
    let userAnswer = '';

    if (question.type === "text") {
        userAnswer = document.getElementById("health-wellbeing-answer").value.trim();
    } else if (question.type === "radio") {
        const selectedRadio = document.querySelector('input[name="health-wellbeing-radio"]:checked');
        if (selectedRadio) {
            userAnswer = selectedRadio.value;
        }
    } else if (question.type === "checkbox") {
        const selectedCheckboxes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value);
        userAnswer = selectedCheckboxes.sort().join(', ');
    }

    if (!userAnswer) {
        healthWellbeingFeedbackContainer.textContent = 'Please provide an answer!';
        healthWellbeingFeedbackContainer.style.color = 'red';
        healthWellbeingFeedbackContainer.style.fontSize = '1.7em';
        return;
    }

    if (Array.isArray(question.correctAnswer)) {
        // Sort and join the user answer and correct answer for array type question
        const sortedUserAnswer = userAnswer.split(', ').sort().join(', ').toLowerCase(); // Convert to lowercase
        const sortedCorrectAnswer = question.correctAnswer.sort().join(', ').toLowerCase(); // Convert to lowercase

        if (sortedUserAnswer === sortedCorrectAnswer) {
            healthWellbeingScore++;
            healthWellbeingFeedbackContainer.textContent = "Correct!";
            healthWellbeingFeedbackContainer.style.fontSize = "2em";
            healthWellbeingFeedbackContainer.style.color = "lightgreen";
            healthWellbeingFeedbackContainer.style.padding = "5%";
        } else {
            healthWellbeingFeedbackContainer.textContent = `Incorrect. The correct answers are: ${question.correctAnswer.join(', ')}.`;
            healthWellbeingFeedbackContainer.style.fontSize = "2em";
            healthWellbeingFeedbackContainer.style.color = "red";
            healthWellbeingFeedbackContainer.style.padding = "5%";
        }
    } else {
        // Compare text answers in a case-insensitive way by converting both to lowercase
        if (userAnswer.toLowerCase() === question.correctAnswer.toLowerCase()) {
            healthWellbeingScore++;
            healthWellbeingFeedbackContainer.textContent = "Correct!";
            healthWellbeingFeedbackContainer.style.fontSize = "2em";
            healthWellbeingFeedbackContainer.style.color = "lightgreen";
            healthWellbeingFeedbackContainer.style.padding = "5%";
        } else {
            healthWellbeingFeedbackContainer.textContent = `Incorrect. The correct answer is: ${question.correctAnswer}.`;
            healthWellbeingFeedbackContainer.style.fontSize = "2em";
            healthWellbeingFeedbackContainer.style.color = "red";
            healthWellbeingFeedbackContainer.style.padding = "5%";
        }
    }

    // Save the score to localStorage (here we are saving numeracyScore for the numeracy quiz)
    sessionStorage.setItem('healthWellbeingScore', healthWellbeingScore);

    healthWellbeingSubmitButton.style.display = 'none'; // Hide submit button
    healthWellbeingNextButton.style.display = 'inline-block'; // Show next button
}

function nextHealthWellbeingQuestion() {
    healthWellbeingCurrentQuestionIndex++;

    // If there are more questions, load the next question
    if (healthWellbeingCurrentQuestionIndex < healthWellbeingQuestions.length) {
        loadHealthWellbeingQuestion();

        // Check if it's the last question (assuming there are 5 questions)
        if (healthWellbeingCurrentQuestionIndex == 4) {
            document.getElementById('health-wellbeing-next-btn').textContent = "Finish Quiz";
        }
    }
    else {
        showHealthWellbeingFinalScore();
    }
}


function showHealthWellbeingFinalScore() {
    const questionContainer = document.getElementById('health-wellbeing-question-container');
    const optionsContainer = document.getElementById('health-wellbeing-options-container');
    const feedbackContainer = document.getElementById('health-wellbeing-feedback');
    const scoreContainer = document.getElementById('health-wellbeing-score-container');
    const totalScore = document.getElementById('health_wellbeing_score');

    // Clear out the options and feedback
    optionsContainer.innerHTML = '';
    feedbackContainer.textContent = '';

    questionContainer.textContent = `Quiz completed! Your score is ${healthWellbeingScore} out of ${healthWellbeingQuestions.length}.`;
    questionContainer.style.textAlign = "center";

    // Display the score
    healthWellbeingTotalScoreElement.textContent = `${healthWellbeingScore} / ${healthWellbeingQuestions.length}`;

   

//Display message
var username = getCookie('username'); 
if(healthWellbeingScore > 2){

var altText = "Well done " + username + "! You have passed the Health and Wellbeing Quiz!";
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
}else {
    // This block will run if score <= 2
    var altText = "Better luck next time " + username + "! Keep practicing the Health and Wellbeing Quiz!";
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

    // Show the score container
    scoreContainer.style.display = 'block';

    // Hide "Next Question" button
    document.getElementById("health-wellbeing-next-btn").style.display = 'none';
}



