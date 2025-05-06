//JAVASCRIPT for Graduation Page

//Author: Alan Robb
//Date: 06/05/2025
    
var i = 0; // Initialize the counter variable for graduation message
var j = 0; // Initialize the counter variable for default message

function graduationBubble() {
    var username = getCookie('username');
    const allConditionsPassed = sessionStorage.getItem('allConditionsPassed');
    const welcomeTxtElement = document.getElementById('welcome_txt'); // Declare the element reference
    
    //Message if all Quizzes passed
    if (allConditionsPassed === 'true') {
        //Change astronaut if all Quizzes passed
        document.getElementById('mainAstro').style.display = "none";
        document.getElementById('gradAstro').style.display = "block";
        welcomeTxtElement.style.fontSize = ".8em";
        //Alt text if all Quizzes passed
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
        //Display buttons redirecting to diploma page or mission page if all Quizzes passed
        document.getElementById('gradButton').style.display = "block";        
        document.getElementById('missionButton').style.display = "block";
        document.getElementById('returnMenu').style.display = "none";

        // Start typing the graduation message
        typeGraduationText();

    } 
    //Alternative text if all Quizzes NOT passed
    else {
        var defaultText = "Hey There " + username + "!, You still have some training incomplete! Completed and passed quizzes have a green tick! You need to score 3 or more in any quizzes with a red X to complete your training..Let's go to the Main Menu.";
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
    
    // Function linking button to diploma page
    function gradClick() {
        window.location.href = "diploma.html";
    }

    //Function linking button to mission page
    function missionClick(){
        window.location.href = "mission.html";
    }
    



function displayFinalScores() {
    // Retrieve the scores from localStorage and ensures at least has value of zero and NOT null
    const numeracyScore = sessionStorage.getItem('numeracyScore') || 0;
    const literacyScore = sessionStorage.getItem('literacyScore') || 0;
    const historyScore = sessionStorage.getItem('historyScore') || 0;
    const awarenessScore = sessionStorage.getItem('awarenessScore') || 0;
    const healthWellbeingScore = sessionStorage.getItem('healthWellbeingScore') || 0;

    // Calculate the total score converting sessionStorage 'string' to an integer for calculation
    const totalScore = parseInt(numeracyScore) + parseInt(literacyScore) + parseInt(historyScore) + 
                       parseInt(awarenessScore) + parseInt(healthWellbeingScore);

    // Display the scores for each quiz and tick or cross dependant on score
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

