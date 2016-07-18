<?php

date_default_timezone_set('America/Los_Angeles');
$date_message = "Date sent: ";
$todays_date = date("m/d/y H:i:s\n");

if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$visitor_address = $_POST['address'];
$visitor_phone = $_POST['phone'];
$message = $_POST['message'];

//Validate first
if(empty($name)||empty($visitor_email)) 
{
    echo "Name and email are mandatory!";
    exit;
}

if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    exit;
}

$email_from = "peter@tigerlilybakes.com";//<== update the email address
$email_subject = "New Order Submission From: " . $name;
$email_body = "You have received a new order from $name.\n" . "Here is the order:\n$message\nOrder submitted: $todays_date". "$name email address: $visitor_email.\n" . "$name physical address: $visitor_address.\n" . "$name Phone Number: $visitor_phone.\n";
    
$to = "orders@tigerlilybakes.com";//<== update the email address
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
header('Location: thank-you.php');


// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
   
?> 