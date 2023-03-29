'use strict';

(function () {

    const pyramide = document.getElementById('input-piramids');
    const btn = document.getElementById('btn-piramids');
    let string = "";

    btn.addEventListener('click', () => {
        string = "";
        for (let i = 1; i <= pyramide; i++) {
            for (let j = 0; j < i; j++) {
                string += "*";
            }
            string += "\n";
        }
    });


    console.log(string);

}());

