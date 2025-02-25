<?php

$str = "Glasgow Clyde College";

echo ($str);
echo("<br>");

echo strlen($str);
echo("<br>");

echo($str[0]);
echo($str[8]);
echo($str[14]);
echo("<br>");

echo strtolower($str);
echo("<br>");

//Removes first parameter and replaces with second. Third parameter is subject.
$college = "Glasgow Clyde College";
echo "Remove whitespace: " . str_replace("C", "S", $college);

?>