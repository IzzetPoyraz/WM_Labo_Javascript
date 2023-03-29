'use strict';

(function () {

    class Dobbelsteen {
        constructor(min = 1, max = 6) {
          this._min = min;
          this._max = max;
          this._worp = min;
        }
        
        gooi() {
          this._worp = Math.floor(Math.random() * (this._max - this._min + 1)) + this._min;
          return this._worp;
        }
        
        get laatsteWorp() {
          return this._worp;
        }
      }
      
      const dobbelsteen = new Dobbelsteen(3, 10);
      
      const btn = document.querySelector('#btn-gooi');
      const input = document.querySelector('#input-gooi');
      const error = document.querySelector('#error');
      
      btn.addEventListener('click', () => {
        const target = parseInt(input.value);
        
        if (isNaN(target)) {
          error.textContent = 'Een ongeldige waarde';
          return;
        }
        
        if (target < 3 || target > 10) {
          error.textContent = 'Het getal moet tussen 3 en 10 zijn';
          return;
        }
        
        let worpen = 0;
        
        while (dobbelsteen.laatsteWorp !== target) {
          console.log(`Nieuwe worp = ${dobbelsteen.gooi()}`);
          worpen++;
        }
        
        console.log(`In ${worpen} pogingen werd een ${target} gedobbeld`);
      });
      
      

})();