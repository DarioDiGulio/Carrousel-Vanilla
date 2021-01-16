<?php  
class EnviaMail
	{  
		public function mailFormulario()
		{	
			
			if(isset($_POST['nombre'])== ''){
			echo '*Completar nombre';}
			
			else if(isset($_POST['email']) == '' or !preg_match("/^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/",$_POST['email'])){echo '*Mail Incorrecto';}
							
			else if(isset($_POST['comen']) == ''){
			echo '*Completar Consulta';}
							
			else
			{ 
			    $nombre= "";
				$email= "";
				$telefono= "";
				$empresa= "";				
				$comen= "";
				
				$nombre= $_POST['nombre'];
				$email= $_POST['email'];
				$telefono= $_POST['telefono'];
				$empresa= $_POST['empresa'];				
				$comen= $_POST['comen'];
				
				$dest = "TERARED PAGINA WEB <ingenieria@terared.com.ar>";
				$destNombre = "$nombre <$email>";
				$asunto = "TERARED PAGINA WEB - Mensaje desde el formulario";
				$cuerpo = "
				<h3> Tenes un nuevo Mensaje : </h3>
				<br><br>
				<b>Nombre: </b> $nombre<br><br>
				<b>Email:</b>  $email<br><br>
				<b>Teléfono:</b>  $telefono<br><br>
				<b>Empresa:</b>  $empresa<br><br>
				<b>Consulta: </b> $comen<br><br>

				";
				$cabeceras = "From: $destNombre\r\n"; 
				$cabeceras .= 'MIME-Version: 1.0' . "\r\n";
				$cabeceras .= 'Content-type: text/html; charset=utf-8' . "\r\n";
				mail($dest,$asunto,$cuerpo,$cabeceras);

				echo 'Consulta enviada con éxito!';

			}
			
			
		}
	}
?>