// Health and Wellbeing Quiz JavaScript
document.addEventListener('DOMContentLoaded', function() {
    loadHealthWellbeingQuestion();  // Load the first question when the page is ready
});
let healthWellbeingCurrentQuestionIndex = 0;
let healthWellbeingScore = 0;

const healthWellbeingQuestions = [
    {
        healthWellbeing_question: "What is the recommended amount of sleep for an adult?",
        type: "text", // Text input
        correctAnswer: "7-9 hours",
        feedback: "Correct! Adults typically need 7 to 9 hours of sleep for optimal health."
    },
    {
        healthWellbeing_question: "Which of the following are types of mental health disorders? (Select all that apply)",
        type: "checkbox", // Multiple correct answers
        options: ["Depression", "Anxiety", "Diabetes", "Schizophrenia"],
        correctAnswer: ["Depression", "Anxiety", "Schizophrenia"],
        feedback: "Correct! Depression, Anxiety, and Schizophrenia are mental health disorders."
    },
    {
        healthWellbeing_question: "What is the most important nutrient for building and repairing muscles?",
        type: "radio", // Multiple choice
        options: ["Carbohydrates", "Proteins", "Fats", "Vitamins"],
        correctAnswer: "Proteins",
        feedback: "Correct! Proteins are essential for muscle repair and growth."
    },
    {
        healthWellbeing_question: "What are some common signs of dehydration? (Enter as many as you can, separated by commas)",
        type: "text", // Text input
        correctAnswer: "Thirst, dry mouth, dark yellow urine, dizziness",
        feedback: "Correct! Common signs of dehydration include thirst, dry mouth, dark yellow urine, and dizziness."
    },
    // Add more questions as needed
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
        return;
    }

    if (Array.isArray(question.correctAnswer)) {
        const sortedUserAnswer = userAnswer.split(', ').sort().join(', ');
        if (sortedUserAnswer === question.correctAnswer.sort().join(', ')) {
            healthWellbeingScore++;
            healthWellbeingFeedbackContainer.textContent = "Correct!";
        } else {
            healthWellbeingFeedbackContainer.textContent = `Incorrect. The correct answers are: ${question.correctAnswer.join(', ')}.`;
        }
    } else if (userAnswer.toLowerCase() === question.correctAnswer.toLowerCase()) {
        healthWellbeingScore++;
        healthWellbeingFeedbackContainer.textContent = "Correct!";
    } else {
        healthWellbeingFeedbackContainer.textContent = `Incorrect. The correct answer is: ${question.correctAnswer}.`;
    }

    healthWellbeingSubmitButton.style.display = 'none'; // Hide submit button
    healthWellbeingNextButton.style.display = 'inline-block'; // Show next button
}

function nextHealthWellbeingQuestion() {
    healthWellbeingCurrentQuestionIndex++;

    if (healthWellbeingCurrentQuestionIndex < healthWellbeingQuestions.length) {
        loadHealthWellbeingQuestion();
    } else {
        showHealthWellbeingFinalScore();
    }
}

function showHealthWellbeingFinalScore() {
    healthWellbeingTotalScoreElement.textContent = `${healthWellbeingScore} out of ${healthWellbeingQuestions.length}`;
    healthWellbeingScoreContainer.style.display = 'block'; // Show the final score
    healthWellbeingNextButton.style.display = 'none'; // Hide next button at the end
}

function goToHealthWellbeingMenu() {
    window.location.href = 'menu.html'; // Assuming the menu is in 'menu.html'
}

// Initialize the health and wellbeing quiz
loadHealthWellbeingQuestion();