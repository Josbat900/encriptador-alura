//importamos las funciones que encriptan y desencriptan
import {encriptarTexto,desencriptarTexto} from "./utils/logic.js"
import {mostrarSeccionDefault,mostrarSeccionCaracter} from "./utils/showSeccion2.js"
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

//crea una funcion que muestre la imagen
function mostrarImagen(){
    imagen.style.display = "flex";
    noMensaje.style.display = "flex"
    resultadoEncriptado.style.display = "none"
    divCopiar.style.display = "none"
}
//recuperar el texto del text area
function recuperarTexto(){
    var areatex = document.querySelector(".areatext")
    return areatex.value
}


//crear funcion para mostrar el mensaje encriptado
function mostrarTextoEncriptado() {
    //volvemos nuestra funcion del textarea una variable
    let mensajePorEncriptar = recuperarTexto();
    const validacion = /^(?=[a-z0-9!@#$%^&*()_+\-=\[\]{}])[a-z0-9!@#$%^&*()_+\-=\[\]{}\s]+$/.test(mensajePorEncriptar.trim())
    if (validacion === true) {
        //en caso que no haya ningun mensaje por encriptar mostrar de nuevo la imagen
        if (mensajePorEncriptar.length > 0) {
            //mostramos nuestro resultado
            ocultarImagen();
            // llamos nuestro parrafo donde ira el texto encriptado y 
            // llamos nuestra funcion para encriptar y ponemos de parametro
            //  la variable en la cual guardamos nuestro mensaje
            resultadoTexto.textContent = encriptarTexto(mensajePorEncriptar)
        }
    }else if(validacion === false && mensajePorEncriptar.length == 0){
        mostrarSeccionDefault()
        mostrarImagen();
    }else{
        mostrarSeccionCaracter()
        mostrarImagen();
    }
}

 //funcion para mostrar el mensaje desencriptado la cual es
 //basicamente igual a la de mostrar el mensaje incriptado
 //con ligeros cambios
function mostrarTextoDesencriptado() {
    let mensajePorEncriptar = recuperarTexto();
    const validacion = /^(?=[a-z0-9!@#$%^&*()_+\-=\[\]{}])[a-z0-9!@#$%^&*()_+\-=\[\]{}\s]+$/.test(mensajePorEncriptar.trim())
    if (validacion === true) {
        if (mensajePorEncriptar.length > 0) {
            ocultarImagen();
            resultadoTexto.textContent = desencriptarTexto(mensajePorEncriptar)
        }
    } else if (validacion === false && mensajePorEncriptar.length == 0) {
        mostrarSeccionDefault()
        mostrarImagen();
    } else {
        mostrarSeccionCaracter()
        mostrarImagen();
    }
}

 //funcion para copiar el mensaje encriptado o desencriptado

function copiar() {
    var contenido = resultadoTexto.textContent;
    navigator.clipboard.writeText(contenido);
}