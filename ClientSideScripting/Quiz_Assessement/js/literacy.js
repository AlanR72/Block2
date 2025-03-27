// Literacy Quiz JavaScript

document.addEventListener('DOMContentLoaded', function() {
    loadLiteracyQuestion();  // Load the first question when the page is ready
});
let literacyCurrentQuestionIndex = 0;
let literacyScore = 0;
const literacyQuestions = [
    {
        literacy_question: "Which of the following words is a synonym for 'happy'?",
        options: ["Sad", "Content", "Angry", "Confused"],
        correctAnswer: "Content",
        feedback: "Correct! 'Content' is a synonym for 'happy'."
    },
    {
        literacy_question: "What is the opposite of 'light'?",
        options: ["Dark", "Heavy", "Bright", "Colorful"],
        correctAnswer: "Heavy",
        feedback: "Correct! The opposite of 'light' is 'heavy'."
    },
    {
        literacy_question: "Which word is spelled correctly?",
        options: ["Recieve", "Receive", "Recive", "Reieve"],
        correctAnswer: "Receive",
        feedback: "Correct! 'Receive' is the correct spelling."
    },
    // Add more questions here
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
    } else {
        literacyFeedbackContainer.textContent = `Incorrect. The correct answer is ${correctAnswer}.`;
    }

    literacySubmitButton.style.display = 'none'; // Hide submit button
    literacyNextButton.style.display = 'inline-block'; // Show next button
}

function nextLiteracyQuestion() {
    literacyCurrentQuestionIndex++;

    if (literacyCurrentQuestionIndex < literacyQuestions.length) {
        loadLiteracyQuestion();
    } else {
        showLiteracyFinalScore();
    }
}

function showLiteracyFinalScore() {
    literacyTotalScoreElement.textContent = `${literacyScore} out of ${literacyQuestions.length}`;
    literacyScoreContainer.style.display = 'block'; // Show the final score
    literacyNextButton.style.display = 'none'; // Hide next button at the end
}

function goToLiteracyMenu() {
    window.location.href = 'menu.html'; // Assuming the menu is in 'menu.html'
}

// Initialize the literacy quiz
loadLiteracyQuestion();
