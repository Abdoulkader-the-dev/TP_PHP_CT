<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader (created by composer, not included with PHPMailer)
// ini_set('memory_limit', '1024M'); // Passe à 1 Go
// require 'vendor/autoload.php';

require 'vendor/phpmailer/phpmailer/src/Exception.php';
require 'vendor/phpmailer/phpmailer/src/PHPMailer.php';
require 'vendor/phpmailer/phpmailer/src/SMTP.php';

//Creation d'une instance; true pour activer les exceptions
$mail = new PHPMailer(true);
if(isset($_POST['email']) && !empty($_POST['email']) ){
    
    $email = $_POST['email'];

    try { 
    //Server settings
    $mail->isSMTP();                                           //Send using SMTP
    $mail->SMTPDebug  = SMTP::DEBUG_SERVER;                     //Enable verbose debug output
    $mail->Host       = 'smtp.gmail.com';                      //le Server SMTP = Gmail
    $mail->SMTPAuth   = true;                                  //Enable SMTP authentication
    $mail->Username   = 'abfoulmed645@gmail.com';              //SMTP username
    $mail->Password   = 'ialc ubon ioim gmwd';                 //password d'application
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // SSL
    $mail->Port = 465; // Port pour SSL         

    //Recipients
    $mail->setFrom('abfoulmed645@gmail.com', 'Let\'s chat');
    $mail->addAddress($email);

    // Charger le template
    $template = file_get_contents('../vues/clients/email-html-template.html');

    // Remplacer les variables
    $template = str_replace(
        ['{LIEN_DE_CONFIRMATION}'],
        ['http://localhost/TP_PHP_CT/api/tokken.php?email='.$email],
        $template
    );

    // Configuration d'email
    $mail->isHTML(true);
    $mail->Subject = 'Confirmation de votre compte';
    $mail->Body = $template;
    //$mail->AltBody = "Bonjour $nom, merci de cliquer ici pour confirmer : 'http://localhost/TP_PHP_CT/api/email-verification.php?tokken_hash=$tokken_hash'";

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
}else{

    echo("Formulaire non soumis");
}

?>