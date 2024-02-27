// funcion para encriptar texto
export function encriptarTexto(mensaje){
    //guardamos el mensaje en un variable
    var texto = mensaje;
    //variable donde se ira formando nuestro texto incriptado
    var textoFinal = "";

    /* 
    hacemos un bucle que recorrar nuestro mensaje
    si el bucle encuentra una "vocal" le agregara al texto final su letras encriptadoras
    ejemplo si encuentra la "a" agregara "ai"
    en el momento que revisa una letra si no es vocal ira al ultimo else en el cual agregara la consonante
    */
    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

//funcion para desencriptar el texto
export function desencriptarTexto(mensaje){
    //guardamos el mensaje en un variable
    var texto = mensaje;
    //variable donde se ira formando nuestro texto incriptado
    var textoFinal = "";

    /* 
    hacemos un bucle que recorrar nuestro mensaje
    si el bucle encuentra una "vocal" la agregara al texto final y seguido suma las letras
     restantes correspondiente de el encriptado ejemplo:
    hello=henterllober
    en el primer recorrido imprimiria la h, seguido la e, e iria en el segundo recorrido
    e = enter, ya agregamos la e entonces descartamos las siguientes 4 palabras, sumando
    este numero al recorrido, el recorrido estaria quedando tal que asi: he 
    y pasaria a examinar la l la cual se imprime sin problema dos veces: hell
    la siguiente letra es la o la cual se imprimiria y se sumarian 3 a que son las letras restantes 
    o(ber)
    */
    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }
    
    return textoFinal;
 }


