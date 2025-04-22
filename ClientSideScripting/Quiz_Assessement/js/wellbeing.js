// Health and Wellbeing Quiz JavaScript

var i = 0; // Initialize the counter variable

function wellbeingBubble() {
    var username = getCookie('username');
    var txt = "Hey There " + username + " I am Astronaut Hercules. Let's see how Healthy you are! Click below for Quiz Instructions.";
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
    var altText = "Ok " + username + "! This quiz combines a few different quiz types that you have already encountered. Good Luck!";
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
        healthWellbeing_question: "What helps you stay hydrated?",
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
    {healthWellbeing_question: "Complete the phrase: An _____ a day keeps the doctor away.",
    type: "dragdrop", // new type
    items: [
        { text: "cake", correct: false },
        { text: "chocolate", correct: false },
        { text: "apple", correct: true },
        { text: "sweetie", correct: false }
    ],
    correctAnswer: "apple", 
    feedback: "Correct! An apple a day keeps the doctor away."
    },
    {
        healthWellbeing_question: "Which of these is bad for your health? (Choose all that apply)",
        type: "checkbox",
        options: ["Eating junk food", "Sleeping too little", "Too many fizzy drinks", "All of the above."],
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
        input.style.padding = "5%";
        input.placeholder = 'Type your answer here...';
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
    } else if (question.type === "dragdrop") {
        let touchedElement = null;
        let touchedItemText = '';
        let dragGhost = null;

        question.items.forEach(item => {
            const option = document.createElement('div');
            option.textContent = item.text;
            option.classList.add('draggable-choice');
            option.style.fontSize = ".8em";
            option.setAttribute('draggable', 'true');

            // Desktop drag events
            option.addEventListener('dragstart', e => {
                e.dataTransfer.setData("text/plain", item.text);
                e.dataTransfer.effectAllowed = "move";
                e.target.style.opacity = '0.5'; // Faded effect while dragging
                e.dataTransfer.setDragImage(e.target, 0, 0); // Set drag image for desktop
            });

            option.addEventListener('dragend', e => {
                e.target.style.opacity = '1'; // Reset opacity when drag ends
            });

            // Mobile touch events
            option.addEventListener('touchstart', e => {
                touchedElement = e.target;
                touchedItemText = touchedElement.textContent;
                touchedElement.style.opacity = '0.6'; // Faded effect during touch

                const touch = e.changedTouches[0];

                // Create the drag ghost element on touchstart
                dragGhost = document.createElement('div');
                dragGhost.textContent = touchedItemText;
                dragGhost.style.position = 'fixed';
                dragGhost.style.top = touch.clientY + 'px';
                dragGhost.style.left = touch.clientX + 'px';
                dragGhost.style.transform = 'translate(-50%, -50%)'; // Center the ghost
                dragGhost.style.backgroundColor = 'brown';
                dragGhost.style.border = '#EBE9C3 solid 3px';
                dragGhost.style.color = '#EBE9C3';
                dragGhost.style.textAlign = 'center';
                dragGhost.style.padding = '10px';
                dragGhost.style.margin = '5px';
                dragGhost.style.cursor = 'grab';
                dragGhost.style.opacity = '0.6';
                dragGhost.style.width = touchedElement.offsetWidth + 'px'; // Keep original width
                dragGhost.style.boxSizing = 'border-box';
                dragGhost.style.zIndex = '1000';
                dragGhost.style.pointerEvents = 'none'; // Allow interaction behind ghost

                document.body.appendChild(dragGhost); // Append the ghost to the document
            });

            // Move the ghost element with the touch
            option.addEventListener('touchmove', e => {
                if (!dragGhost) return;

                const touch = e.changedTouches[0];
                dragGhost.style.top = touch.clientY + 'px';
                dragGhost.style.left = touch.clientX + 'px';
            }, { passive: false });

            // Handle the drop logic on touch end
            option.addEventListener('touchend', e => {
                if (!touchedItemText) return;

                const touch = e.changedTouches[0];
                const targetElem = document.elementFromPoint(touch.clientX, touch.clientY);
                const dropzone = document.getElementById('health-drag-drop-zone');

                if (targetElem && (targetElem.id === 'health-drag-drop-zone' || targetElem.closest('#health-drag-drop-zone'))) {
                    dropzone.innerHTML = `<h3>${touchedItemText}</h3>`;
                    dropzone.setAttribute("data-answer", touchedItemText);
                }

                // Reset opacity and remove ghost element
                if (touchedElement) touchedElement.style.opacity = '1'; // Reset opacity
                if (dragGhost) dragGhost.remove(); // Remove the ghost

                touchedItemText = '';
                touchedElement = null;
                dragGhost = null;
            });

            healthWellbeingOptionsContainer.appendChild(option);
        });

        const dropzone = document.createElement('div');
        dropzone.id = 'health-drag-drop-zone';
        dropzone.innerHTML = '<h3>Drag and drop here:</h3>';
        dropzone.style.color = 'black';
        dropzone.style.minWidth = '300px';
        dropzone.style.padding = "20px";
        dropzone.style.marginTop = "30px";
        dropzone.style.minHeight = "40px";
        dropzone.style.textAlign = "center";
        dropzone.style.backgroundColor = "#f9f9f9";
        dropzone.style.border = "2px dashed #ccc";
        dropzone.style.borderRadius = "10px";
        dropzone.style.fontSize = ".7em";

        dropzone.addEventListener('dragover', (e) => e.preventDefault());
        dropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            const droppedText = e.dataTransfer.getData("text/plain");
            dropzone.innerHTML = `<h3>${droppedText}</h3>`;
            dropzone.setAttribute('data-answer', droppedText);
        });

        healthWellbeingOptionsContainer.appendChild(dropzone);
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

    healthWellbeingQuestionContainer.style.opacity = 0;
    setTimeout(() => {
        healthWellbeingQuestionContainer.style.animation = "fadeIn 1s forwards";
    }, 100);

    healthWellbeingFeedbackContainer.textContent = '';
    healthWellbeingSubmitButton.style.display = 'inline-block';
    healthWellbeingNextButton.style.display = 'none';
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
    } else if (question.type === "dragdrop") {
        const dropzone = document.getElementById("health-drag-drop-zone");
        if (!dropzone) {
            console.warn("Dropzone element not found!");
        }
        userAnswer = dropzone?.getAttribute("data-answer") || '';
    }

    if (!userAnswer) {
        healthWellbeingFeedbackContainer.textContent = 'Please provide an answer!';
        healthWellbeingFeedbackContainer.style.color = 'red';
        healthWellbeingFeedbackContainer.style.fontSize = '1.7em';
        return;
    }

    if (Array.isArray(question.correctAnswer)) {
        const sortedUserAnswer = userAnswer.split(', ').sort().join(', ').toLowerCase();
        const sortedCorrectAnswer = question.correctAnswer.sort().join(', ').toLowerCase();

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

    sessionStorage.setItem('healthWellbeingScore', healthWellbeingScore);

    healthWellbeingSubmitButton.style.display = 'none';
    healthWellbeingNextButton.style.display = 'inline-block';
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
    const healthWellbeingTotalScore = document.getElementById('health_wellbeing_score');

    // Clear out the options and feedback
    optionsContainer.innerHTML = '';
    feedbackContainer.textContent = '';

    questionContainer.textContent = `Quiz completed! Your score is ${healthWellbeingScore} out of ${healthWellbeingQuestions.length}.`;
    questionContainer.style.textAlign = "center";

    // Display the score
    healthWellbeingTotalScore.textContent = `${healthWellbeingScore} / ${healthWellbeingQuestions.length}`;

   

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

}

else {
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
    document.getElementById('health-wellbeing-next-btn').style.display = 'none';
}



