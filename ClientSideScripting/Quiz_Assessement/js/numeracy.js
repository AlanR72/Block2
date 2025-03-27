document.addEventListener('DOMContentLoaded', function() {
    loadNumeracyQuestion();  // Load the first question when the page is ready
});

const numeracyQuestions = [
    {
        question: "What is 5 + 5?",
        correctAnswer: "10"
    },
    {
        question: "What is 7 * 6?",
        correctAnswer: "42"
    },
    {
        question: "What is 12 / 4?",
        correctAnswer: "3"
    },
    {
        question: "What is 15 - 8?",
        correctAnswer: "7"
    },
    {
        question: "What is 9 + 7?",
        correctAnswer: "16"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadNumeracyQuestion() {
    const questionContainer = document.getElementById('numeracy-question-container');
    const optionsContainer = document.getElementById('numeracy-options-container');
    const submitButton = document.getElementById('numeracy-submit-btn');
    const feedbackContainer = document.getElementById('feedback');

    // Clear previous feedback
    feedbackContainer.textContent = "";

    // Reset the "Next Question" button
    document.getElementById('numeracy-next-btn').style.display = 'none';

    // Clear any previous input
    optionsContainer.innerHTML = '';

    // Get the current question object
    const currentQuestion = numeracyQuestions[currentQuestionIndex];

    // Display the question
    questionContainer.textContent = currentQuestion.question;

    // Create an input box for the user to type their answer
    const inputBox = document.createElement('input');
    inputBox.type = 'text';
    inputBox.id = 'user-answer';
    optionsContainer.appendChild(inputBox);

    // Show the "Submit Answer" button
    submitButton.style.display = 'block';
}

function submitAnswer() {
    const userAnswer = document.getElementById('user-answer').value.trim();
    const currentQuestion = numeracyQuestions[currentQuestionIndex];
    const feedbackContainer = document.getElementById('feedback');

    // Check if the user's answer is correct
    if (userAnswer === currentQuestion.correctAnswer) {
        score++;
        feedbackContainer.textContent = "Correct!";
    } else {
        feedbackContainer.textContent = `Incorrect. The correct answer is ${currentQuestion.correctAnswer}.`;
    }

    // Hide the "Submit Answer" button and show the "Next Question" button
    document.getElementById('numeracy-submit-btn').style.display = 'none';
    document.getElementById('numeracy-next-btn').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;

    // If there are more questions, load the next question
    if (currentQuestionIndex < numeracyQuestions.length) {
        loadNumeracyQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    const questionContainer = document.getElementById('numeracy-question-container');
    const optionsContainer = document.getElementById('numeracy-options-container');
    const feedbackContainer = document.getElementById('feedback');
    const scoreContainer = document.getElementById('score-container');
    const totalScore = document.getElementById('total-score');

    // Clear out the options and feedback
    optionsContainer.innerHTML = '';
    feedbackContainer.textContent = '';

    questionContainer.textContent = `Quiz completed! Your score is ${score} out of ${numeracyQuestions.length}.`;

    // Display the score
    totalScore.textContent = `${score} / ${numeracyQuestions.length}`;

    // Show the score container
    scoreContainer.style.display = 'block';

    // Hide "Next Question" button
    document.getElementById('numeracy-next-btn').style.display = 'none';
}

// Function to return to the menu (or navigate to a different page)
function goToMenu() {
    
    window.location.href = "menu.html";
    
}
