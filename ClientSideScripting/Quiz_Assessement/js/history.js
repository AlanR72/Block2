// Scottish History Quiz JavaScript

var i = 0; // Initialize the counter variable

function historyBubble() {
    var username = getCookie('username');
    var txt = "Och aye the noo " + username + "! How's your knowledge of my fair homeland of Scotland!";
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
    var username = getCookie('username');
    var altText = "Ok " + username + "! Take yer time wi these noo as there might be more than one right answer!";
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

document.addEventListener('DOMContentLoaded', function() {
    loadHistoryQuestion();  // Call the function to load the first history question after the DOM is loaded
});


const historyQuestions = [
    {
        question: "Which of the following are popular Scottish sports? (Choose all that apply)",
        options: ["Golf", "Rugby", "Baseball", "Shinty"],
        correctAnswers: ["Golf", "Rugby", "Shinty"]
    },
    {
        question: "Which of these are Scottish symbols?(Choose all that apply)",
        options: ["Rose", "Thistle", "Leek", "Saltire"],
        correctAnswers: ["Thistle", "Saltire"]
    },
    {
        question: "Which of these are famous Scottish animals?(Choose all that apply)",
        options: ["Red Deer", "Kangaroo", "Highland Cow", "Elephant"],
        correctAnswers: ["Red Deer", "Highland Cow"]
    },
    {
        question: "Which of these are Scottish inventions? (Choose all that apply)",
        options: ["The television", "The telephone", "The lightbulb", "Penicilin"],
        correctAnswers: ["The television", "The telephone", "Penicilin"]
    },
    {
        question: "Which of these are Scottish festivals? (Choose all that apply)",
        options: ["Hogmanay", "Oktoberfest", "Burns Night", "Mardi Gras"],
        correctAnswers: ["Hogmanay", "Burns Night"]
    }
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
        feedbackContainer.style.color = "lightgreen";
        feedbackContainer.style.fontSize = "2em";
    } else {
        feedbackContainer.textContent = `Incorrect. The correct answers are: ${currentQuestion.correctAnswers.join(', ')}`;
        feedbackContainer.style.color = "red";
        feedbackContainer.style.fontSize = "2em";
        feedbackContainer.style.textAlign = "center";
    }

    document.getElementById('history-submit-btn').style.display = 'none';
    document.getElementById('history-next-btn').style.display = 'block';
}

function nextHistoryQuestion() {
    currentHistoryQuestionIndex++;

    // If there are more questions, load the next question
    if (currentHistoryQuestionIndex < historyQuestions.length) {
        loadHistoryQuestion();

        // Check if it's the last question (assuming there are 5 questions)
        if (currentHistoryQuestionIndex == 4) {
            document.getElementById('history-next-btn').textContent = "Finish Quiz";
        }
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