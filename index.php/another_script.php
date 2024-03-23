<?php
include 'db_connect.php';

// Assuming $_POST['name'], $_POST['email'], and $_POST['plan'] are provided by the form submission
$name = $conn->real_escape_string($_POST['name']);
$email = $conn->real_escape_string($_POST['email']);
$plan = $conn->real_escape_string($_POST['plan']);

// Determine the number of units and discount based on the plan
switch ($plan) {
  case 'Platinum':
    $units = 5;
    $discount = 25.00;
    break;
  case 'Gold':
    $units = 4;
    $discount = 20.00;
    break;
  case 'Silver':
    $units = 2;
    $discount = 15.00;
    break;
  case 'Bronze':
    $units = 1;
    $discount = 10.00;
    break;
  default:
    // Handle unexpected plan value
    die("Invalid plan selected.");
}

// Prepare the SQL statement
$stmt = $conn->prepare("INSERT INTO partners (name, email, plan, units, discount) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssii", $name, $email, $plan, $units, $discount);

// Execute the statement
if ($stmt->execute()) {
  echo "New partner record created successfully";
} else {
  echo "Error: " . $stmt->error;
}

// Close the statement and the connection
$stmt->close();
$conn->close();