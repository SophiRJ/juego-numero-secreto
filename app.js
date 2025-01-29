let numeroSecreto=0
let intentos=0
let lista_numeros=[]
let numero_maximo=10

function asignarTextoElemento(elemento,texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
}
function verificarIntento(){
    let numeroDeUsuario= parseInt(document.getElementById('valorUsuario').value); 
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos===1) ?'intento':'intentos'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');   
    }else {
        if(numeroDeUsuario<numeroSecreto){
            asignarTextoElemento('p','El numero secreto es mayor')
        }else{
            asignarTextoElemento('p','El numero secreto es menor')
        }
        intentos++
        limpiar()
    }
}
function limpiar(){
    //limpiamos el campo
    document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto() {
    let numero_generado= Math.floor(Math.random()*numero_maximo)+1

    console.log(numero_generado)
    console.log(lista_numeros)
    //Si ya sorteamos todos los numeros mostramos el msj en pantalla y cerramos el juego
    if(lista_numeros.length==numero_maximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros.')
    }else{
        //Si el numero generado esta en la lista: 
        if(lista_numeros.includes(numero_generado)){
            return generarNumeroSecreto()
        }else{
            lista_numeros.push(numero_generado)
            return numero_generado
        }
    }
}
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numero_maximo}`);
    numeroSecreto=generarNumeroSecreto()
    intentos=1;
}

function reiniciarJuego(){
    //limpiamos la caja
    limpiar()
    //indicar mensaje de inicio
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales()
    //deshabilitar el boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled',true)
    
}

condicionesIniciales()
