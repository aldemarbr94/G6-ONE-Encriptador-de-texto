//ENCRIPTADOR DE TEXTO//


function mostrarTexto(idAtributo, texto){
    let elementoHTML = document.querySelector(idAtributo);
    elementoHTML.innerHTML = texto;
}


function ocultarElementos(){
    document.querySelector(".salidaUsuario").style.backgroundImage = "none";
    document.querySelector(".salidaUsuario1").innerHTML = "";
    document.querySelector(".salidaUsuario2").innerHTML = "";
    document.querySelector('.entradaUsuario').value = ""
}


function encriptar(){
    let entradaUsuario = document.querySelector(".entradaUsuario").value;

    entradaUsuario = entradaUsuario.toLowerCase();

    entradaUsuario = entradaUsuario.replaceAll("e", "enter");
    entradaUsuario = entradaUsuario.replaceAll("i", "imes");
    entradaUsuario = entradaUsuario.replaceAll("a", "ai");
    entradaUsuario = entradaUsuario.replaceAll("o", "ober");
    entradaUsuario = entradaUsuario.replaceAll("u", "ufat");


    mostrarTexto(".salidaUsuario", entradaUsuario);
    ocultarElementos();

    console.log(entradaUsuario);
}

function desencriptar(){
    let entradaUsuario = document.querySelector(".entradaUsuario").value;

    entradaUsuario = entradaUsuario.toLowerCase();

    entradaUsuario = entradaUsuario.replaceAll("enter", "e");
    entradaUsuario = entradaUsuario.replaceAll("imes", "i");
    entradaUsuario = entradaUsuario.replaceAll("ai", "a");
    entradaUsuario = entradaUsuario.replaceAll("ober", "o");
    entradaUsuario = entradaUsuario.replaceAll("ufat", "u");

    mostrarTexto(".salidaUsuario", entradaUsuario);
    ocultarElementos();

    console.log(entradaUsuario);
}

function copiar(){

}