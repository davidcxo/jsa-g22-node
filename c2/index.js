// function mnozenje(a, b) {
//     let c = a * b;
//     console.log(c);
// }

// const Mnozenje = (a, b) => console.log(a * b); //   FAT-ARROW FUNCTION

// // Funkcijata 1 pravi konverzija od C vo F
// // Funkcijata 2 pravi konverzija od F vo C

// mnozenje(10, 8);
// Mnozenje(60, 8);

function c2f(c) {
    return c * 1.8 + 32;
};

function f2c(f) {
    console.log((f - 32) * 5 / 9);
};

let res1 = c2f(10);
console.log(res1)

f2c(10);
//let res3 = console.log(res2)l
// console.log(res3);

const fun = (parm, c) => {
    let r = parm(c) + 100;
    return r;
};

let res = fun(c2f, 12);

console.log('FUN: ', res);

const handler = (e) => {
    console.log(e);
}

// el.addEventListener('click', handler);

// el.addEventListener('click', (e) => {
// console.log(e);    
// });
