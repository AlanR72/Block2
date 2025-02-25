<?php
define('ARRAY_SIZE', 5);

function getNumbers($number_array){
    for($index=0; $index < ARRAY_SIZE; $index++){
        $number_array[$index]=(int)$_POST['number' . $index];
    }
    return $number_array;
}

function calcAnswer($number_array, &$total){
    for($index = 0; $index < ARRAY_SIZE; $index++){
        $total += $number_array[$index];
    }
}

function displayArray($number_array, $total){
    echo "<h3>Position ID:</h3>";
    echo "<p> 0 1 2 3 4 </p>";
    echo "<p>-----------</p>";

    echo "<p>";
    foreach($number_array as $apple){
        echo $apple . " ";
    }
    echo "</p>";
    echo "<h3>The total = $total</h3>";
}

$number_array = array_fill(0, ARRAY_SIZE, 0);
$total = 0;

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Array Sum Program</h1>
    <form method="POST">
        <h3>Enter numbers for the array:</h3>
        <?php for($i = 0; $i < ARRAY_SIZE; $i++):?>
            <label for="number<?= $i?>">Enter a number for the array location<?= $i ?>:</label>
            <input type="number" name="number<?= $i ?>"required><br><br>
            <?php endfor; ?>

            <input type="submit" value="Submit">

    </form>

    <?php
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $number_array = getNumbers($number_array);
        calcAnswer($number_array, $total);
        displayArray($number_array, $total);
    }
    ?>
</body>
</html>