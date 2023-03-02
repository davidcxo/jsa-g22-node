// 1. Сите студенти од Скопје чие име завршува на а, и имаат просек над 7, подредени по име (растечки).
// 2. Сите студенти кои имаат просек над 9 и не се од !== Скопје, подредени по просек опаѓачки.
// 3. Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек.
// 4. Градови подредени по групна просек.
// 5. Вкупен просек на студенти чие име завршува на а наспроти сите останати.

const studenti = [
    {ime: 'David', prosek: 7.5, grad: 'Skopje'},
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


// ------------------------------------ 1
studenti.sort((a, b) => {
    if(a.ime < b.ime) return -1;
    if(a.ime > b.ime) return 1;
    return 0;
});

let studentiFilter_Eden = studenti.filter((s) => {
    return (s.ime.endsWith('a') && s.grad === 'Skopje' && s.prosek > 7);
});


console.log(studentiFilter_Eden);

// ------------------------------------ 2
studenti.sort((a, b) => {
    if(a.prosek < b.prosek) return 1;
    if(a.prosek > b.prosek) return -1;
    return 0;
});

let studentiFilter_Dva = studenti.filter((s) => {
    return (s.grad !== 'Skopje' && s.prosek > 9);
});

// console.log(studentiFilter_Dva);

// ------------------------------------ 3 --- TBA
studenti.sort((a, b) => {
    if(a.prosek < b.prosek) return -1;
    if(a.prosek > b.prosek) return 1;
    return 0;
});

const Zadaca_Tri = studenti.map(s => {
  return s.ime.length === 5 && studenti.slice(0, 3);
});

// console.log(Zadaca_Tri);

// ------------------------------------ 4

// let set = new Set(studenti.map(s => s.grad));
// console.log(set);

let set = []; // niza od gradovi

for(let i = 0; i < studenti.length; i++) {
    if(!set.includes(studenti[i].grad)) {
        set.push(studenti[i].grad);
    }
}

let res = Array.from(set).map(g => {
    let sbroj = studenti.filter(s => s.grad === g).length; // kolku studenti se od odreden grad
    let svkupno = studenti.reduce((acc, v) => { 
        if(v.grad === g) { // dali studentot e od odreden grad i toj grad e ednakov na g
            return acc + v.prosek; // go sobirame proseko na studentot so prosecite na studentite od istiot grad
        }
        return acc; // vrati ja prethodnata sostojba ( samo vrati go prosekot )
    }, 0);
    return {
        grad: g,
        prosek: svkupno / sbroj
    }
}).sort((a, b) => {
    if(a.prosek > b.prosek) return -1;
    if(a.prosek < b.prosek) return 1;
    if(a.prosek == b.prosek) return 0;
});

console.log(res);