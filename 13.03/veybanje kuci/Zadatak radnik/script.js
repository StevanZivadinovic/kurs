/*
Napraviti funkciju maksPlata kojoj se prosleđuje niz radnika, a ona vraća
najveću platu ranika.
*/


import {Radnik} from './modules/radnik.js';

let r1=new Radnik('Rade',40000);
let r2=new Radnik('Mile',45000);
let r3=new Radnik('Zika',41000);


let radnici=[r1,r2,r3];

let maksPlata=niz=>{

    let max=niz[0].plata;
    niz.forEach(e => {
        if(e.plata>max){
            max=e.plata;
        }
    });
    return max;

};
console.log(maksPlata(radnici));

//Napraviti funkciju maksPlataOsoba kojoj se prosleđuje niz radnika, a ona
//ispisuje sve podatke za svakom od radnika sa maksimalnom platom.


let maksPlataOsoba=niz=>{
    let max=niz[0].plata;
    let maxIme=niz[0].ime;
    niz.forEach(e => {
        if(e.plata>max){
            max=e.plata;
            maxIme=e.ime;
        }
    });
    return maxIme;


};
console.log(maksPlataOsoba(radnici));













