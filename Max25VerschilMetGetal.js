'use strict';
(function () {
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        functie();
    });



    function functie() {
        let arr = [];
        for (let i = 0; i < 50; i++) {
          arr.push(Math.floor(Math.random() * 501));
        }
        
        let input = parseInt(prompt("Voer een getal in:"));
        
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
          if (Math.abs(arr[i] - input) <= 25) {
            count++;
          }
        }
        
        alert("Het aantal getallen in de array dat hoogstens 25 verschilt met " + input + " is " + count);
      }


    
})();