'use strict';

(function () {

    for (let i = 0; i < 1000; i++) {
        const diameter = Math.random() * 100 + 'px'
        const ball = document.createElement('span')
        ball.style.height = diameter;
        ball.style.width = diameter;
        ball.style.borderRadius = "50%";
        ball.style.position = 'absolute';
        ball.style.left = Math.random() * 1000 + 'px';
        ball.style.top = Math.random() * 1000 +'px';
        ball.style.backgroundColor = `hsl(${Math.random() *
        360},80%, 70%)`
        document.body.appendChild(ball)
    
        window.addEventListener('click', (e) => {
            if(e.target.tagName !== 'SPAN'){
                return
            }
            e.target.style.border = "black 2px solid"
        })
    
        window.addEventListener('mouseover', (e) => {
            if(e.target.tagName !== 'SPAN'){
                return
            }
            e.target.style.transition = "filter 0.25s ease-in-out"
            e.target.style.filter = "invert(100%)"
        })
        }
    



}());