<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$response = [
    "message" => "Welcome to the IPQuest PHP backend!",
    "status" => "success"
];

echo json_encode($response);
?>
