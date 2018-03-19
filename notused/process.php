<?php
var_dump($_POST);
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

echo "<pre>";
$email_body = "";
$email_body .= "Name" . $name . "\n";
$email_body .= "Email" . $email . "\n";
$email_body .= "Message" . $message . "\n";
echo $email_body;
echo "</pre>";

header("location:thanks.php");
?>