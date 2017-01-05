<?php
include 'db.php';
require 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();


$app = new \Slim\Slim;
$app->post('/login','loginUser');
$app->post('/upload','uploadImage');

$app->run();

function loginUser() {
    global $app;
    $req = $app->request(); // Getting parameter with names
    $paramEmail = $req->params('user'); // Getting parameter with names
    $paramPass = $req->params('pass'); // Getting parameter with names*/
    //$sql = "SELECT id from user where username = '".$paramEmail."' AND password = '".$paramPass."'";
    $sql = "SELECT id from user where username = :username AND password = :password";
    try {
        $dbCon = getDB();
        $stmt = $dbCon->prepare($sql);  
        $stmt->bindParam("username", $paramEmail);
        $stmt->bindParam("password", $paramPass);
        $stmt->execute();
        while($row=$stmt->fetch(PDO::FETCH_ASSOC)) {
                $token = generateRandomString();
                $statement = $dbCon->prepare("INSERT INTO user_login_token(user_id, token, expiry_date)VALUES(:user_id, :token, :expiry)");
                $statement->bindParam("token", $token);
                $statement->bindParam("expiry", date('Y-m-d', strtotime(' +1 day')));
                $statement->bindParam("user_id", $row['id']);
                $statement->execute();
                $result = array("sts" => "success","token" => $token);
                echo json_encode($result);
            }
        $dbCon = null;
    } catch(PDOException $e) {
        echo json_encode(array("sts" => "error"));
    }
}
function uploadImage() {
    global $app;
    print_r($_FILES['file']);
}
function generateRandomString($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}