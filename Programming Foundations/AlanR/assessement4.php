<?php
//Arry holding numbers to be sorted
$numbers = [21.23 , 23.45 , 23.71 , 22.22 , 24.12 , 21.23 , 21.23 , 21.45];

//Loop displaying array unsorted
echo ("Unsorted times are: <br><br>");
for($i = 0; $i < count($numbers); $i++){

echo($numbers[$i].'<br>');

}
//Outer 'for' loop different from traditional as loop decrements so we can skip the last sorted number
for($j = count($numbers)-1; $j > 0; $j--)
{
    //For loop compares 2 values and swaps the largest to the right
    for($k = 0;$k < $j; $k++){
        if($numbers[$k] > $numbers[$k+1]){
            $temp = $numbers[$k];
            $numbers[$k] = $numbers[$k+1];
            $numbers[$k+1] = $temp;
        }
    }
    
}
//Loop displays the sorted array
echo ("<br>Times in order of speed: <br><br>");
for($i = 0; $i < count($numbers); $i++)
{
    echo ("$numbers[$i]<br>");
}
?>