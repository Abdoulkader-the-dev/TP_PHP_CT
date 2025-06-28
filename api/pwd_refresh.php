<?php

if(isset($_POST['newpwd']) && !empty($_POST['newpwd']) ){
    $new_pwd = $_POST['newpwd'];
    $pwd_hash = password_hash($new_pwd,PASSWORD_DEFAULT);
    $email = $_POST['email'];

    require_once('connexion.php');
    try{

        $req = $pdo->prepare("UPDATE `users` SET `password`= :password WHERE `email` = :email ");
        $req->execute(['email' => "$email", 'password' => "$pwd_hash"]);
        header("Location: http://localhost/TP_PHP_CT/vues/clients/login.html");

    }catch(PDOException $e){
                echo "Erreur lors de la connexion à la base de données : " . $e->getMessage();
    }
}else{
    echo("Formulaire non soumis");
}

?>