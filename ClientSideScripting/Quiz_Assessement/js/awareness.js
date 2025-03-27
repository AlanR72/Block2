// Social Awareness Drag-and-Drop Quiz JavaScript
document.addEventListener('DOMContentLoaded', function() {
    loadDragDropQuestion();  // Load the first question when the page is ready
});
let dragDropCurrentQuestionIndex = 0;
let dragDropScore = 0;
const dragDropQuestions = [
    {
        dragDrop_question: "Match the social issues with their potential solutions:",
        items: [
            { text: "Homelessness", correctAnswer: "Affordable Housing" },
            { text: "Poverty", correctAnswer: "Financial Support Programs" },
            { text: "Environmental Pollution", correctAnswer: "Green Energy Solutions" },
        ],
        feedback: "Correct! You matched the social issues with their potential solutions."
    },
    {
        dragDrop_question: "Match the human rights categories with their descriptions:",
        items: [
            { text: "Freedom of Expression", correctAnswer: "The right to speak freely without fear of government censorship." },
            { text: "Right to Education", correctAnswer: "The right to receive an education without discrimination." },
            { text: "Right to Health", correctAnswer: "The right to access healthcare services." },
        ],
        feedback: "Correct! You matched the human rights categories with their correct descriptions."
    },
    {
        dragDrop_question: "Match the social movements with their key goals:",
        items: [
            { text: "Civil Rights Movement", correctAnswer: "End racial segregation and discrimination." },
            { text: "Women's Suffrage", correctAnswer: "Ensure voting rights for women." },
            { text: "LGBTQ+ Rights Movement", correctAnswer: "Fight for equal rights and acceptance for LGBTQ+ individuals." },
        ],
        feedback: "Correct! You matched the social movements with their key goals."
    },
    // Add more questions here if needed
];

const dragDropQuestionContainer = document.getElementById('drag-drop-question');
const dragDropItemsContainer = document.getElementById('drag-drop-items-container');
const dragDropDropzone = document.getElementById('drag-drop-dropzone');
const dragDropFeedbackContainer = document.getElementById('drag-drop-feedback');
const dragDropSubmitButton = document.getElementById('drag-drop-submit-btn');
const dragDropNextButton = document.getElementById('drag-drop-next-btn');
const dragDropTotalScoreElement = document.getElementById('drag-drop-total-score');
const dragDropScoreContainer = document.getElementById('drag-drop-score-container');

function loadDragDropQuestion() {
    const question = dragDropQuestions[dragDropCurrentQuestionIndex];
    dragDropQuestionContainer.textContent = question.dragDrop_question;
    dragDropItemsContainer.innerHTML = ''; // Clear previous items
    dragDropDropzone.innerHTML = '<h3>Drop here:</h3>'; // Clear the drop zone

    question.items.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item.text;
        div.classList.add('drag-item');
        div.setAttribute('draggable', 'true');
        div.addEventListener('dragstart', (e) => onDragStart(e));
        dragDropItemsContainer.appendChild(div);
    });

    dragDropQuestionContainer.style.opacity = 0; // Reset opacity for fade-in
    setTimeout(() => {
        dragDropQuestionContainer.style.animation = "fadeIn 1s forwards"; // Apply fade-in animation
    }, 100);

    dragDropFeedbackContainer.textContent = ''; // Clear previous feedback
    dragDropSubmitButton.style.display = 'inline-block'; // Show submit button
    dragDropNextButton.style.display = 'none'; // Hide next button
}

function onDragStart(event) {
    event.dataTransfer.setData("text", event.target.textContent); // Store the dragged item's text
}

dragDropDropzone.addEventListener('dragover', (event) => {
    event.preventDefault(); // Allow the drop
});

dragDropDropzone.addEventListener('drop', (event) => {
    event.preventDefault();
    const droppedText = event.dataTransfer.getData("text");
    const item = dragDropQuestions[dragDropCurrentQuestionIndex].items.find(i => i.text === droppedText);
    if (item) {
        dragDropDropzone.innerHTML = `<h3>${droppedText} - ${item.correctAnswer}</h3>`;
    }
});

function submitDragDropAnswer() {
    const droppedItemText = dragDropDropzone.querySelector('h3')?.textContent;

    if (!droppedItemText) {
        dragDropFeedbackContainer.textContent = 'Please drag an item into the drop zone!';
        return;
    }

    const correctAnswer = dragDropQuestions[dragDropCurrentQuestionIndex].items.map(item => item.correctAnswer).join(', ');

    if (droppedItemText.includes(correctAnswer)) {
        dragDropScore++;
        dragDropFeedbackContainer.textContent = "Correct!";
    } else {
        dragDropFeedbackContainer.textContent = `Incorrect. The correct answers are: ${correctAnswer}.`;
    }

    dragDropSubmitButton.style.display = 'none'; // Hide submit button
    dragDropNextButton.style.display = 'inline-block'; // Show next button
}

function nextDragDropQuestion() {
    dragDropCurrentQuestionIndex++;

    if (dragDropCurrentQuestionIndex < dragDropQuestions.length) {
        loadDragDropQuestion();
    } else {
        showDragDropFinalScore();
    }
}

function showDragDropFinalScore() {
    dragDropTotalScoreElement.textContent = `${dragDropScore} out of ${dragDropQuestions.length}`;
    dragDropScoreContainer.style.display = 'block'; // Show the final score
    dragDropNextButton.style.display = 'none'; // Hide next button at the end
}

function goToDragDropMenu() {
    window.location.href = 'menu.html'; // Assuming the menu is in 'menu.html'
}

// Initialize the social awareness drag-and-drop quiz
loadDragDropQuestion();
