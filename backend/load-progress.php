<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// Handle preflight requests for CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
    exit;
}

// Include database connection
require_once 'includes/db-connect.php';

// Get user ID from query parameters
$userId = isset($_GET['userId']) ? $_GET['userId'] : null;

if (!$userId) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "User ID is required"]);
    exit;
}

try {
    // Get user progress
    $stmt = $db->prepare("SELECT * FROM user_progress WHERE user_id = :userId");
    $stmt->bindParam(':userId', $userId);
    $stmt->execute();
    
    if ($stmt->rowCount() > 0) {
        $progress = $stmt->fetch(PDO::FETCH_ASSOC);
        
        // Convert JSON strings back to arrays
        $progress['inventory'] = json_decode($progress['inventory'], true);
        $progress['completed_quests'] = json_decode($progress['completed_quests'], true);
        
        echo json_encode([
            "status" => "success", 
            "data" => [
                "currentLevel" => (int)$progress['current_level'],
                "currentQuest" => (int)$progress['current_quest'],
                "score" => (int)$progress['score'],
                "inventory" => $progress['inventory'],
                "completedQuests" => $progress['completed_quests'],
                "lastUpdated" => $progress['last_updated']
            ]
        ]);
    } else {
        echo json_encode([
            "status" => "success", 
            "data" => null,
            "message" => "No progress found for this user"
        ]);
    }
    
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Database error: " . $e->getMessage()]);
}
?>