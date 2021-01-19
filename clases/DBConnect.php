<?php

    include("../config.php");

    class DBConnect{

        private $link = null;
        private $DB_HOST = "http://desarrolloupward.ar";
        private $DB_USER = "root";
        private $DB_NAME = "desarrolloupward_test";
        private $DB_PASS = "";

        public function __construct(){
            try{
                $opciones = array (PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8");
                $conect = new PDO (
                    "mysql:host=" . $this -> $DB_HOST . ";dbname=" . $this -> $DB_NAME,
                   $this -> $DB_USER,
                   $this -> $DB_PASS,
                   $opciones
                );
                $conect -> setAttribute (PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

                $this -> $link = $conect;
            }
            catch (PDOException $e){
                echo 'Falló la conexión: ' . $e->getMessage();
            }
        }

        public function getAll($table) {
            $sql = 'SELECT * FROM '.$table;
            return $this -> $link -> $query($sql);
        }
    
        public function getRowFrom($table, $column, $value) {
            $sql = 'SELECT * FROM '.$table.' WHERE '.$column.' = '.$value;
            return $this -> $link -> $query($sql);
        }

    }

?>