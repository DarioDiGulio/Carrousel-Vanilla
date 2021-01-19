<?php
    require '../clases/Articulos.php';
    require '../clases/DBConnect.php';	

    $DBConnect = new DBConnect();
    $articulos = new Articulos($DBConnect);
    $todosLosArticulos = $articulos -> obtenerTodos();
    echo $todosLosArticulos;
?>  