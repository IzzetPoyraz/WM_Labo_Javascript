'use strict';
(function () {

    class Target {
        constructor(element) {
          this.element = element;
          this.element.addEventListener('click', this.handleClick.bind(this));
        }
        
        handleClick() {
          this.update();
        }
        
        update() {
          const currentFlexGrow = parseFloat(this.element.style.flexGrow) || 0;
          const newFlexGrow = currentFlexGrow + 1;
          this.element.style.flexGrow = newFlexGrow;
          this.element.innerText = `${newFlexGrow}`;
        }
      }
      
      const btn1 = document.getElementById('btn1');
      const target1 = new Target(btn1);
      
      const btn2 = document.getElementById('btn2');
      const target2 = new Target(btn2);
      

})();