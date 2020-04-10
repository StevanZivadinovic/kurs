/*
Napraviti funkciju ispitajSličnost koja za dve prosleđene boje vraća true
ukoliko su te dve boje iste, u suprotnom vraća false.
Napraviti funkciju srednjaTalasnaDuzina koja za niz boja vraća vrednost
srednje talasne dužine.*/

import {Boja} from './modules/boja.js';
let bo1=new Boja(330,'zasicena', 'slab');
let bo2=new Boja(550,'zasicena', 'slab');
let bo3=new Boja(470,'zasicena', 'slab');
let boje=[bo1,bo2,bo3];

let ispitajSličnost=(boja1,boja2)=>{
    if(boja1.talasna==boja2.talasna && boja1.zasicenje==boja2.zasicenje && boja1.intezitet){


        return true;
    }
    else {

        return false;
    }


};
console.log(ispitajSličnost(bo1,bo2));



//Napraviti funkciju srednjaTalasnaDuzina koja za niz boja vraća vrednost
//srednje talasne dužine.

let srednjaTalasnaDuzina=niz=>{


        let suma=0;
        niz.forEach(a => {
            suma+=a.talasna;
        });
        let prosek=suma/niz.length;
        return prosek;


};
console.log(srednjaTalasnaDuzina(boje));











