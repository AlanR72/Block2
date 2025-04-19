var i = 0; // Initialize the counter variable

// Function to handle typing text
function numeracyBubble() {
    var username = getCookie('username');
    var txt = "Hey There " + username +"! Let's test your counting skills. Click the below button for the Numeracy Quiz instructions.";
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
    var username = getCookie('username');
    var altText = "Start the quiz by working your way through the questions " + username + "! Once you have submitted an answer click on Next Question.";
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


    


document.addEventListener('DOMContentLoaded', function() {
    loadNumeracyQuestion();  // Load the first question when the page is ready
});

const numeracyQuestions = [
    {
        question: "What is 5 + 5?",
        correctAnswer: "10"
    },
    {
        question: "What is 7 x 6?",
        correctAnswer: "42"
    },
    {
        question: "What is 12 \u00F7 4?",
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
let numeracyScore = 0;

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
    inputBox.placeholder = 'Type your answer here...';
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
        numeracyScore++;
        feedbackContainer.textContent = "Correct!";
        feedbackContainer.style.color = "lightgreen";
        feedbackContainer.style.fontSize = "2em";
        feedbackContainer.style.padding = "5%";
        

    } 
    else if (!userAnswer) {
        feedbackContainer.textContent = 'Please provide an answer!';
        feedbackContainer.style.color = 'red';
        feedbackContainer.style.fontSize = '1.7em';
        return;
    }
    else {
        feedbackContainer.textContent = `Incorrect. The correct answer is ${currentQuestion.correctAnswer}!`;
        feedbackContainer.style.color = "red";
        feedbackContainer.style.fontSize = "2em";
        feedbackContainer.style.textAlign = "center";
        feedbackContainer.style.padding = "5%";
    }

    // Save the score to localStorage (here we are saving numeracyScore for the numeracy quiz)
    sessionStorage.setItem('numeracyScore', numeracyScore);

    // Hide the "Submit Answer" button and show the "Next Question" button
    document.getElementById('numeracy-submit-btn').style.display = 'none';
    document.getElementById('numeracy-next-btn').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;

    // If there are more questions, load the next question
    if (currentQuestionIndex < numeracyQuestions.length) {
        loadNumeracyQuestion();

        // Check if it's the last question (assuming there are 5 questions)
        if (currentQuestionIndex == 4) {
            document.getElementById('numeracy-next-btn').textContent = "Finish Quiz";
        }
    } else {
        showScore();
    }
}

function showScore() {
    const questionContainer = document.getElementById('numeracy-question-container');
    const optionsContainer = document.getElementById('numeracy-options-container');
    const feedbackContainer = document.getElementById('feedback');
    const scoreContainer = document.getElementById('score-container');
    const totalScore = document.getElementById('numeracy_score');

    // Clear out the options and feedback
    optionsContainer.innerHTML = '';
    feedbackContainer.textContent = '';

    questionContainer.textContent = `Quiz completed! Your score is ${numeracyScore} out of ${numeracyQuestions.length}.`;
    questionContainer.style.textAlign = "center";

    // Display the score
    totalScore.textContent = `${numeracyScore} / ${numeracyQuestions.length}`;
    //Display message 
    var username = getCookie('username');
    if(numeracyScore > 2){
    
    var altText = "Well done " + username + "! You have passed the Numeracy Quiz! Click the Return to Menu button and complete the next Quiz!";
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




    }else {
        // This block will run if score <= 2
        var altText = "Better luck next time " + username + "! Click Return to Menu to do the Numeracy quiz again or try a different quiz!";
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
    
    // Show the score container
    scoreContainer.style.display = 'block';

    // Hide "Next Question" button
    document.getElementById('numeracy-next-btn').style.display = 'none';
}






