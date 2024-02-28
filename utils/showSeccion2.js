let seccion2h3 = document.querySelector(".seccion-2h3")
let seccion2p = document.querySelector(".seccion-2p")


// en caso de que no haya ninguna letra en la encriptadora devolvera la seccion normal
export function mostrarSeccionDefault(){
    //declaramos las variables con los mensajes default
    let h3Default = "Ningun mensaje fue encontrado"
    let pDefault =  "ingresa el texto que deseas encriptar o desencriptar"
    //cambiamos el mensaje del h3 y el p
    seccion2h3.textContent = h3Default
    seccion2p.textContent = pDefault
}

export function mostrarSeccionCaracter() {
    //declaramos las variables con los mensajes cuando hayan caracteres especiales
    let caracterEspecial = "caracter no valido"
    let recuerdaCaracteres = "has ingresado un caracter especial o letra mayuscula"
    //cambiamos el mensaje del h3 y el p
    seccion2h3.textContent = caracterEspecial
    seccion2p.textContent = recuerdaCaracteres
}