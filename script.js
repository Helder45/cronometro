function iniciar() {

}

function resetar() {

}

function parar() {

}

function incrementarHora(){

}

function incrementarMinutos() {

}

function incrementarContador() {
    let contador = 0;
    if (contador == 59) {
        contador = 0;
        incrementarMinutos();
    } else {
        contador += 1;
    }
    

    return contador;
}

hora = parseInt(document.getElementById("hora").value);
minutos = parseInt(document.getElementById("minutos").value);
segundos = parseInt(document.getElementById("segundos").value);

console.log(setInterval(incrementarContador(), 1000));
