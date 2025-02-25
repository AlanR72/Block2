<?php
//Array containing unsorted values
$numbers = [29, 10, 14, 37, 13, 18, 21, 5, 40, 2];

//Echo displaying title for unsorted array
echo ("Unsorted array is: <br><br>");

//for loop iterates through each item in the array
for($i = 0; $i < count($numbers); $i++)
{
    //echo displays items on screen
    echo($numbers[$i].'<br>');
}

//Outer 'for' loop different from traditional as loop decrements so we can skip the last sorted number
for($j = count($numbers)-1; $j > 0; $j--)
{
    //inner for loop iterates through items in the array 
    for($k = 0; $k < $j; $k++)
    {
        //if statement sorts greater number
        if($numbers[$k] > $numbers[$k +1])
        {
        //temp variable created to store greater number and move to the right of array
          $temp = $numbers[$k];
          $numbers[$k] = $numbers[$k + 1];
          $numbers[$k + 1] = $temp; 
        }
    }
}
//title for sorted array display
echo ("<br>Sorted array is: <br><br>");
//for loop to iterate each sorted item and display on screen
for($i = 0; $i < count($numbers); $i++)
{
    echo ("$numbers[$i]<br>");
}

?>