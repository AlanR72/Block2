// Literacy Quiz JavaScript

var i = 0; // Initialize the counter variable

function literacyBubble() {
    var username = getCookie('username');
    var txt = "Oops! Sorry " + username + "! I was at an exciting bit of my book there!";
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
    var username = getCookie('username');
    var altText = "Let's work through the quiz " + username + "! and see how good you are with words!";
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

document.addEventListener('DOMContentLoaded', function() {
    loadLiteracyQuestion();  // Load the first question when the page is ready
});
let literacyCurrentQuestionIndex = 0;
let literacyScore = 0;
const literacyQuestions = [
    {
        literacy_question: "Which of these options is another word for happy?",
        options: ["Sad", "Joyful", "Angry", "Confused"],
        correctAnswer: "Joyful",
        feedback: "Correct! 'Content' is a synonym for 'happy'."
    },
    {
        literacy_question: "Which of the following sentences is written in the past tense?",
        options: ["She will sing at the concert.", "She is singing at the concert.", "She sang at the concert.", "She sings at the concert."],
        correctAnswer: "She sang at the concert.",
        feedback: "Correct! She sang at the concert."
    },
    {
        literacy_question: "Which word is spelled correctly?",
        options: ["Recieve", "Receive", "Recive", "Reieve"],
        correctAnswer: "Receive",
        feedback: "Correct! 'Receive' is the correct spelling."
    },
    {
        literacy_question: "Which of these sentences is a question?",
        options: ["The dog is playing outside.", "Did you finish your homework?", "I like to read books.", "The sky is blue."],
        correctAnswer: "Did you finish your homework?",
        feedback: "Correct! Did you finish your homework?"
    },
    {
        literacy_question: "What does the word 'enthusiastic' mean?",
        options: ["Boring", "Excited and full of energy", "Sad and quiet", "Angry and upset"],
        correctAnswer: "Excited and full of energy",
        feedback: "Correct! Excited and full of energy"
    }
];

const literacyQuestionContainer = document.getElementById('literacy-question');
const literacyOptionsContainer = document.getElementById('literacy-options');
const literacyFeedbackContainer = document.getElementById('literacy-feedback');
const literacySubmitButton = document.getElementById('literacy-submit-btn');
const literacyNextButton = document.getElementById('literacy-next-btn');
const literacyTotalScoreElement = document.getElementById('literacy-total-score');
const literacyScoreContainer = document.getElementById('literacy-score-container');


function loadLiteracyQuestion() {
    const question = literacyQuestions[literacyCurrentQuestionIndex];
    literacyQuestionContainer.textContent = question.literacy_question;
    literacyOptionsContainer.innerHTML = ''; // Clear previous options

    question.options.forEach(option => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'literacy-answer';
        input.value = option;
        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        literacyOptionsContainer.appendChild(label);
        literacyOptionsContainer.appendChild(document.createElement('br')); // Line break for each option
    });

    literacyQuestionContainer.style.opacity = 0; // Reset opacity for fade-in
    setTimeout(() => {
        literacyQuestionContainer.style.animation = "fadeIn 1s forwards"; // Apply fade-in animation
    }, 100);

    literacyFeedbackContainer.textContent = ''; // Clear previous feedback
    literacySubmitButton.style.display = 'inline-block'; // Show submit button
    literacyNextButton.style.display = 'none'; // Hide next button
}

function submitLiteracyAnswer() {
    const selectedAnswer = document.querySelector('input[name="literacy-answer"]:checked');
    if (!selectedAnswer) {
        literacyFeedbackContainer.textContent = 'Please select an answer!';
        return;
    }

    const userAnswer = selectedAnswer.value;
    const correctAnswer = literacyQuestions[literacyCurrentQuestionIndex].correctAnswer;

    if (userAnswer === correctAnswer) {
        literacyScore++;
        literacyFeedbackContainer.textContent = "Correct!";
        literacyFeedbackContainer.style.color = "lightgreen";
        literacyFeedbackContainer.style.fontSize = "2em";
        literacyFeedbackContainer.style.padding = "5%";
    } else {
        literacyFeedbackContainer.textContent = `Incorrect. The correct answer is ${correctAnswer}.`;
        literacyFeedbackContainer.style.color = "red";
        literacyFeedbackContainer.style.fontSize = "2em";
        literacyFeedbackContainer.style.textAlign = "center";
        literacyFeedbackContainer.style.padding = "5%";
    }

    literacySubmitButton.style.display = 'none'; // Hide submit button
    literacyNextButton.style.display = 'inline-block'; // Show next button
}


function nextLiteracyQuestion() {
    literacyCurrentQuestionIndex++;

    // If there are more questions, load the next question
    if (literacyCurrentQuestionIndex < literacyQuestions.length) {
        loadLiteracyQuestion();

        // Check if it's the last question (assuming there are 5 questions)
        if (literacyCurrentQuestionIndex == 4) {
            document.getElementById('literacy-next-btn').textContent = "Finish Quiz";
        }
    } else {
        showScore();
    }
}


function showScore() {
    const questionContainer = document.getElementById('literacy-question-container');
    const optionsContainer = document.getElementById('literacy-options');
    const feedbackContainer = document.getElementById('literacy-feedback');
    const scoreContainer = document.getElementById('literacy-score-container');
    const totalScore = document.getElementById('literacy-total-score');

    // Clear out the options and feedback
    optionsContainer.innerHTML = '';
    feedbackContainer.textContent = '';

    questionContainer.textContent = `Quiz completed! Your score is ${literacyScore} out of ${literacyQuestions.length}.`;
    questionContainer.style.textAlign = "center";

    // Display the score
    totalScore.textContent = `${literacyScore} / ${literacyQuestions.length}`;
    //Display message
    var username = getCookie('username'); 
    if(literacyScore > 2){
    
    var altText = "Well done " + username + "! You have passed the Literacy Quiz!";
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
    }else {
        // This block will run if score <= 2
        var altText = "Better luck next time " + username + "! Keep practicing the Literacy Quiz!";
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
    
    // Show the score container
    scoreContainer.style.display = 'block';

    // Hide "Next Question" button
    document.getElementById('literacy-next-btn').style.display = 'none';
}

// Initialize the literacy quiz
loadLiteracyQuestion();
