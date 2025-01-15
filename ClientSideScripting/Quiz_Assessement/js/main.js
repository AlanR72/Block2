var i = 0;
var txt = 'Hey There Cadet Freddy! Welcome to the Space Academy!';
var speed = 50;

function typeWriter(){
    if(i < txt.length){
        document.getElementById('welcome_txt').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}