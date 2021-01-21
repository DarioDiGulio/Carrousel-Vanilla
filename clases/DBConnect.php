<?php
class DBConnect
{

    private $link = null;
    private $DB_HOST = "localhost";
    private $DB_USER = "desarrolloupward_admin";
    private $DB_NAME = "desarrolloupward_test";
    private $DB_PASS = "desarrolloUpward--123";

    public function __construct()
    {
        try {
            $opciones = array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8");
            $conect = new PDO(
                "mysql:host=" . $this->DB_HOST . ";dbname=" . $this->DB_NAME,
                $this->DB_USER,
                $this->DB_PASS,
                $opciones
            );
            $conect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

            $this->link = $conect;
        } catch (PDOException $e) {
            echo 'Falló la conexión: ' . $e->getMessage();
        }
    }

    public function getAll($table)
    {
        if ($table != '') {
            $pdo = $this->link;
            $pdo->beginTransaction();
            $sql = 'SELECT * FROM :table';
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(":table", $table, PDO::PARAM_STR);
            echo $sql;
            $stmt->execute();
            $pdo->commit();
            $resultado = $stmt->fetchAll(PDO::FETCH_ASSOC);
            return $resultado;
        } else {
            return [];
        }
    }

    public function getRowFrom($table, $column, $value)
    {
        $sql = 'SELECT * FROM ' . $table . ' WHERE ' . $column . ' = ' . $value;
        return $this->link->query($sql);
    }
}

?>
