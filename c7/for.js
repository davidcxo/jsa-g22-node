let studenti = [
    {ime: 'Pero', prezime: 'Perovski', prosek: 8.3},
    {ime: 'Ivan', prezime: 'Ivanovski', prosek: 6.1},
    {ime: 'Janko', prezime: 'Jankovski', prosek: 9.7}
];

for(let i = 0; i < studenti.length; i++) {
    // console.log(i);
    console.log(studenti[i].prezime);
};

let bukvi = 'abcde';

for(let y = 0; y < bukvi.length; y++) {
    console.log(bukvi[y]);
};

let niza = ['new york', 'los angeles', 'paris', 'berlin', 'barcelona'];

for(let g = 0; g < niza.length; g++) {
    console.log(niza[g]);
};

for(let s in studenti) { // indeksot
    console.log(s);
    console.log(studenti[s]);
};

for(let o of studenti) { // vrednosta
    console.log(o);
};