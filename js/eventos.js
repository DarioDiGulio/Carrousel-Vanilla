window.addEventListener("orientationchange", ventana); 
function ventana() {
		if (screen.width>500) 
		{
		   document.getElementsByTagName("meta")[1].content = "width=1250";  
           var varnav = document.querySelector('nav').style.display = 'block';
		   var varmenuCel = document.querySelectorAll('.menuCelDentro');		
			varmenuCel[0].style.background = '#fff';
			varmenuCel[1].style.background = '#e01037';
			varmenuCel[2].style.background = '#fff';
		}
	else 
		{
		   document.getElementsByTagName("meta")[1].content = "width=600";   
		}
	
}
window.onload = setTimeout("ventana();");

var varslider = document.querySelector('.contImgText');
var varcontTexto = document.querySelector('.contTexto');
var varcontImg = document.querySelector('.contImg');
var varManejadores= document.querySelector('.slider');
		
var Manejadores = new Array();
Manejadores[0]="<div class=left onclick=fondoImagenes(2)><img src=img/left.png  alt=anterior title=anterior ></div><div class=right onclick=fondoImagenes(1) ><img src=img/right.png  alt=siguiente title=siguiente></div>";

Manejadores[1]="<div class=left onclick=fondoImagenes(0)><img src=img/left.png  alt=anterior title=anterior></div><div class=right onclick=fondoImagenes(2) ><img src=img/right.png  alt=siguiente title=siguiente></div>";

Manejadores[2]="<div class=left onclick=fondoImagenes(1)><img src=img/left.png  alt=anterior title=anterior></div><div class=right onclick=fondoImagenes(0) ><img src=img/right.png  alt=siguiente title=siguiente></div>";

var Imagenes = ['img1.png','img2.png','img3.png'];
var Textos = new Array();

Textos[0]="<h1>Estabilizador Elevador con DISPLAY CASA, COMERCIO, OFICINA</h1><div class=contLinea><hr></hr></div><p>Según Modelo: 5 8 10 12 14 y 16 KVA</p><a href=>Conocer más</a>";

Textos[1]="<h1>Estabilizador Individual Modelo: EIND1 150-260</h1><div class=contLinea><hr></hr></div><p>Según Modelo: 5 8 10 12 14 y 16 KVA</p><a href= >Conocer más</a>";

Textos[2]="<h1>Abarca toda la instalación Eléctrica Modelo: ESKVA 150-260</h1><div class=contLinea><hr></hr></div><p>Según Modelo: 5 8 10 12 14 y 16 KVA </p><a href=>Conocer más</a>";
var x=0;
var num;

function preloadImage(data)
{
    var base_path = 'img/';
    var total = data.length;
    var i = 0;
    var imgArray = new Array();
    for(i=0; i<total; i++)
    {
    var tmpImage = new Image();
    tmpImage.src = base_path + data[i];
    imgArray.push(tmpImage);
    }
	setTimeout("fondoImagenes(num)");
}
window.addEventListener('load', preloadImage(Imagenes));

function fondoImagenes(num){
	if (num==null)
		{
			if(varcontImg){
					varcontImg.style.backgroundImage= "url(img/"+Imagenes[x]+")";
					varcontTexto.innerHTML = Textos[x];
					varManejadores.innerHTML = Manejadores[x];
					x++;
				}
				if(x==3)
				{
					x=0;
				}
			control = setTimeout("fondoImagenes(num)",5000);
		}
	else
		{         
            if(varcontImg){
				clearInterval(control);
				varcontImg.style.backgroundImage= "url(img/"+Imagenes[num]+")";
				varcontTexto.innerHTML = Textos[num];
				varManejadores.innerHTML = Manejadores[num];
			}
			num=null;
			control = setTimeout("fondoImagenes(num)",10000);
		}
}



var varmenuCel = document.querySelector('.menuCel');
if(varmenuCel){
  varmenuCel.addEventListener('click',funmenuCel)
}
function funmenuCel() {
	var varnav = document.querySelector('nav');
	var varmenuCel = document.querySelectorAll('.menuCelDentro');
	if (window.getComputedStyle(varnav).display === "none")
	{
		varnav.style.display = 'block';
		varmenuCel[0].style.background = '#fff';
		varmenuCel[1].style.background = '#e01037';
		varmenuCel[2].style.background = '#fff';
	}
	else{
		varnav.style.display = 'none';
		varmenuCel[0].style.background = '#000';
		varmenuCel[1].style.background = '#000';
		varmenuCel[2].style.background = '#000';
	}
}
function fondoMuestraServicios(){
	varcontTextoImagen= document.querySelector('.contTextoImagen');
	 if(varcontTextoImagen){
		varcontTextoImagen.style.display = 'none';
	 }
	varservicios = document.querySelector('.servicios');
    varservicios.style.display = 'block';
}
var varserv = document.querySelector('#serv');
if(varserv){
  varserv.addEventListener('click',funservicios)
}
function funservicios() {
   window.location.href = 'servicios';
}
var varproy = document.querySelector('#proy');
if(varproy){
  varproy.addEventListener('click',funproy)
}
function funproy() {
  window.location.href = 'proyectos';
}
var varcli = document.querySelector('#cli');
if(varcli){
  varcli.addEventListener('click',funcli)
}
function funcli() {
  window.location.href = 'cliente';
}
function cierroresp()
{
	caja = document.getElementById('resp');
    caja.innerHTML = '';
}
var varBotonFormulario = document.querySelector('#BotonFormulario');
if(varBotonFormulario){
  varBotonFormulario.addEventListener('click',funBotonFormulario)
}
 function funBotonFormulario() {
  caja = document.querySelector('#resp');
  nombre = document.querySelector('#nombre');
  email = document.querySelector('#email');
  telefono = document.querySelector('#telefono');
  empresa = document.querySelector('#empresa');
  comen = document.querySelector('#comen');
  
 if(nombre.value.length==0) { 
    nombre.focus();
	caja.innerHTML = 'Nombre Incorrecto';
	setTimeout("cierroresp();", 3000);
  }
  else if((email.value.length==0||email.value.indexOf('@') == -1 || email.value.indexOf(".", 0) < 0 || email.value.indexOf('com') == -1 )) {
   email.focus();
   caja.innerHTML = 'Completar Mail';
   setTimeout("cierroresp();", 3000);
  }
  else if(comen.value.length==0) { 
    comen.focus();
	caja.innerHTML = 'Completar Consulta';
	setTimeout("cierroresp();", 3000);
  }
  else{
	  
		var nombre1 = document.querySelector('#nombre').value;
		var email1 = document.querySelector('#email').value;
		var telefono1 = document.querySelector('#telefono').value;
		var empresa1 = document.querySelector('#empresa').value;
		var comen1 = document.querySelector('#comen').value;
	  
		var formData = new FormData();

		formData.append("nombre", nombre1);
		formData.append("email", email1);
		formData.append("telefono", telefono1);
		formData.append("empresa", empresa1);
		formData.append("comen", comen1);

		var request = new XMLHttpRequest();
		
		request.onreadystatechange = function() 
		{
			if (this.readyState == 4 && this.status == 200) 
			{
				caja.innerHTML = this.responseText;
				limpiaForm();
				setTimeout("cierroresp();", 3000);
			}
		};
		
		request.open("POST", "ejecutables/EnviarFormulario");
		request.send(formData); 
		
  }
}

function limpiaForm() {
		var nombre1 = document.querySelector('#nombre').value = "";
		var email1 = document.querySelector('#email').value = "";
		var email1 = document.querySelector('#telefono').value = "";
		var email1 = document.querySelector('#empresa').value = "";
		var email1 = document.querySelector('#comen').value = "";
}
