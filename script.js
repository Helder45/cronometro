const horaEl = document.querySelector("#hora");
const minutosEl = document.querySelector("#minutos");
const segundosEl = document.querySelector("#segundos");
const iniciarBtn = document.querySelector("#iniciar");
const resumirBtn = document.querySelector("#resumir");
const pararBtn = document.querySelector("#parar");
const resetarBtn = document.querySelector("#resetar");

let intervalo;
let hora = 0;
let minutos = 0;
let segundos = 0;
let pausado = false;

resumirBtn.disabled = true;

iniciarBtn.addEventListener("click", iniciarContador);
pararBtn.addEventListener("click", pararTempo);
resumirBtn.addEventListener("click", resumirTempo);
resetarBtn.addEventListener("click", resetarTempo);

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
    iniciarBtn.disabled = true;
    pararBtn.disabled = true;
    resumirBtn.disabled = false;
}

function resumirTempo() {
    pausado = false;
    pararBtn.disabled = false;
    resumirBtn.disabled = true;
}

function resetarTempo() {
    clearInterval(intervalo);
    hora = 0;
    minutos = 0;
    segundos = 0;

    horaEl.textContent = formatarTempo(minutos);
    minutosEl.textContent = formatarTempo(segundos);
    segundosEl.textContent = formatarTempo(hora);

    iniciarBtn.disabled = false;
    pararBtn.disabled = false;
    resumirBtn.disabled = true;
    
}

function formatarTempo(tempo) {
    if (tempo < 10){
        return `0${tempo}`;
    } else {
        return tempo;
    }
}