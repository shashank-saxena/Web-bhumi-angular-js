<?php
include 'db.php';
require 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();


$app = new \Slim\Slim;
$app->post('/user','addUser');

$app->run();

function addUser() {
    global $app;
    $req = $app->request(); // Getting parameter with names
    $paramEmail = $req->params('userEmail'); // Getting parameter with names
    $paramPass = $req->params('userPass'); // Getting parameter with names*/
    $paramPass = md5($paramPass);
    //$sql = "SELECT id from user where username = '".$paramEmail."' AND password = '".$paramPass."'";
    $sql = "SELECT id from user where username = :user AND password = :pass";
    try {
        $dbCon = getDB();
        $stmt = $dbCon->prepare($sql);  
        $stmt->bindParam("user", $paramEmail);
        $stmt->bindParam("pass", $paramPass);
        $stmt->execute();
        while($row=$stmt->fetch(PDO::FETCH_ASSOC)) {
                echo json_encode($row); 
            }
        $dbCon = null;
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}'; 
    }
}