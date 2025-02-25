<?php
//Main function to create array and display count
function main(){

    $testData = array(232, 241, 324, 216, 221, 298, 334, 212, 235, 324, 264, 141);
    
    $total = 0;
    $avg = 0.0;
    

    $arrayCount = count($testData);
    echo("The number of items in the array is {$arrayCount}.");
    //Call getTotal function with parameters
    getTotal($testData, $total);
    //Call getAvg function with parameters
    getAvg($testData, $total, $avg);
}
//Call Main function
main();
//Function to calculate total using for loop
function getTotal($testData, &$total){
    //For loop to loop through array adding values together
    for($i=0; $i<count($testData); $i++){
        $total += $testData[$i];
    }
    //Display results of calculation
    echo("<br>The total memory used is {$total}.");
}
//Function to calculate average using parameters for previous calculation
function getAvg($testData, $total, $avg){
    $avg = $total / count($testData);

    //Display results of calculation
    echo("<br>The averagememory used is {$avg}");
}
?>