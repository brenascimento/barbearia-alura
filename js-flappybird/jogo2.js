console.log('[DevSoutinho] Flappy Bird');
console.log('Inscreva-se no canal :D https://www.youtube.com/channel/UCzR2u5RWXWjUh7CwLSvbitA');

const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

function gameObject(sX, sY, largura, altura, x, y){
    contexto.drawImage(
        sprites,
        sX, sY,
        largura, altura,
        x, y,
        largura, altura
    );
}

const flappyBird = gameObject(0, 0, 34, 24, 10, 50);


function loop(){
    flappyBird();

    requestAnimationFrame(loop);
}

loop();