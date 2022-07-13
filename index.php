<?php
header["Access-Control-All-Origin: *"];
header["Access-Control-All-headers: *"];
include "DBConnect.php";
$objDb = new DBConnect;
$conn = $objDb->connect();
?>