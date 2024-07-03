/* 1ro quedaba asi , luego redujimos el codigo

let titulo = document.querySelector("h1");
titulo.innerHTML = "Juego del número secreto";

let parrafo = document.querySelector ("p");
parrafo.innerHTML = "Indica un numero del 1 al 10";

function intentoDeUsuario () {
    alert ("click desde el boton");
} 

*/

let numeroSecreto = 0;
let intentos= 0;
let listaNumerosSorteados= [];
let numeroMaximo = 10;

console.log (numeroSecreto);

function asignarTextoElemento (elemento,texto) {
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeusuario = parseInt(document.getElementById("valorUsuario").value);

    if (numeroDeusuario === numeroSecreto) {
        asignarTextoElemento ("p",`acertaste el numero en ${intentos} ${(intentos===1) ? "vez": "veces"} ` );
        document.getElementById("reiniciar").removeAttribute("disabled");
    }  
        else  {

        if (numeroDeusuario > numeroSecreto) {
            asignarTextoElemento ("p" , "el numero secreto es menor");
        } else {
            asignarTextoElemento ("p", "el numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();
     
    }
    return;
} 

function limpiarCaja() {
    document.querySelector("#valorUsuario").value= "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si el numero generado esta en la lista//
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si sorteamos todos los numeros
    if (listaNumerosSorteados.length ==numeroMaximo ) {
        asignarTextoElemento("p" , "ya se sortearon todos los numeros posibles");

        } else {

        
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();

        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

function condicionesIniciales () {

asignarTextoElemento ("h1", "juego del numero secreto");
asignarTextoElemento ("p" , `indica un numero del 1 al ${numeroMaximo}`);
numeroSecreto =generarNumeroSecreto();
intentos = 1;

}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disable", "true");

}

condicionesIniciales();

asignarTextoElemento ("h1", "Juego del numero secreto");
asignarTextoElemento ("p", "Indica un numero del 1 al 10");


