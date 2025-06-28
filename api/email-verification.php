<?php

include("connexion.php");

$tokken = $_GET['tokken_hash'];

$req = $pdo->prepare("SELECT * FROM users WHERE tokken = :tokken AND tokken_expires > NOW()");
$stmt = $req->execute(['tokken'=> $tokken]);
$user = $req->fetch(PDO::FETCH_ASSOC);

if ($stmt) {
    try{
        if(isset($user) && !empty($user)){
            $nom = $user['nom'] . ' ' . $user['prenom'];
            header("Location: ../vues/clients/hello.html?nom=$nom");
        }
    }catch(PDOException $e){
        echo "An error occurred: " . $e->getMessage();
    }
}else{
    echo "The link is expired";
}

?>