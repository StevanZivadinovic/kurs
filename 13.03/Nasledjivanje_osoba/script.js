import {Osoba} from './modules/osoba.js';

import { Zaposleni } from './modules/zaposleni.js';
import { Sportista } from './modules/sportista.js';
import {Kosarkas} from './modules/kosarkas.js';

let o1=new Osoba('Jelena','Matejic',1994);
o1.ispisiOsobu();

let z1=new Zaposleni('Pera','Peric',1976, 54000, 'ekonomista');

z1.ispisiZaposlenog();
z1.ekonomista();

let z2=new Zaposleni('Mika','Mikic',1990, 50000, 'ucitelj');
z2.ekonomista();//ne treba nista da ispise


//Napisati funkciju prosekPlate kojoj se
//prosleđuje niz radnika a ona vraća prosečnu
//platu radnika.
let radnici=[z1,z2];

let prosecnaPlata=niz=>{
let suma=0;
niz.forEach(elem => {

    suma+=elem.plata;
    
    
});

let arsr=suma/niz.length;
return arsr;


};

console.log(`Prosecna plata je: ${prosecnaPlata(radnici)} dinara`);




//z1.natprosecnaPlata(prosecnaPlata(radnici));

let avg=prosecnaPlata(radnici);
console.log(z1.natprosecnaPlata(avg));
console.log(z2.natprosecnaPlata(avg));


let s1=new Sportista('Laza','Lazic',1997,'Beograd');
s1.ispisatiSportistu();
let k1=new Kosarkas('Vlade','Divac',1968,'Prijepolje',[24,36,40,100,21,21]);
let k2=new Kosarkas('Pedja','Stojakovic',1977,'Pozega',[20,12,10,25,50]);
let k3=new Kosarkas('Nikola','Jokic',1995,'Sombor',[40,30,27,10]);

let kosarkasi=[k3,k2,k1];

//Napisati funkciju najviseUtakmica koja vraća
//košarkaša koji je odigrao najveći broj
//utakmica.
let najviseUtakmica=niz=>{

    let naj=niz[0];
    let najUt=niz[0].poeni.length;

    niz.forEach(elem=>{
        let d=elem.poeni.length;
        if(najUt<d){

            najUt=d;
            naj=elem;
        }

    });

    return naj;

}

najviseUtakmica(kosarkasi).ispisiKosarkasa();

//Napisati funkciju najvisePoena koja vraća
//košarkaša koji je postigao najveći broj poena
//na jednoj utakmici.




let najvisePoena=niz=>{

    let max=niz[0].poeni[0];
    let maxKos=niz[0];
    niz.forEach(k=>{

        let poeni=k.poeni;
        poeni.forEach(p=>{

            if(p>max){

                max=p;
                maxKos=k;
            }

        });

    });
    return maxKos;

};
najvisePoena(kosarkasi).ispisiKosarkasa();




//Napisati funkciju najviseProsecnoPoena koja
//vraća košarkaša koji je u proseku postigao
//najveći broj poena po utakmici.


let prosekPoena=niz=>{
    let suma=0;
   niz.forEach(a=>{
    suma+=a;

   });
   let rez=suma/niz.length;
   return rez;
};

console.log(prosekPoena(kosarkasi[1].poeni));


let najviseProsecnoPoena=niz=>{

let maxProsek=prosekPoena(niz[0].poeni);
let maxIme=niz[0].ime;

niz.forEach(a=>{

if(prosekPoena(a.poeni)>maxProsek){

    maxProsek=prosekPoena(a.poeni);
    maxIme=a.ime;
}
});
return maxIme;

};
console.log(najviseProsecnoPoena(kosarkasi));




