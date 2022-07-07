<?php
$std_name = $_POST["std-name"];
$std_password = $_POST["std-password"];
$std_email = $_POST["std-email"];
//$stdName = $_POST["std-name"];
$std_class = $_POST["std-class"];

//
$sql = "INSERT INTO `Student` (`std_id`, `std_name`, `std_password`, `std_email`, `class_id`, `teach_id`) VALUES (NULL, \'ROOTECH\', \'11111\', \'hjkbjnl;\', \'3\', \'3\');";
//DB connection

$conn = new mysqli('localhost','root','','PIMARY SCHOOL DB');
if($conn-->connect_error){
    die('Connection Failled: '. $conn-->connect_error);
}else{
    $stmt = $conn->connect->prepare("INSERT INTO `Student` (`std_id`, `std_name`, `std_password`, `std_email`, `class_id`, `teach_id`)values(NULL,?,?,?,?,NULL)");
    $stmt->bind_param("isssii",NULL,$std_name,$std_password,$std_email,$std_class,NULL);
    $stmt->execute();
    echo 'SUCCESSEFULL';
    $stmt->close();
    $conn ->close();
}
?>