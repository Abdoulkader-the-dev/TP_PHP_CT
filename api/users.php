<?php
include("connexion.php");

$req = $pdo->query("SELECT * FROM users");
$users = $req->fetchAll(PDO::FETCH_ASSOC);
print_r(json_encode($users))

?>
