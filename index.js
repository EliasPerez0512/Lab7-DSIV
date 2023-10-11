function CambioColor(){
    var x =document.createElement("STYLE");
    var t =document.createTextNode(".tablita1{color: green;}")
    x.appendChild(t);
    document.head.appendChild(x)
}
function AgregarTexto(){
    var elemento = document.getElementById("tablita2");
    var agregar =document.getElementById("entry").value;
    elemento.innerHTML = agregar;
}
function ConcatenarDosTextos(){
    var elemento = document.getElementById("tablita3");
    var texto1 =document.getElementById("texto1").value;
    var texto2=document.getElementById("texto2").value;
    elemento.innerHTML = texto1+" "+texto2;
}
function RemoverOpcion(){
    var x= document.getElementById();
    x.remove(x.ariaSelectedIndex);
}