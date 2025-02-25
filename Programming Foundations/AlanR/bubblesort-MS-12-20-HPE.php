<?php

$numbers = [29, 10, 14, 37, 13, 18, 21, 5, 40, 2];
echo ("Unsorted array is: <br><br>");
for($i = 0; $i < count($numbers); $i++){

echo($numbers[$i].'<br>');

}

for($j = count($numbers)-1; $j > 0; $j--)
{
    for($k = 0;$k < $j; $k++){
        if($numbers[$k] > $numbers[$k+1]){
            $temp = $numbers[$k];
            $numbers[$k] = $numbers[$k+1];
            $numbers[$k+1] = $temp;
        }
    }
    
}
echo ("<br>Sorted array is: <br><br>");
for($i = 0; $i < count($numbers); $i++)
{
    echo ("$numbers[$i]<br>");
}
?>