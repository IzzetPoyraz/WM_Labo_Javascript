'use strict';

(function () {
    let halfjes = [];

    for (let i = 0.5; i <= 5; i += 0.5) {
        halfjes.push(i);
    }
    console.log(halfjes);
    halfjes.forEach(value => console.log(value));
    halfjes.filter(value => {
        let even = [];
        if (value % 2 === 0) {
            even.push(value);
            console.log(value);
        }
    })
})();
