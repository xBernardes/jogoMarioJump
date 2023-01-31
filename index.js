const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

const jump = () =>{
    mario.classList.add('jump')

    setTimeout(()=> {
        mario.classList.remove('jump')
    },900)
} 
const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    if (pipePosition <= 20 && pipePosition >0 && marioPosition< 80){

        pipe.style.amimation = 'none'
        pipe.style.left = `${pipePosition}px`
        mario.style.amimation = 'none'
        mario.style.botton = `${marioPosition}px`
        mario.src = './assets/gameover.png'
        mario.style.width='10%'
        mario.style.marginLeft ='20px'
        clearInterval(loop)
    } 
}, 10)
document.addEventListener('keydown', jump)