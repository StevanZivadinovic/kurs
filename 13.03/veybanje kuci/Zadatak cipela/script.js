/*
Napraviti funkciju radi kojoj se prosledjuje jedna cipela (jedna instanca klase
Cipela) i koja proverava da li je neka u nizu prepravki sadrži string zalepi,
proširi ili ušij. Svaki put kada naiđe na prepravku (element u nizu prepravki)
zalepi poziva se metoda zalepi, kada naiđe na prepravku prosiri poziva se
metoda prosiri, kada naiđe na prepravku usij poziva se metoda usij, u
suprotno se na ekranu ispisuje “Nepoznata prepravka”. */

import {Cipela} from './modules/cipela.js';

let c1=new Cipela('patika',41,['zalepi','usij']);
let c2=new Cipela('cizma',42,['prosiri']);
let c3=new Cipela('stikla',45,['zalepi']);


let cipele=[c1,c2,c3];
let radi=cipela=>{
let nizPrepravki=cipela.prepravke;
nizPrepravki.forEach(a => {
    if(a=='zalepi'){

        cipela.zalepi();
    }
    if(a=='prosiri'){

        cipela.prosiri();
    }
    if(a=='usij'){

        cipela.usij();
    }
});


};
radi(cipele[2]);
















