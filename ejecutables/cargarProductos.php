<?php
    require '../clases/DBConnect.php';
    require '../clases/CargarProductos.php';

    $productos = new CargarProductos();
    $productos.cargarProductos();
    echo $productos
?>  