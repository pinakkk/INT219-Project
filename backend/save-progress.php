<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// Handle preflight requests for CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
    exit;
}

// Include database connection
require_once 'includes/db-connect.php';

// Get JSON input
$data = json_decode(file_get_contents("php://input"), true);

// Validate required fields
if (!isset($data['userId']) || !isset($data['currentLevel']) || !isset($data['currentQuest']) || 
    !isset($data['score']) || !isset($data['inventory']) || !isset($data['completedQuests'])) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Missing required fields"]);
    exit;
}

// Extract data
$userId = $data['userId'];
$currentLevel = (int)$data['currentLevel'];
$currentQuest = (int)$data['currentQuest'];
$score = (int)$data['score'];
$inventory = json_encode($data['inventory']);
$completedQuests = json_encode($data['completedQuests']);

try {
    // Check if user progress already exists
    $stmt = $db->prepare("SELECT id FROM user_progress WHERE user_id = :userId");
    $stmt->bindParam(':userId', $userId);
    $stmt->execute();
    
    if ($stmt->rowCount() > 0) {
        // Update existing progress
        $stmt = $db->prepare("
            UPDATE user_progress 
            SET current_level = :currentLevel,
                current_quest = :currentQuest,
                score = :score,
                inventory = :inventory,
                completed_quests = :completedQuests
            WHERE user_id = :userId
        ");
    } else {
        // Insert new progress
        $stmt = $db->prepare("
            INSERT INTO user_progress 
            (user_id, current_level, current_quest, score, inventory, completed_quests)
            VALUES 
            (:userId, :currentLevel, :currentQuest, :score, :inventory, :completedQuests)
        ");
    }
    
    // Bind parameters
    $stmt->bindParam(':userId', $userId);
    $stmt->bindParam(':currentLevel', $currentLevel);
    $stmt->bindParam(':currentQuest', $currentQuest);
    $stmt->bindParam(':score', $score);
    $stmt->bindParam(':inventory', $inventory);
    $stmt->bindParam(':completedQuests', $completedQuests);
    
    // Execute
    $stmt->execute();
    
    echo json_encode(["status" => "success", "message" => "Progress saved successfully"]);
    
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Database error: " . $e->getMessage()]);
}
?>