// JAVASCRIPT for diploma page

//Author: Alan Robb
//Date: 06/05/2025

 // Function to get a cookie by name
 function getCookie(name) {
    let cookieArr = document.cookie.split(';');

    // Loop through cookies and find the one with the specified name
    for (let i = 0; i < cookieArr.length; i++) {
        let cookie = cookieArr[i].trim();
        if (cookie.indexOf(name + '=') == 0) {
            return cookie.substring(name.length + 1, cookie.length);  // Return cookie value
        }
    }
    return "";  // Return empty if cookie is not found
}

// Function to display the graduate's name
function displayGradName() {
    var graduateName = getCookie('username');
    console.log('Graduate Name from cookie:', graduateName);  // Log the cookie value

    const gradName = document.getElementById('graduateName');

    if (graduateName) {
        gradName.innerHTML = graduateName;
    } else {
        gradName.innerHTML = "Unknown Graduate"; // Fallback text if no username cookie is found
    }
}



// Call the function to display the name immediately after setting the cookie
displayGradName();

function updateDateandTime(){
    let currentDateTime = new Date();
    
    let day = currentDateTime.getDate();
    let month = currentDateTime.getMonth() + 1; // Months are 0-indexed, so add 1
    let year = currentDateTime.getFullYear();
    
    let formattedDate = `${day}/${month}/${year}`;

    // Display only the date
    document.getElementById('gradDate').innerHTML = formattedDate;
}
updateDateandTime();

//function linked to print diploma button 
function enhancedPrint(){
    window.print();
}
//Function directing to mission page
function missionClick(){
    window.location.href = "mission.html";
}
var i = 0; // Initialize the counter variable

// Function to handle typing text
function speechBubble() {
    var username = getCookie('username');
    var txt = 'Say "Cheese" Astronaut ' + username +"!! Well Done! Print your diploma or start your first mission..";
    var speechspeed = 50;

    // Display text letter by letter
    if(i < txt.length){
        document.getElementById('welcome_txt').innerHTML += txt.charAt(i);
        i++;
        setTimeout(speechBubble, speechspeed);
    }
    
}