let personagem = document.querySelector('#personagem')
let quadrado = document.querySelector('#quadrado')

//jogo
function pular(){
    if(personagem.classList != 'animar'){
        personagem.classList.add('animar')
    }

    setTimeout(function(){
        personagem.classList.remove('animar')
    }, 500)
}



var testarColisao = setInterval( function(){

    var topoPersonagem = parseInt(
     window.getComputedStyle(personagem).getPropertyValue('top')
    )
    var EsquerdaQuadrado = parseInt(
        window.getComputedStyle(quadrado).getPropertyValue('left')
       )

       if(EsquerdaQuadrado < 20 && EsquerdaQuadrado > 0 && topoPersonagem >= 130){
        quadrado.style.animation = 'none'
        quadrado.style.display = 'none'
        alert('Você perdeu! Recarregue e tente novamente!')
	alert('Tempo vivo:' + hh + ':' + mm + ':' + ss)
	clearInterval(cron);
    }

    var EsquerdaQuadrado2 = parseInt(
        window.getComputedStyle(quadrado2).getPropertyValue('left')
       )

       if(EsquerdaQuadrado2 < 20 && EsquerdaQuadrado2 > 0 && topoPersonagem <= 140){
        quadrado.style.animation = 'none'
        quadrado.style.display = 'none'
        alert('Você perdeu! Recarregue e tente novamente!')
	alert('Tempo vivo:' + hh + ':' + mm + ':' + ss)
	clearInterval(cron);
    }

}, 10)

//cronometro
"use strict"

var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000;//Quantos milésimos valem 1 segundo?
var cron;
window.onload = initPage;


function initPage(){
	cron = setInterval(() => { timer(); }, tempo);
}

//Inicia o temporizador
function start() {
    cron = setInterval(() => { timer(); }, tempo);
}

//Para o temporizador mas não limpa as variáveis
function pause() {
    clearInterval(cron);
}

//Para o temporizador e limpa as variáveis
function stop() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerText = '00:00:00';
}

//Faz a contagem do tempo e exibição
function timer() {
    ss++; //Incrementa +1 na variável ss

    if (ss == 59) { //Verifica se deu 59 segundos
        ss = 0; //Volta os segundos para 0
        mm++; //Adiciona +1 na variável mm

        if (mm == 59) { //Verifica se deu 59 minutos
            mm = 0;//Volta os minutos para 0
            hh++;//Adiciona +1 na variável hora
        }
    }

    //Cria uma variável com o valor tratado HH:MM:SS
    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    
    //Insere o valor tratado no elemento counter
    document.getElementById('counter').innerText = format;

    //Retorna o valor tratado
    return format;
}
