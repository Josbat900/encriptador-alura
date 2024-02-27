//importamos las funciones que encriptan y desencriptan
import {encriptarTexto,desencriptarTexto} from "./utils/logic.js"
//botones fijos
let btnEncriptar = document.querySelector(".btn-encriptar");
let btnDesencriptar = document.querySelector(".btn-desencriptar");
let btnCopiar = document.querySelector(".btn-copiar");
//mosntrar y ocultar
let imagen = document.querySelector(".imagen");
let resultadoEncriptado = document.querySelector(".resultado-encriptado");
let noMensaje = document.querySelector(".mensaje-alerta");
let divCopiar = document.querySelector(".div-copiar");
//resultado encriptado
let resultadoTexto = document.querySelector(".resultado-texto");

//agregando la funcion a los botones
btnEncriptar.onclick = mostrarTextoEncriptado;
btnDesencriptar.onclick = mostrarTextoDesencriptado;
btnCopiar.onclick = copiar;

//mostrar el contenido encriptado
function ocultarImagen (){ 
    imagen.style.display = "none";
    noMensaje.style.display = "none"
    resultadoEncriptado.style.display = "flex"
    divCopiar.style.display = "flex"
}

//recuperar el texto del text area
function recuperarTexto(){
    var areatex = document.querySelector(".areatext")
    return areatex.value
}


//crear funcion para mostrar el mensaje encriptado
 function mostrarTextoEncriptado(){
    //mostramos nuestro resultado
    ocultarImagen();
    //volvemos nuestra funcion una variable
    let mensajePorEncriptar = recuperarTexto();
    // llamos nuestro parrafo donde ira el texto encriptado y 
    // llamos nuestra funcion para encriptar y ponemos de parametro
    //  la variable en la cual guardamos nuestro mensaje
    resultadoTexto.textContent = encriptarTexto(mensajePorEncriptar)
    
 }

 //funcion para mostrar el mensaje desencriptado la cual es
 //basicamente igual a la de mostrar el mensaje incriptado
 //con ligeros cambios
 function mostrarTextoDesencriptado(){
    ocultarImagen();
    let mensajePorEncriptar = recuperarTexto();
    resultadoTexto.textContent = desencriptarTexto(mensajePorEncriptar)
 }

 //funcion para copiar el mensaje encriptado o desencriptado

function copiar() {
    btnCopiar.addEventListener("click", copiar = () => {
        var contenido = resultadoTexto.textContent;
        navigator.clipboard.writeText(contenido);
        console.log("hola");
    });
}