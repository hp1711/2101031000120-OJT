<?php
$servername = "localhost:3307";
$username = "root";
$password = "";
$dbname = "myDBhp";
$Name = $_REQUEST['firstname'];
$Email = $_REQUEST['email'];
$ContectNo = $_REQUEST['mobile_number'];
$Feedback = $_REQUEST['feedback'];

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

echo "Connected successfully";



// $sql = "CREATE TABLE MyGuestsDB (
// id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
//  firstname VARCHAR(50) NOT NULL,
//  email VARCHAR(50) NOT NULL,
//  mobile_number INT(10),
//  `feedback` VARCHAR(50),
//  reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
// )";

// if ($conn->query($sql) === TRUE) {
//    echo "Table MyGuestsDB created successfully";
// } else {
//    echo "Error creating table: " . mysqli_error($conn);
// }

$sql = "INSERT INTO MyGuestsDB (firstname, email, mobile_number,`feedback`)
VALUES ( '$Name', '$Email', '$ContectNo','$Feedback')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>

