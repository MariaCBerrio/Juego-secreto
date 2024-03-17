let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximoI = 4;
let numeroMaximo = 10;
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
   let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
 
   if (numeroUsuario == numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
   } else {
        if (numeroUsuario > numeroSecreto) { 
            asignarTextoElemento("p", "El número secreto es menor");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        intentos ++;
        limpiarCaja();
   }
   if (intentos > numeroMaximoI) {
        asignarTextoElemento("p", `Has alcanzado el límite de intentos que es ${(numeroMaximoI)}`)
        document.getElementById("reiniciar").removeAttribute("disabled");
   }
   return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = "";
}

function generarNumeroSecreto() {
    if(numerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p", "Ya se sortearon todos los numeros");
    }
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;
    if (numerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        numerosSorteados.push(numeroGenerado)
        return numeroGenerado;
    }
}
function condicionesIniciales() { 
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);    
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();

