<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        include "ejecutables/verMasProducto.php";
        
        if (isset($_GET["id"])) {
            $idProduct = $_GET["id"];
            $current = $articulos->verMas($idProduct);
    ?>
        <h1 class="card-title">
            <?php
                echo $current['NOMBRE'];
            ?>
        </h1>
    <?php
        }
    ?>
</body>
</html>