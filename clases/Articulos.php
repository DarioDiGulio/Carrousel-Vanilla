<?php 

class Articulos{

	public function __construct($DBConnect){
		$this->$pdo = $DBConnect;
	}

    public function obtenerTodos(){
		return $this->$pdo->getAll("ARTICULOS");
	}

}
?>