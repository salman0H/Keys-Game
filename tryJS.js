const ball = document.querySelector('.ball');
const speed = 50;
let xMove = 0;
let yMove = 0;
const maxWidth = window.innerWidth;
const maxHeight = window.innerHeight;

document.addEventListener('keyup',(code) => {
    const way = code.keyCode;
    if(way === 37){
        xMove -= speed;
    }else if(way === 38){
        yMove -= speed;
    }else if(way === 39){
        xMove += speed;
    }else if(way === 40){
        yMove += speed;
    }
    
    if(xMove < speed * (-1)){
        ball.style.left = `${maxWidth}px`;
        xMove = maxWidth;
    }else if(xMove > maxWidth + speed){
        ball.style.left = `0px`;
        xMove = 0;
    }else{
        ball.style.left = `${xMove}px`
    }

    if(yMove < speed * (-1)){
        ball.style.top = `${maxHeight}px`;
        yMove = maxHeight;
    }else if(yMove > maxHeight + speed){
        ball.style.top = `0px`;
        yMove = 0;
    }else{
        ball.style.top = `${yMove}px`;
    }
})


