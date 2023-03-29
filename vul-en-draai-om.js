'use strict';

(function () {

    let arrEen = [];
    for (let i = 0; i <= 9; i++) {
        arrEen.push(Math.round(Math.random() * 10));
    }

    let arrTwee = [];
    for (let i = arrEen.length - 1; i >= 0; i--) {
        arrTwee.push(arrEen[i]);
    }
    console.log(arrEen);
    console.log(arrTwee);

})();