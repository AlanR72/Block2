<?php
define('array_size', 18); //Setting the fixed size of the array

$score_card = array_fill(0,array_size,0);

$total = 0;
$items = 0;
$avg = 0;

function getNumbers($score_card){
    //fill in the array with user input gathered from the form
    for($index = 0; $index < array_size; $index++){
        $score_card[$index] = $_POST['score' .$index];
    }
    return $score_card;
}
function calcAnswer($score_card, &$total, &$avg){
    for($index = 0; $index < array_size; $index++){
        $total += $score_card[$index];
    }
    $avg = $total / count($score_card);
}

function displayArray($score_card, $total, $avg){
    echo "<h3> Hole Number </h3>";
    echo "<p> 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 </p>";
    echo "<p> -------------------------------------------- </p>";
    echo "<p>";
    foreach ($score_card as $value){
        echo $value . " ";
    }
    echo "</p>";
    echo "<h3>The number of holes is " . count($score_card) . "</h3>";
    echo "<h3>The total scored is: $total </h3>";
    echo "<h3>The average shots per hole was: $avg </h3>";
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Golf Scorecard</title>
</head>
<body>
    <h1>Ellie's Crazy Golf sponsored by CFC</h1>
    <form method="POST">
        <h3>Enter your golf scores: </h3>
        <?php for($i = 0; $i < array_size; $i++):?>
            <label for="score<?= $i ?>">Enter your score for hole <?= $i + 1?></label>
            <input type="number" name="score<?= $i ?>"required><br><br>
            <?php endfor; ?>

            <input type="submit" value="Submit">
</form>

<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $score_card = getNumbers($score_card);
    calcAnswer($score_card, $total, $avg);
    displayArray($score_card, $total, $avg);
}

?>
</body>
</html>