
    
var i = 0; // Initialize the counter variable for graduation message
var j = 0; // Initialize the counter variable for default message

function graduationBubble() {
    var username = getCookie('username');
    const allConditionsPassed = sessionStorage.getItem('allConditionsPassed');
    const welcomeTxtElement = document.getElementById('welcome_txt'); // Declare the element reference
    
    if (allConditionsPassed === 'true') {
        welcomeTxtElement.style.fontSize = ".8em";
        var txt = "Congratulations " + username + "! You are now a fully fledged astronaut! You can click below to view your Graduation Diploma or skip to your first space mission!";
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
        var defaultText = "Hey There " + username + ", You still have some training incomplete! Completed and passed quizzes have a green tick! You need to score 3 or more in any quizzes with a red X to complete your training..Let's go to the Main Menu.";
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
    if(numeracyScore < 3){
        document.getElementById('numeracy-score').innerHTML = `Numeracy Score: ${numeracyScore} <span class="cross">\u2717</span>`;
    }
    else{
        document.getElementById('numeracy-score').innerHTML = `Numeracy Score: ${numeracyScore} <span class="tick">\u2713</span>`;
    }
    if(literacyScore < 3){
        document.getElementById('literacy-score').innerHTML = `Literacy Score: ${literacyScore} <span class="cross">\u2717</span>`;
    }
    else{
        document.getElementById('literacy-score').innerHTML = `Literacy Score: ${literacyScore} <span class="tick">\u2713</span>`;
    }
    if(historyScore < 3){
        document.getElementById('history-score').innerHTML = `History Score: ${historyScore} <span class="cross">\u2717</span>`;
    }
    else{
        document.getElementById('history-score').innerHTML = `History Score: ${historyScore} <span class="tick">\u2713</span>`;
    }
    if(awarenessScore < 3){
        document.getElementById('awareness-score').innerHTML = `Social Awareness Score: ${awarenessScore} <span class="cross">\u2717</span>`;
    }
    else{
        document.getElementById('awareness-score').innerHTML = `Social Awareness Score: ${awarenessScore} <span class="tick">\u2713</span>`;
    }
    if(healthWellbeingScore < 3){
        document.getElementById('healthWellbeing-score').innerHTML = `Health and Wellbeing Score: ${healthWellbeingScore} <span class="cross">\u2717</span>`;
    }
    else{
        document.getElementById('healthWellbeing-score').innerHTML = `Health and Wellbeing Score: ${healthWellbeingScore} <span class="tick">\u2713</span>`;
 
    }
    // Display the total score
    document.getElementById('total-score').textContent = `Total Score: ${totalScore}`;
};
displayFinalScores()

