<?php
include("connexion.php");
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['nom']) && isset($_POST['prenom']) && isset($_POST['email']) && isset($_POST['password'])) {
        if(!empty($_POST['nom']) && !empty($_POST['prenom']) && !empty($_POST['email']) && !empty($_POST['password'])){
            try{
                
                $nom = strip_tags($_POST['nom']);
                $prenom = strip_tags($_POST['prenom']);
                $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
                $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
                $tokken = bin2hex(random_bytes(32)); // Génère une chaîne aléatoire de 64 caractères
                $tokken_hash = hash("sha256",$tokken);
                $expires = date('Y-m-d H:i:s', time() + 86400); // 86400 secondes = 24h
                include("sendmail.php");

                $req = $pdo->prepare("INSERT INTO `users`(`nom`, `prenom`, `email`, `password`,`tokken`,`tokken_expires`) VALUES (:nom, :prenom, :email, :password,:tokken,:expires)");
                $stmt = $req->execute(['nom' => $nom, 'prenom' => $prenom, 'email' => $email, 'password' => $password, 'tokken' =>  $tokken_hash, 'expires' => $expires]);

            }catch(PDOException $e){
                echo $e->getMessage();
                echo "An error has occucred";

            }
             
        }
	}
}
?>