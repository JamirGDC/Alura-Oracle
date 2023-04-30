function borrarmuneco(){
    let muneco = document.getElementById("muneco");
    let parrafo = document.getElementById("parrafo");
    let textencr = document.getElementById("textencr");
    muneco.style.display = "none";
    parrafo.style.display = "none";
    textencr.style.display = "flex";
    textencr.style.height = "900px";
    textencr.style.width = "400px";
}

function remplazar(){
    let elemtexto=document.getElementById("1").value.toLowerCase();
    let elemtxtarea=document.getElementById("encrip");

    // lo que esta debtro de elemtexto vamos a remplazar por lo que esta dentro de las comillas del replace y se va a guardar en txtaEncriptar despues de cada remplazo se guarda en la misma variable esto se hace si para evitar que se pierda el texto encriptado anterior y se vaya sobre escribiendo
    let txtaEncriptar=elemtexto.replace(/e/img,"enter");
    txtaEncriptar=txtaEncriptar.replace(/i/img,"imes");
    txtaEncriptar=txtaEncriptar.replace(/a/img,"ai");
    txtaEncriptar=txtaEncriptar.replace(/o/img,"ober");
    txtaEncriptar=txtaEncriptar.replace(/u/img,"ufat");
    elemtxtarea.value=txtaEncriptar;
}

function Desencriptar(){
    
    let elemtexto=document.getElementById("1").value.toLowerCase();
    let elemtxtarea=document.getElementById("encrip");

    let txtaDesencriptar=elemtexto.replace(/enter/img,"e");
    txtaDesencriptar=txtaDesencriptar.replace(/imes/img,"i");
    txtaDesencriptar=txtaDesencriptar.replace(/ai/img,"a");
    txtaDesencriptar=txtaDesencriptar.replace(/ober/img,"o");
    txtaDesencriptar=txtaDesencriptar.replace(/ufat/img,"u");
    elemtxtarea.value=txtaDesencriptar;
}

 function copiar(){
    let elemtxtarea=document.getElementById("encrip");
    elemtxtarea.select();
    navigator.clipboard.writeText(elemtxtarea.value);
    
}

function btnencriptar(){
borrarmuneco();
remplazar();
}

function btndesencriptar(){
    Desencriptar();
}


