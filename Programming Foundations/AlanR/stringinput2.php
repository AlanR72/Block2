<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>String Excercise 2</title>
</head>
<body>
    <!--Header for the page-->
    <h2>PHP String Excercise 2</h2>

    <!--Form where the user will input the model of their car-->
    <form method="POST" action="">
        <label>The make of your car:</label>
        <input type="text" name="make" required>
        <br><br>

        <label>The model of your car:</label>
        <input type="text" name="model" required>
        <br><br>

        <!--Submit button-->
        <button type="submit">Submit</button>

     <?php
        if($_SERVER["REQUEST_METHOD"] == "POST"){

           $getMake = htmlspecialchars($_POST["make"]);
           $getModel = htmlspecialchars($_POST["model"]);

            $initial = $getMake[0];
            $makemodelstr = $initial.$getModel;

            
            echo "<br><br>";
            echo "The make of your car is $getMake and the model is $getModel";
            echo "<br>";
            echo "Shorthand for your car is $makemodelstr";
        }
    ?>
    
</body>
</html>