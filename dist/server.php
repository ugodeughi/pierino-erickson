<?php
	
  //header("Access-Control-Allow-Origin: http://127.0.0.1:5173");
	
  //header("Access-Control-Allow-Headers: X-Requested-With");

$date = date("d/m/Y H:i:s");
$from = $_POST['from'] ?? '-';
$to = $_POST['to'] ?? '-';
$city = $_POST['city'] ?? '-';
$ip = $_POST['query'] ?? '-';


$list = array
(
  "$date,$from,$to,$city,$ip",
);

$file = fopen('data.csv','a');  // 'a' for append to file - created if doesn't exit

foreach ($list as $line)
  {
  fputcsv($file,explode(',',$line));
  }

fclose($file); 


