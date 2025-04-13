<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    $username = $data['username'] ?? '';
    $password = $data['password'] ?? '';

    // Basic validation
    if (empty($username) || empty($password)) {
        echo json_encode(["status" => "error", "message" => "Username and password are required."]);
        exit;
    }

    // Simulate saving to a database (replace this with actual database logic)
    $usersFile = 'users.json'; // A simple file to store user data
    $users = file_exists($usersFile) ? json_decode(file_get_contents($usersFile), true) : [];

    if (isset($users[$username])) {
        echo json_encode(["status" => "error", "message" => "Username already exists."]);
        exit;
    }

    // Save the new user
    $users[$username] = password_hash($password, PASSWORD_BCRYPT);
    file_put_contents($usersFile, json_encode($users));

    echo json_encode(["status" => "success", "message" => "Registration successful."]);
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
?>