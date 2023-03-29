'use strict';
(function () {
    const input = document.querySelector('#input-piramids');
    const btn = document.querySelector('#btn-piramids');
    const error = document.querySelector('#error-piramids');

    const createLine = function (n) {
        let lijn = '';
        for (let i = 1; i <= n; i++) {
            lijn += '*';
        }
        return lijn;
    }

    const createPyramid = function (n) {
        let pyramid = '';
        for (let i = 1; i <= n; i++) {
            pyramid += createLine(i);
            if (i !== n) {
                pyramid += '\n';
            }
        }
        return pyramid;
    }

    const draw = function (n) {
        for (let i = 0; i < n; i++){
            console.log(i+1)
            console.log(createPyramid(n))
        }
    }

    btn.addEventListener('click', function (){
        error.innerText = '';
        const value = + input.value;

        if (isNaN(value)) {
            error.innerText = 'Please enter a number.';
            return;
        }
        if (!value) {
            error.innerText = 'Please enter a number greater than 0.';
            return;
        }
        if (!Number.isInteger(value)) {
            error.innerText = 'Please enter an integer.';
            return; 
        }

        draw(value);
    })
})();