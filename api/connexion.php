<?php
try {
    $pdo = new PDO('mysql:host=localhost;dbname=tp;charset=utf8', 'root', '');
} catch (PDOException $e) {
    echo "connexion echoue";
}
?>