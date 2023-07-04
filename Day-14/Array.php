<?php
$array1 = array("Red","Green","Black");
$array2 = array("Blue","Orange","Grey");
$rev = array_reverse($array1);
print_r($rev);
echo '<br/>' . '<br/>' . '<br/>';
$search = array_search("Grey",$array2);
print_r($search);
echo '<br/>' . '<br/>' . '<br/>';
foreach($array1 as $a)
{
    echo "size is:$a <br/>";
}
echo '<br/>' . '<br/>' . '<br/>';



$array3 = array("Apple"=>"100","orange"=>"150","peach"=>"250","strawberry"=>"550");

print_r(array_change_key_case($array3,CASE_UPPER));
echo '<br/>';
print_r(array_change_key_case($array3,CASE_LOWER));
echo '<br/>';
print_r(array_chunk($array3,2));
echo '<br/>';

sort($array1);


foreach ($array1 as $a) {
    echo "$a <br/>";
}
$flip = array_flip($array3);
print_r($flip);
echo '<br/>' . '<br/>' . '<br/>';


$array4 = array(2,2);
print_r(array_product($array4));
echo '<br/>' . '<br/>' . '<br/>';
array_push($array1,"white","pink");
print_r($array1);
echo '<br/>' . '<br/>' . '<br/>';

$a = array(1,2,3,2,3,1,4,6,4);
print_r(array_unique($a));
echo '<br/>' . '<br/>' . '<br/>';


function    myfun($value,$key)
{
    echo "The key $key has the value .$value <br/>";
}
array_walk($array3,"myfun");
echo '<br/>' . '<br/>' . '<br/>';

krsort($array2);
print_r($array2);
echo '<br/>' . '<br/>' . '<br/>';

krsort($array3);
print_r($array3);
echo '<br/>' . '<br/>' . '<br/>';


function myfun1($s)
{
    return("$s");
}
$a1 = array(10,20,30,40,50);
print_r(array_map("myfun1",$a1));

?>