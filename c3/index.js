// C - create
// R - read 
// U - update 
// D - delete 

let line = "-------------";

// Домашна
// 1. Сите студенти од Скопје чие име завршува на а, и имаат просек над 7, подредени по име (растечки).
// 2. Сите студенти кои имаат просек над 9 и не се од !== Скопје, подредени по просек опаѓачки.
// 3. Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек.
// 4. Градови подредени по групна просек.
// 5. Вкупен просек на студенти чие име завршува на а наспроти сите останати.

const studenti = [
    {ime: 'Bojan', prosek: 7.5, grad: 'Skopje'},
    {ime: 'Petar', prosek: 8.3, grad: 'Bitola'},
    {ime: 'Yanko', prosek: 6.9, grad: 'Bitola'},
    {ime: 'Vesna', prosek: 9.2, grad: 'Skopje'},
    {ime: 'Elena', prosek: 9.9, grad: 'Kumanovo'},
    {ime: 'Vancho', prosek: 10, grad: 'Tetovo'},
    {ime: 'Elena', prosek: 9.9, grad: 'Ohrid'},
    {ime: 'Ivana', prosek: 6.9, grad: 'Kumanovo'},
    {ime: 'Natasha', prosek: 8.1, grad: 'Skopje'},
    {ime: 'Stanko', prosek: 7.2, grad: 'Strumica'}
];

// forEach, map, reduce, sort, filter, find

// forEach - ГИ ИЗМИНУВА СИТЕ ЕЛЕМЕНТИ ОД НИЗАТА, НЕ ВРАЌА НИКАКОВ РЕЗУЛТАТ
studenti.forEach(s => {
    console.log(s.ime);
});

// for(let i = 0; i < studenti.length; i++) {
//     console.log(studenti[i].ime);
// };

// console.log(line);

// map - ИЗМИНУВА НИЗА ЗА ПРОМЕНИ НА ИСТАТА, РЕЗУЛТАТОТ Е НОВА НИЗА
// const name = studenti.map(s => {
//   return s.ime;
//});

// reduce - РЕДУЦИРА/НАМАЛУВА/СУМИРА НИЗА НА ЕДЕН ЕДИНСТВЕН РЕЗУЛТАТ
// let ocenki = studenti.reduce((acc, s) => {
//     return acc + s.prosek;
// }, 0);

// console.log(ocenki);
// console.log(ocenki / studenti.length);

// sort - СОРТИРА ЕЛЕМЕНТИ ВО НИЗАТА СПОРЕД ДАДЕНА ФУНКЦИЈА ЗА СОРТИРАЊЕ
// studenti.sort((a, b) => {
//     if(a.prosek > b.prosek) return -1;
//     if(a.prosek < b.prosek) return 1;
//     return 0;
// });

// console.log(studenti);

// console.log(line);


// studenti.sort((a, b) => {
//     if(a.ime.toLowerCase() < b.ime.toLowerCase()) return -1;
//     if(a.ime.toLowerCase() > b.ime.toLowerCase()) return 1;
//     return 0;
// });
// console.log(studenti);

// filter - ВРАЌА НИЗА ОД ЕЛЕМЕНТИ КОИ ОДГОВАРААТ НА ПОСТАВЕНИОТ УСЛОВ
// let studentiFilter = studenti.filter((s) => {
//     // return s.ime === 'Petar';
//     // return s.ime.endsWith('o');
//     // return s.prosek > 8;
//     // return s.prosek < 8;
// });

// console.log(studentiFilter);

// find - ВРАЌА ЕЛЕМЕНТ ОД НИЗАТА КОЈ ОДГОВАРА НА ПОСТАВЕНИОТ УСЛОВ
let studentiFind = studenti.find((s) => {
    return s.ime === 'Petar';
});

console.log(studentiFind);