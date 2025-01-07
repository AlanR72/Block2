<?php


$numbers = [10, 2, 20, 30, 40, 50, 60, 70, 7, 200, 80, 90, 100];


for ($i=0; $i < count($numbers); $i++)
{
   echo ($numbers[$i]."<br>"); 
}

echo '<hr>';

foreach($numbers as $i)
{
    echo "$i <br>";
}

echo '<hr>';

$min = $numbers[0];

for($i=1; $i < count($numbers); $i++)
{
    if($min > $numbers[$i])
    {
        $min = $numbers[$i];
    }
}

echo "The minumum value in the array of numbers is $min <br>";

$max = $numbers[0];
for($i=1; $i < count($numbers); $i++)
{
    if($max < $numbers[$i])
    {
        $max = $numbers[$i];
    }
}

echo "The maximum value in the array of numbers is $max";