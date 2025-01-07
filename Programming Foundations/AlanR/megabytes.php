<?php
//An array containing file values
$megabytes =[232, 241, 324, 216, 221, 298, 334, 212, 235, 324, 264, 141];

    //function to display array values as column
    function displayArray(){
    //Ensure array can be accessed by function globally
    global $megabytes;
    //message for displaying array
    echo "The array values are: <br><br>";
    //for loop to access array values individually
    for($i = 0; $i < count($megabytes); $i++)
    {
    //display each array item with Mb displayed as a column
    echo ($megabytes[$i])." Mb"."<br>";
    }
    }
    
    //function to display maximum value in array
    function maximumValue(){
    //Ensure array can be accessed by function globally
    global $megabytes;
    //create variable to find max value
    $maxValue = $megabytes[0];
    //for loop to check array items individually
    for($i = 0; $i < count($megabytes); $i++)
    {
        //if statement to find maximum value
        if($maxValue < $megabytes[$i])
        {
            $maxValue = $megabytes[$i];
        } 
    }
    //display message showing maximum value
    echo "<br>The maximum value is $maxValue Mb";
}
//Call functions
displayArray();
maximumValue();
?>