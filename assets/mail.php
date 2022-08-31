<?php
if (isset($_POST['submit'])){
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$mailTo = "h.manai@codeur.online";
$header = "From: ".$mailFrom;
$txt = "You have received an e-mail from ".$name.".\n\n".$message;
mail($mailTo, $txt, $header);

echo 'email envoyer';

}
?>