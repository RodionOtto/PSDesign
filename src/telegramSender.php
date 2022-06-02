<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$token = "5405372932:AAFZzRX4vOB3owJaY9DPaD6-t-Psh3Mp-Y0";
$chat_id = "-669642863";
$arr = array(
    'Имя пользователя: ' => $name,
    'Телефон: ' => $phone,
    'Email' => $email,
);

foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

// if ($sendToTelegram && $sendToTelegram2) {
//     header('Location: thanks.html');
// } else {
//     echo "Error";
// }
?>