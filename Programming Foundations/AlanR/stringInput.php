<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP String Excercises</title>
</head>
<body>
    <!--Header for the page-->
    <h2>PHP String Excercises</h2>

    <!--Form where the user will input the name of their College-->
    <form method="POST" action="">
        <label>The name of your college:</label>
        <input type="text" name="name" required>
        <br><br>

        <!--Submit button-->
        <button type="submit">Submit</button>
    </form>

    <?php
    //Check if the form is submitted
    if($_SERVER["REQUEST_METHOD"]== "POST"){
        //Get the user input from the form and sanitize it to prevent XSS attacks

        //htmlspecialchars() converts special characters to HTML entities
        $word = htmlspecialchars($_POST["name"]);

        //Extract initials from specific positions in the string
        //$word[0] gives the first character, $word[8] gives the 9th, and $word[14] gives the 15th
        
        $initials = $word[0].$word[8].$word[14];

        //Display results
        echo"<h2>Results</h2>";

        //Show the college name and the initials extracted from it
        echo "1. Initials of'".htmlspecialchars($word)."': 
        <strong>$initials</strong><br>";
    }
?>
</body>
</html>