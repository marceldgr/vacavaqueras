document.getElementById("btn_registrar").addEventListener("click", register);
document.getElementById("btn_iniciar_sesion").addEventListener("click", Iniciar_Sesion);

window.addEventListener("resize",Ancho_paguina);
//declaracion de variables 
var contenedor_login_register = document.querySelector(".contenedor_login_register");
var formulario_login = document.querySelector(".formulario_login");
var formulario_register = document.querySelector(".formulario_register");
var caja_de_login = document.querySelector(".caja_de_login");
var caja_de_registros = document.querySelector(".caja_de_registros");



function Iniciar_Sesion() {
    if (window.innerWidth > 850) {

        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "10px";
        formulario_login.style.display = "block";
        caja_de_registros.style.opacity = "1";
        caja_de_login.style.opacity = "0";
    }
    else {
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "block";
        caja_de_registros.style.display = "block";
        caja_de_login.style.display = "none";

    }
}

function register() {

    if (window.innerWidth > 850) {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_de_registros.style.opacity = "0";
        caja_de_login.style.opacity = "1";
    }
    else {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_de_registros.style.display = "none";
        caja_de_login.style.display = "block";
        caja_de_login.style.opacity = "1";
    }
}

Ancho_paguina();

function Ancho_paguina(){
    if(window.innerWidth>850){
        caja_de_login.style.display = "block";
        caja_de_registros.style.display="block";
    }
    else{
        caja_de_registros.style.display = "block";
        caja_de_registros.style.opacity = "1";
        caja_de_login.style.display="none";
        formulario_login.style.display="block";
        formulario_register.style.display="none";
        contenedor_login_register.style.left="0px";
    }
}