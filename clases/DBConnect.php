<?php
    include("../config.php");
    /* Conectar a una base de datos de MySQL invocando al controlador */
    $dsn = 'mysql:dbname=desarrolloupward_test;host=11.92.0.8';
    $usuario = 'root';
    $contraseña = '';

    try {
        $gbd = new PDO($dsn, $usuario, $contraseña);
    } catch (PDOException $e) {
        echo 'Falló la conexión: ' . $e->getMessage();
    }
?>