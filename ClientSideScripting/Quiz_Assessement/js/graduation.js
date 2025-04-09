
    
var i = 0; // Initialize the counter variable for graduation message
var j = 0; // Initialize the counter variable for default message

function graduationBubble() {
    var username = getCookie('username');
    const allConditionsPassed = sessionStorage.getItem('allConditionsPassed');
    const welcomeTxtElement = document.getElementById('welcome_txt'); // Declare the element reference
    
    if (allConditionsPassed === 'true') {
        welcomeTxtElement.style.fontSize = ".8em";
        var txt = "Congratulations " + username + "! You are now a fully fledged astronaut! You can click below to receive a printable Graduation diploma or go on your first mission!";
        var speechspeed = 50;

        // Clear the content of the element before starting to type new text
        welcomeTxtElement.innerHTML = '';

        // Display text letter by letter for graduation message
        function typeGraduationText() {
            if (i < txt.length) {
                welcomeTxtElement.innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeGraduationText, speechspeed);
            }
        }
        document.getElementById('gradButton').style.display = "block";        
        document.getElementById('missionButton').style.display = "block";
        document.getElementById('returnMenu').style.display = "none";

        // Start typing the graduation message
        typeGraduationText();

    } else {
        var defaultText = "Hey There " + username + ", You still have some unfinished quizzes! Let's return to the main menu and finish any incomplete quizzes! ";
        var speechspeed = 50;

        // Clear the content of the element before starting to type default text
        welcomeTxtElement.innerHTML = '';

        // Display text letter by letter for default message
        function typeDefaultText() {
            if (j < defaultText.length) {
                welcomeTxtElement.innerHTML += defaultText.charAt(j);
                j++;
                setTimeout(typeDefaultText, speechspeed); // Adjust speed of typing
            }
        }
        
        // Start typing the default message
        typeDefaultText();
    }
}
    
    // Function to handle click and show alternative text one character at a time
    function gradClick() {
        window.location.href = "diploma.html";
    }
    function missionClick(){
        window.location.href = "mission.html";
    }
    



function displayFinalScores() {
    // Retrieve the scores from localStorage
    const numeracyScore = sessionStorage.getItem('numeracyScore') || 0;
    const literacyScore = sessionStorage.getItem('literacyScore') || 0;
    const historyScore = sessionStorage.getItem('historyScore') || 0;
    const awarenessScore = sessionStorage.getItem('awarenessScore') || 0;
    const healthWellbeingScore = sessionStorage.getItem('healthWellbeingScore') || 0;

    // Calculate the total score
    const totalScore = parseInt(numeracyScore) + parseInt(literacyScore) + parseInt(historyScore) + 
                       parseInt(awarenessScore) + parseInt(healthWellbeingScore);

    // Display the scores for each quiz
    document.getElementById('numeracy-score').textContent = `Numeracy Score: ${numeracyScore}`;
    document.getElementById('literacy-score').textContent = `Literacy Score: ${literacyScore}`;
    document.getElementById('history-score').textContent = `History Score: ${historyScore}`;
    document.getElementById('awareness-score').textContent = `Social Awareness Score: ${awarenessScore}`;
    document.getElementById('healthWellbeing-score').textContent = `Health and Wellbeing Score: ${healthWellbeingScore}`;

    // Display the total score
    document.getElementById('total-score').textContent = `Total Score: ${totalScore}`;
};
displayFinalScores()

