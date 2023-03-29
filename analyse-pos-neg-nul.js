"use script";

(function (){

    const arr = [];

for (let i = 0; i < 100; i++) {
    arr.push(Math.round(Math.random() * 100 - 50));
}

const analysePosNegNul = function () {
    let analysis = [0, 0, 0]

    analysis[0] = arr.filter(n => {
        return n > 0;
    }).length;

    analysis[1] = arr.filter(n => {
        return n < 0;
    }).length;

    analysis[2] = arr.filter(n => {
        return n === 0;
    }).length;

    return analysis;
}();

console.log('Het aantal positieve getallen is ' + analysePosNegNul[0] + '.');
console.log('Het aantal negatieve getallen is ' + analysePosNegNul[1] + '.');
console.log('Het aantal nullen is ' + analysePosNegNul[2] + '.');

let analyseObject = {
    pos: arr.filter(n => {
        return n > 0;
    }).length,

    neg: arr.filter(n => {
        return n < 0;
    }).length,

    zer: arr.filter(n => {
        return n === 0;
    }).length
};

console.log("\n\n");
console.log('Het aantal positieve getallen is ' + analyseObject.pos + '.');
console.log('Het aantal negatieve getallen is ' + analyseObject.neg + '.');
console.log('Het aantal nullen is ' + analyseObject.zer + '.');


})();

