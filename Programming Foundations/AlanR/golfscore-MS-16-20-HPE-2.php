<?php

$scores = [6, 5, 4, 5, 4, 5, 4, 5, 5, 5, 5, 5, 3, 5, 4, 5, 7, 4];

for ($i = 0; $i < count($scores); $i++)
{
echo ($scores[$i]."<br>");
}

$min = $scores[0];
for ($i = 0; $i < count($scores); $i++){
    if($min > $scores[$i]){

    $min = $scores[$i];

    }
}
echo "The minimum score in Davids round was $min <br>";

$max = $scores[0];
for ($i = 0; $i < count($scores); $i++){
    if($max < $scores[$i]){

    $max = $scores[$i];

    }
}
echo "The minimum score in Davids round was $max <br>";
