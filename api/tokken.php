<?php

if(isset($_GET['email'])&& !empty($_GET['email'])){
    $email = $_GET['email'];
    include('connexion.php');
    try{
        $req = $pdo->query("SELECT * FROM `users` WHERE email = '$email' ");
        //$req->execute(['email' => ]);
        $user = $req->fetchAll(PDO::FETCH_ASSOC);

        if(!empty($user)){
            header("Location: http://localhost/TP_PHP_CT/vues/clients/login.html?refresh=true&&nom=".$user[0]['nom']."".$user[0]['prenom']);
        }else{
            echo "user not found";
        }
        
    }catch(PDOException $e){
        echo "Erreur lors de la vérification du token : " . $e->getMessage();
    }
}else{echo("tokken not found");}



?>