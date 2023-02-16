const fs = require('fs'); // Vcituvanje na paket/modul za rabota so filesystem - files and folders

// fs.writeFile(
//     'data.txt', // File kade ke se zapise
//     'Hello World... Node... :(',  // Sto ke bide zapisano vo file
//     (err) => { // Funkcijata koja ke se izvrsi otkako ke zavrsi zapisot
//         if(err) console.log(err);
//         console.log('Zapisot e napraven!');
//     }
// );

fs.writeFile(
    'data.txt', 'Hello World... Node... :(',  (err) => { 
        if(err) return console.log(err);
        console.log('Zapisot e napraven!');
    }
);

// PROMISE
// Step: 1
// const fileWrite = () => {
// };

// Step: 2
// const fileWrite = () => {
//     return new Promise();
// };

// Step: 3
// const fileWrite = () => {
//     return new Promise (() => {

//     });
// };

// Step: 4
// const fileWrite = () => {
//     return new Promise ((success, fail) => {

//     });
// };



// Step: 5
const fileWrite = (filename, data) => {
     return new Promise ((success, fail) => {
            fs.writeFile(
                filename, data,  (err) => { 
                if (err) return fail(err);
                return success();
        });
   });
};

fileWrite('data1.txt', 'Nov File so zapis od promise!')
    .then(() => {
        console.log('Zapisot e uspesen! (Vo noviot File)')
    })
    .catch(err => {
        console.log(err)
    });


// (async () => {
//     try {
//         await fileWrite('data1.txt', 'Nov File so zapis od promise!');
//         await fileWrite('data1.txt', 'Nov File so zapis od promise!');
//         await fileWrite('data1.txt', 'Nov File so zapis od promise!');
//     } catch(err) {
//         console.log(err);
//     }
// })();

const main = async () => {
    try {
        await fileWrite('data1.txt', 'Nov File so zapis od promise!')
    } catch(err) {
        console.log(err);
    }
};

main();