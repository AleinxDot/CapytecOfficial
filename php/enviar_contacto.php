<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir datos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $plan = $_POST['plan'];
    $mensaje = $_POST['mensaje'];

    // Destinatario
    $destinatario = "duraneducationaldo@gmail.com";
    $asunto = "Nuevo mensaje de contacto";

    // Cuerpo del mensaje
    $cuerpo = "
        <html>
        <head>
            <title>Nuevo Mensaje de Contacto</title>
        </head>
        <body>
            <h2>Nuevo mensaje recibido</h2>
            <p><strong>Nombre:</strong> $nombre</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Plan Seleccionado:</strong> $plan</p>
            <p><strong>Mensaje:</strong></p>
            <p>$mensaje</p>
        </body>
        </html>
    ";

    // Encabezados para enviar el correo en formato HTML
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";
    $headers .= "From: $email" . "\r\n";

    // Enviar el correo
    if (mail($destinatario, $asunto, $cuerpo, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
} else {
    echo "Error: El método no está permitido.";
}
?>
