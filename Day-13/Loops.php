<?php
echo "While loop"."<br>";
$x = 1;
 
while($x <= 5) {
  echo "The number is: $x <br>";
  $x++;
} 


echo "<br>"."Do while loop"."<br>";
$x = 1;

do {
  echo "The number is: $x <br>";
  $x++;
} while ($x <= 5);

echo "<br>"."For loop"."<br>";
for ($x = 0; $x <= 10; $x++) {
    echo "The number is: $x <br>";
  }
echo "<br>";
?>