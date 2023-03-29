'use strict';

(function () {
    class Rechthoek{
        cooX;
        cooY;
        breedte;
        hoogte;

        constructor(cooX, cooY, breedte, hoogte) {
            this.cooX = cooX;
            this.cooY = cooY;
            this.breedte = breedte;
            this.hoogte = hoogte;
        }

        isVierkant(){
            return this.breedte === this.hoogte;
        }

        berekenOmtrek(){
            return 2*this.breedte + 2*this.hoogte;
        }

        berekenOpp(){
            return this.breedte*this.hoogte;
        }

        isIn(cooX, cooY) {
            let cooXRO = this.cooX+this.breedte;
            let cooYRO = this.cooY-this.hoogte;

            return cooX >= this.cooX && cooX <= cooXRO && cooY <= this.cooY && cooY >= cooYRO;

        }
    }

    let rechthoek = new Rechthoek(4, 4, 4, 4);

    console.log(rechthoek.isVierkant())
    console.log(rechthoek.berekenOmtrek())
    console.log(rechthoek.berekenOpp())
    console.log(rechthoek.isIn(4, 2.5))



})();