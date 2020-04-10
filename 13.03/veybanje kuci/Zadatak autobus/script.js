/*
Napraviti niz autobusa.

.*/


import {Autobus} from './modules/autobus.js';

let a1=new Autobus('NI-131AP',80);
let a2=new Autobus('NI-111AW',90);
let a3=new Autobus('NI-191QW',70);


let autobusi=[a1,a2,a3];

//Napraviti funkciju ukupnoSedista kojoj se prosleđuje niz autobusa a koja
//određuje i vraća koliko ukupno sedišta sadrže svi autobusi koji se nalaze u
//nizu autobusa.
let ukupnoSedista=niz=>{

    let suma=0;
    niz.forEach(e => {
        suma+=e.sedista;
    });
    return suma;
};

console.log(`Ukupan broj sedista je:${ukupnoSedista(autobusi)}`);


//Napraviti funkciju maksSedista koja ispisuje podatke o autobusu koji ima
//najveći broj sedišta.


    let maksSedista=niz=>{

        let max=niz[0].sedista;
        niz.forEach(a=>{
            if(a.sedista>max){

                max=a.sedista;
            }


        });
        return max;


    };
console.log(maksSedista(autobusi));


//Napraviti funkciju ljudi kojoj se prosleđuje broj ljudi i niz autobusa a funkcija
//vraća true ukoliko je moguće toliko ljudi smestiti u autobuse, u suprotnom
//vraća false


let ljudi=(ljudi, niz)=>{

if(ljudi>ukupnoSedista(niz)){

    return false;
}
else{
    return true;
}


};
console.log(ljudi(241,autobusi));














