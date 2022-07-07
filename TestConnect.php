<?php
$std_name = $_POST["std-name"];
$std_password = $_POST["std-password"];
$std_email = $_POST["std-email"];
//$stdName = $_POST["std-name"];
$std_class = $_POST["std-class"];

//
//$sql = "INSERT INTO `Student` (` `std_name`, `std_password`, `std_email`, `class_id`, `teach_id`) VALUES (NULL, \'ROOTECH\', \'11111\', \'hjkbjnl;\', \'3\', \'3\');";
//DB connection

$conn = new mysqli('localhost','root','','test');

if($conn->connect_error){
    die('Connection Failled: '. $conn->connect_error);
}else{
    $stmt = $conn->connect->prepare("INSERT INTO test (std_name, std_password, std_email, class_id) values(?,?,?,?)");
    $stmt->bind_param("sssi",$std_name,$std_password,$std_email,$std_class);
    $stmt->execute();
    echo 'SUCCESSEFULL';
    $stmt->close();
    $conn ->close();
}
?>