<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    $name = $data['name'] ?? '';
    $email = $data['email'] ?? '';
    $message = $data['message'] ?? '';

    // Basic validation
    if (empty($name) || empty($email) || empty($message)) {
        echo json_encode(["status" => "error", "message" => "All fields are required."]);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["status" => "error", "message" => "Invalid email address."]);
        exit;
    }

    // Simulate saving the message (replace with actual database or email logic)
    $logFile = 'messages.log';
    $logEntry = "Name: $name\nEmail: $email\nMessage: $message\n---\n";
    file_put_contents($logFile, $logEntry, FILE_APPEND);

    echo json_encode(["status" => "success", "message" => "Your message has been received."]);
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
?>