console.log('[DevSoutinho] Flappy Bird');
console.log('Inscreva-se no canal :D https://www.youtube.com/channel/UCzR2u5RWXWjUh7CwLSvbitA');

const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');
contexto.fillStyle = '#70c5ce';
contexto.fillRect(0, 0, canvas.width, canvas.height);

class gameObject{
    constructor(sX, sY, largura, altura, x, y){
        this.sX = sX;
        this.sY = sY;
        this.largura = largura
        this.altura = altura;
        this.x = x;
        this.y = y;
    }

    desenhaPadrao(){
        contexto.drawImage(
            sprites,
            this.sX, this.sY,
            this.largura, this.altura,
            this.x, this.y,
            this.largura, this.altura
        );
    }

    desenhaDuplicada(){
        contexto.drawImage(
            sprites,
            this.sX, this.sY,
            this.largura, this.altura,
            (this.x + this.largura), this.y,
            this.largura, this.altura
        );
    }

}


function loop(){
    const flappyBird = new gameObject(0, 0, 34, 24, 10, 50);
    const chao = new gameObject(0, 610, 224, 113, 0, (canvas.height - 113));
    const planoDeFundo = new gameObject(390, 0, 276, 204, 0, (canvas.height - 204));
    planoDeFundo.desenhaPadrao();
    planoDeFundo.desenhaDuplicada();
    chao.desenhaDuplicada();
    chao.desenhaPadrao();
    flappyBird.desenhaPadrao();
    

    requestAnimationFrame(loop);
}

loop();