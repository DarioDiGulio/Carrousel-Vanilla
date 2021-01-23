<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        if (isset($_GET["id"])) {
            $phpVar1 = $_GET["id"];
            echo $phpVar1;
        }
    ?>
    <script src="../js/more.js"></script>
</body>
</html>