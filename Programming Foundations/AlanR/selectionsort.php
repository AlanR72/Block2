<?php

$numbers = [29, 10, 14, 37, 13, 18, 21, 5, 40, 2];
echo ("Unsorted array is: <br><br>");
for($i = 0; $i < count($numbers); $i++){

echo($numbers[$i].'<br>');

}
for($j = 0; $j < count($numbers); $j++)
{

    $minIndex = $j;

    for($k = $j + 1; $k < count($numbers); $k++){
        if($numbers[$k] < $numbers[$minIndex])
        {
            $minIndex = $k;
        }
    }
    $temp = $numbers[$minIndex];
    $numbers[$minIndex] = $numbers[$j];
    $numbers[$j] = $temp;
}
echo ("<br>Sorted array is: <br><br>");
for($i = 0; $i < count($numbers); $i++)
{
    echo ("$numbers[$i]<br>");
}
?>