<?php
$servername = "dk7.host-ww.net";
$username = "lunohome_dbadmin";
$password = "YlrU#Q]IQ~-s";
$dbname = "lunohome_lunohomedb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";