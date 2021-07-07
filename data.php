<?php

$name=$_POST['name'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$message=$_POST['message'];
$data= $name." , ".$email. " , ".$phone. " , ".$message;


$file="hauadata.txt";


file_put_contents($file, $data . PHP_EOL, FILE_APPEND);
print "<h1 align=center>Thank you for submitting your Details</h1>";


?>
<html>
<head>
<title>ThankYou Page</title>    
</head>
<body>
<h1><a href="index.html">GO BACK</a> </h1>    
    
</body>




</html>
