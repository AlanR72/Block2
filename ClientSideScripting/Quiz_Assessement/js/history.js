// Scottish History Quiz JavaScript

document.addEventListener('DOMContentLoaded', function() {
    loadHistoryQuestion();  // Call the function to load the first history question after the DOM is loaded
});


const historyQuestions = [
    {
        question: "Which of the following are famous Scottish battles? (Choose all that apply)",
        options: ["Battle of Bannockburn", "Battle of Hastings", "Battle of Culloden", "Battle of Waterloo"],
        correctAnswers: ["Battle of Bannockburn", "Battle of Culloden"]
    },
    // Add more history questions here
];

let currentHistoryQuestionIndex = 0;
let historyScore = 0;

function loadHistoryQuestion() {
    const questionContainer = document.getElementById('history-question-container');
    const optionsContainer = document.getElementById('history-options-container');
    const submitButton = document.getElementById('history-submit-btn');
    const feedbackContainer = document.getElementById('history-feedback');

    // Clear previous feedback
    feedbackContainer.textContent = "";

    // Reset "Next Question" button
    document.getElementById('history-next-btn').style.display = 'none';

    // Clear previous options
    optionsContainer.innerHTML = '';

    const currentQuestion = historyQuestions[currentHistoryQuestionIndex];

    // Display the question
    questionContainer.textContent = currentQuestion.question;

    // Create checkboxes for options
    currentQuestion.options.forEach(option => {
        const label = document.createElement('label');
        label.textContent = option;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = option;
        checkbox.classList.add('history-option');
        label.appendChild(checkbox);

        optionsContainer.appendChild(label);
    });

    submitButton.style.display = 'block';
}

function submitHistoryAnswer() {
    const selectedOptions = [...document.querySelectorAll('.history-option:checked')].map(checkbox => checkbox.value);
    const currentQuestion = historyQuestions[currentHistoryQuestionIndex];
    const feedbackContainer = document.getElementById('history-feedback');

    // Check if selected options match the correct answers
    if (JSON.stringify(selectedOptions.sort()) === JSON.stringify(currentQuestion.correctAnswers.sort())) {
        historyScore++;
        feedbackContainer.textContent = "Correct!";
    } else {
        feedbackContainer.textContent = `Incorrect. The correct answers are: ${currentQuestion.correctAnswers.join(', ')}`;
    }

    document.getElementById('history-submit-btn').style.display = 'none';
    document.getElementById('history-next-btn').style.display = 'block';
}

function nextHistoryQuestion() {
    currentHistoryQuestionIndex++;

    if (currentHistoryQuestionIndex < historyQuestions.length) {
        loadHistoryQuestion();
    } else {
        showHistoryScore();
    }
}

function showHistoryScore() {
    const questionContainer = document.getElementById('history-question-container');
    const optionsContainer = document.getElementById('history-options-container');
    const feedbackContainer = document.getElementById('history-feedback');
    const scoreContainer = document.getElementById('history-score-container');
    const totalScore = document.getElementById('history-total-score');

    optionsContainer.innerHTML = '';
    feedbackContainer.textContent = '';

    questionContainer.textContent = `Quiz completed! Your score is ${historyScore} out of ${historyQuestions.length}.`;

    totalScore.textContent = `${historyScore} / ${historyQuestions.length}`;

    scoreContainer.style.display = 'block';
    document.getElementById('history-next-btn').style.display = 'none';
}