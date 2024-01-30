// Valores inciados en cero, la funcion condiconesIniciales() los establece en su llamada
let numeroSecreto = 0;
let intentos = 0;
let listaDeNumeroSorteados = [];
// let numeroMaximo = 10;

//! Intento de crear un jeugo con numero de sorteos dado por el ususario
let numeroMaximo = parseInt(prompt("Ingresa un numero total de jeugos, numero en decimas por favor."))

// console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto) {
    let elemetnoHTML = document.querySelector(elemento);
    elemetnoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('numeroUsusario').value);
    // console.log(intentos);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El ususario no acerto 
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpairCaja();
    }
    return;
}

function limpairCaja() {
    document.querySelector('#numeroUsusario').value = '';
}

function crearNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random() * numeroMaximo) + 1;
    //* Progreso de la lista y el numero ------ test---------
    //console.log(numeroGenerado);
    //console.log(listaDeNumeroSorteados);
    //* Verificar si el valor ingresado no es multiplo de 10
    if (numeroMaximo % 10 != 0) {
        alert('El numero debe ser un valor de deiz en diez. presiona F5')
    }
    //* de ser multiplo el flujo del programa sigue su curso
    else {
        // Si se llega al numero maximo de numeros a sortear la lista se reestablece tal cual el juego 
        if (listaDeNumeroSorteados.length == numeroMaximo) {
            // Mostrar mensaje en pantalla 
            asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')
        } 
        else {

            // Si el numero generado est en la lista entonce haremos lo siguiente
            if (listaDeNumeroSorteados.includes(numeroGenerado)) {
                return crearNumeroSecreto();
            }
            // Si no lo esta, seguimos como hasta ahora 
            else {
                listaDeNumeroSorteados.push(numeroGenerado);
                return numeroGenerado;
            }
        }
    }
}

function condiconesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = crearNumeroSecreto();
    intentos = 1;
}

function reinciarJuego() {
    // Limpiar caja
    limpairCaja();
    // Mostrar nuevamente mensaje de inicio
    // Generar el numero aleatorio de nuevo
    // Reiniciar intentos
    condiconesIniciales();
    // Deshabilitar el boton de reinicio
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

condiconesIniciales();