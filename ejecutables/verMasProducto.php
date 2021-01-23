<?php
    require 'clases/Articulos.php';
    require 'clases/DBConnect.php';
    
    $DBConnect = new DBConnect();
    $articulo = new Articulos($DBConnect);
?>  