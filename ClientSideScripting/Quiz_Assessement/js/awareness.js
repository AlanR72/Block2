// Social Awareness Drag-and-Drop Quiz JavaScript

var i = 0; // Initialize the counter variable

function awarenessBubble() {
    var username = getCookie('username');
    var txt = "Let's find out how Socially Aware you are " + username + "!";
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
    var username = getCookie('username');
    var altText = "Life lessons are important lessons for everyone to learn " + username + "! Every day's a school day!";
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


let currentQuestionIndex = 0;
let score = 0;

// List of simple social awareness questions and answers
const questions = [
    {
        question: "Which of these is a way to help people who don’t have a home?",
        items: [
            { text: "Spend your pocket money on sweets.", correct: false },
            { text: "Buy expensive jewellery", correct: false },
            { text: "Donate to a Homeless Shelter", correct: true }  // Correct Answer
        ],
        feedback: "Great job! Donating to a Homeless Shelter is a great way to help people without a home."
    },
    {
        question: "What is something you can do to help protect the Earth?",
        items: [
            { text: "Plant trees", correct: true },  // Correct Answer
            { text: "Buy a diesel car", correct: false },
            { text: "Use more plastic", correct: false }
        ],
        feedback: "Well done! Planting trees helps protect the Earth."
    },
    {
        question: "Which of these is an example of kindness?",
        items: [
            { text: "Be cheeky to your parents.", correct: false },  // Correct Answer
            { text: "Share your toys", correct: true },
            { text: "Be rude to others", correct: false }
        ],
        feedback: "Absolutely! Helping others is always an example of kindness."
    },
    {
        question: "What is the best way to help someone who is feeling sad?",
        items: [
            { text: "Ignore them and let them be.", correct: false },  // Correct Answer
            { text: "Talk to them and ask if they need help", correct: true },
            { text: "Tell them to stop being sad.", correct: false }
        ],
        feedback: "Awesome! Talking to them and asking if they need help."
    },
    {
        question: "What should you do if you see someone being bullied?",
        items: [
            { text: "Laugh and join in.", correct: false },  // Correct Answer
            { text: "Tell a teacher or adult.", correct: true },
            { text: "Ignore it and walk away.", correct: false }
        ],
        feedback: "Yes! Tell a teacher or adult."
    }
];

document.addEventListener('DOMContentLoaded', function() {
    loadQuestion();
});

// Load the current question and items to drag
function loadQuestion() {
    const question = questions[currentQuestionIndex];
    
    // Display the question
    const questionContainer = document.getElementById('drag-drop-question');
    questionContainer.textContent = question.question;
    
    // Clear previous items
    const itemsContainer = document.getElementById('drag-drop-items-container');
    itemsContainer.innerHTML = '';
    
    // Add draggable items
    question.items.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item.text;
        div.classList.add('drag-item');
        div.setAttribute('draggable', 'true');
        div.addEventListener('dragstart', onDragStart);
        itemsContainer.appendChild(div);
    });
    
    // Reset drop zone
    const dropzone = document.getElementById('drag-drop-dropzone');
    dropzone.innerHTML = '<h3>Drop here:</h3>';
    
    // Reset feedback and buttons
    document.getElementById('drag-drop-feedback').textContent = '';
    document.getElementById('drag-drop-submit-btn').style.display = 'inline-block';
    document.getElementById('drag-drop-next-btn').style.display = 'none';
}

// Handle when dragging starts
function onDragStart(event) {
    event.dataTransfer.setData("text", event.target.textContent);
}

// Allow dropping in the dropzone
const dropzone = document.getElementById('drag-drop-dropzone');
dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
});

dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    const droppedText = e.dataTransfer.getData("text");
    dropzone.innerHTML = `<h3>${droppedText}</h3>`;
});

// Submit the answer
function submitAnswer() {
    const droppedText = dropzone.querySelector('h3')?.textContent;

    if (!droppedText) {
        document.getElementById('drag-drop-feedback').textContent = 'Please drag an item to the drop zone!';
        return;
    }

    // Find the question and check if the dropped item matches the correct answer
    const question = questions[currentQuestionIndex];
    const correctItem = question.items.find(item => item.text === droppedText && item.correct);

    if (correctItem) {
        score++;
        document.getElementById('drag-drop-feedback').textContent = "Correct!";
        document.getElementById('drag-drop-feedback').style.color = "lightgreen";
        document.getElementById('drag-drop-feedback').style.fontSize = "1.7em";
        document.getElementById('drag-drop-feedback').style.padding = "5%";
    } else {
        // Find the correct answer and show it
        const correctAnswer = question.items.find(item => item.correct).text;
        document.getElementById('drag-drop-feedback').textContent = `Oops, that's not right. The correct answer is: "${correctAnswer}".`;
        document.getElementById('drag-drop-feedback').style.color = "red";
        document.getElementById('drag-drop-feedback').style.fontSize = "1.7em";
        document.getElementById('drag-drop-feedback').style.padding = "5%";
    }

    // Hide submit button and show next button
    document.getElementById('drag-drop-submit-btn').style.display = 'none';
    document.getElementById('drag-drop-next-btn').style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestionIndex++;

    // If there are more questions, load the next question
    if (currentQuestionIndex < questions.length) {
        loadQuestion();

        // Check if it's the last question (assuming there are 5 questions)
        if (currentQuestionIndex == 4) {
            document.getElementById('drag-drop-next-btn').textContent = "Finish Quiz";
        }
    } else {
        showFinalScore();
    }
}
function showFinalScore() {
    const questionContainer = document.getElementById('drag-drop-question-container');
    const optionsContainer = document.getElementById('drag-drop-items-container');
    const feedbackContainer = document.getElementById('drag-drop-feedback');
    const scoreContainer = document.getElementById('drag-drop-score-container');
    const totalScore = document.getElementById('total-score');

    // Clear out the options and feedback
    optionsContainer.innerHTML = '';
    feedbackContainer.textContent = '';

    questionContainer.textContent = `Quiz completed! Your score is ${score} out of ${questions.length}.`;
    questionContainer.style.textAlign = "center";

    // Display the score
    totalScore.textContent = `${score} / ${questions.length}`;
    //Display message
    var username = getCookie('username'); 
    if(score > 2){
    
    var altText = "Well done " + username + "! You have passed the Social Awareness Quiz!";
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
    }else {
        // This block will run if score <= 2
        var altText = "Better luck next time " + username + "! Keep practicing the Social Awareness Quiz!";
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
    
    // Show the score container
    scoreContainer.style.display = 'block';

    // Hide "Next Question" button
    document.getElementById('drag-drop-next-btn').style.display = 'none';
    document.getElementById('drag-drop-dropzone').style.display = 'none';
}


