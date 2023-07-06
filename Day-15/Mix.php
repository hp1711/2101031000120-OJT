<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="#" method="get">
        <input type="text" name="name">
        <input type="number" name="age">
        <button type="Submit">Submit</button>

    </form>
     <?php
     
    if ($_GET["name"] || $_GET["age"]) {
        
        echo "Welcome".$_GET['name']."<br>";
        echo "Your age".$_GET['age']."old.";
        exit();
    }
    ?>
</body>
</html>