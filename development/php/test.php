<?php 
// New Timezone Object 
date_default_timezone_set('America/Los_Angeles');
$date_message = "Message sent: ";
$todays_date = date("m/d/y H:i:s\n");
$name = "Peter Berki";

$email_subject = "New Order Submission From " . $name . "\n";

echo $email_subject;
?>