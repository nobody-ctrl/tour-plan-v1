<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
if(isset($_POST['name'])){
    $name = $_POST['name'];
}else{
    $name="User have not given his name";
}
if(isset($_POST['phone'])){
    $phone = $_POST['phone'];
}else{
    $phone="User have not given his phone";
}
if(isset($_POST['message'])){
    $message = $_POST['message'];
}else{
    $message="User have not given the message";
}
if(isset($_POST['email'])){
    $email = $_POST['email'];
}else{
    $email="User have not given his email";
}

// Формирование самого письма
$title = "Заголовок письма";
$body = "
<h2>Новое письмо</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br><br>
<b>Сообщение:</b><br>$message<br><br>
<b>Подписка:</b><br>$email
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'par.12092000@mail.ru'; // Логин на почте
    $mail->Password   = 'D4h7kka2n'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('par.12092000@mail.ru', 'Анастасия Петрова'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('keinekein@yandex.ru');


// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
//echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
header('Location: thankyou.html');