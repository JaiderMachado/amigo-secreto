let numeroSecreto = generarNumeroSecreto



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
// con innerHTML podemos ya colocarle un nombre a ese titulo
    elementoHTML.innerHTML = texto; 
    return; 
}
function iverificarInento(){
    let numeroDeUsuario = document.getElementById('valorUsuario').Value;

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p','Acertaste el nùmero');
    }
    return; 
}

function generarNumeroSecreto() {
    return numeroSecreto = Math.floor(Math.random()*10)+1;
     
}

asignarTextoelemento('h1','juego del numero secreto');
asignarTextoelemento('p','indica el numero del 1 al 100');