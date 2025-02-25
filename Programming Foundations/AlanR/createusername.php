<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assessement 3</title>
</head>
<body>
    <!--Header for the page-->
    <h2>Create User Name</h2>

    <!--Form where the user will input their first and last names-->
    <form method="POST" action="">
        <label>Enter your first name:</label>
        <input type="text" name="firstname" required>
        <br><br>

        <label>Enter your surname:</label>
        <input type="text" name="surname" required>
        <br><br>

        <!--Submit button-->
        <button type="submit">Submit</button>

     <?php
        
        get_userInput();
        

        //function to get and display first name and last name
        function get_userInput(){
        //if statement to gather input values
        if($_SERVER["REQUEST_METHOD"] == "POST"){
        //convert html to allow use in php
           $firstname = htmlspecialchars($_POST["firstname"]);
           $surname = htmlspecialchars($_POST["surname"]);
           //display firstname and surname
           echo "<br><br>";
           echo "Your first name is $firstname and your second name is $surname";
           echo "<br>";

           create_Username($firstname, $surname);
           
        }
       
    }
        //function to create username from firstname and surname
        function create_Username(&$firstname, &$surname){
            //take first letter from first name and add to surname
            $initial = $firstname[0];
            $username = $initial.$surname;
           //display new username created
            
            echo "Your username is $username";
            
        }
        
    ?>
    
</body>
</html>