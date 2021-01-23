<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        include "../ejecutables/verMasProducto.php";
        
        if (isset($_GET["id"])) {
            $idProduct = $_GET["id"];
            $articulo = $articulo->verMas($idProduct);
    ?>
        <h1 class="card-title">
            <?php
                echo $articulo['NOMBRE'];
            ?>
        </h1>
    <?php
        }
    ?>
    <script src="../js/more.js"></script>
</body>
</html>