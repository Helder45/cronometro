const horaEl = document.querySelector("#hora");
const minutosEl = document.querySelector("#minutos");
const segundosEl = document.querySelector("#segundos");
const iniciarBtn = document.querySelector("#iniciar");
const pararBtn = document.querySelector("#parar");
const resetarBtn = document.querySelector("#resetar");

let intervalo;
let hora = 0;
let minutos = 0;
let segundos = 0;
let milisegundos = 0;
let pausado = false;

iniciarBtn.addEventListener("click", iniciarContador);
pararBtn.addEventListener("click", pararTempo);

function iniciarContador() {

    intervalo = setInterval(() => {

        if (!pausado) {

            segundos += 1;

            if (segundos === 60) {
                minutos++;
                segundos = 0;
            }

            if (minutos === 60) {
                hora++;
                minutos = 0;
            }

            minutosEl.textContent = formatarTempo(minutos);
            segundosEl.textContent = formatarTempo(segundos);
            horaEl.textContent = formatarTempo(hora);

        }

    }, 1000);

}

function pararTempo(){
    pausado = true;

}

function formatarTempo(tempo) {
    if (tempo < 10){
        return `0${tempo}`;
    } else {
        return tempo;
    }
}

console.log(setInterval(incrementarContador(), 1000));
