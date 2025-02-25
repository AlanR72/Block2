<?php


function main(){
    $scores = array(4, 5, 6, 7, 3, 2, 4, 6, 5, 8, 3, 6, 5, 7, 3, 5, 4, 2);

    $total = 0;
    $avg = 0.0;

    for($i=0; $i<count($scores); $i++)
    echo($scores[$i] . "<br>");
    
    getTotal($scores, $total);

    getAvg($avg, $total, $scores);
}
main();

function getTotal($scores, &$total){
    for($i=0; $i<count($scores); $i++){
        $total += $scores[$i];
    }
    echo("The total score is {$total}");
}

function getAvg($avg, $total, $scores){
    $avg = $total / count($scores);

    echo("<br>The average score is {$avg}");
}
?>
