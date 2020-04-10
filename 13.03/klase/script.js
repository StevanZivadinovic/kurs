import {Auto} from "./modules/auto.js";
import Film from "./modules/film.js";
import Pacijent from "./modules/pacijent.js";
import {Film as FilmGS} from "./modules/film_gs.js";
import {Pacijent as PacijentGS} from "./modules/pacijent_gs.js";

let auto = {
    marka: "Peugeot 208",
    boja: "bela",
    sviraj: function() {
        console.log("Beep! Beep!");
    }
};

console.log(auto.marka);;
auto.sviraj();

let datum = new Date();
    // Date - ime klase
    // new Date(); - kreira objekat klase Date
    // let datum = new Date(); - promenljiva datum cuva objekat klase Date
console.log(datum.getDay());

let niz1 = [1, 2, 3];
let niz2 = new Array(1, 2, 3);
console.log(niz1);
console.log(niz2);
console.log(niz1.length);

let o1 = {
    ime: "Pera",
    godine: 25
};

let o2 = new Object();
o2.ime = "Pera";
o2.godine = 25;

console.log(o1);
console.log(o2);

let auto1 = new Auto("Peugeot 208", "bela", false);
    // constructor("Peugeot 208", "bela", false)
    // auto1.marka = "Peugeot 208"
    // auto1.boja = "bela"
    // auto1.imaKrov = false
let auto2 = new Auto("Mazda CX-30", "crvena", true);
    // constructor("Mazda CX-30", "crvena", true)
    // auto2.marka = "Mazda CX-30"
    // auto2.boja = "crvena"
    // auto2.imaKrov = true
console.log(auto1, auto2);
auto1.sviraj();
auto2.sviraj();
auto1.sviraj();
//console.log(auto1.marka);
console.log(auto1.aMarka); // geteru se pristupa kao polju!!!
console.log(auto2.boja);
//auto1.marka = "Citroen C5";
auto1.aMarka = "Citroen C5"; // seteru se pristupa kao polju!!!
auto1.aBoja = "plava";
console.log(auto1);

let film1 = new Film("Titanik", "James Cameron", 1997);
let film2 = new Film("Ko to tamo peva", "Slobodan Sijan", 1980);
film1.stampaj();
film2.stampaj();

let p1 = new Pacijent("Pera Peric", 1.74, 74);
let p2 = new Pacijent("Laza Lazic", 1.80, 40);

console.log(p1.kritican());
console.log(p2.kritican());
p1.visina = -90;

let f1 = new FilmGS("Naked Gun", "David Zucker", 1500,[10,8,7,9]);
let f2=new FilmGS('Avatar','Dzejms Kamerun',2009, [10, 10, 9, 10, 6]);
let f3=new FilmGS('Ambis','Dzejms Kamerun',1989,[10,7,9,10,8]);
//f1.fGodinaIzdanja = 1599;
console.log(f1);

let filmovi = [f1,f2,f3];
//ispis ocena ovih filmova
filmovi.forEach(elem=>{
    let ocene=elem.fOcene;
    ocene.forEach(o=>{

        console.log(o);
    });

});

console.log(f1.prosecna());


let pac1 = new PacijentGS("Pera", -50, 1000);
console.log(pac1);
//DODATO 12.03

let pa1=new PacijentGS('ana',173,70);
let pa2=new PacijentGS('mira',165,55);
let pa3=new PacijentGS('mila',176,65);


//ispisati podatke o pacijentu sa najmanjom tezinom
let pacijenti=[pa1,pa2,pa3];

let minPac=pacijenti[0];//cuva ceo objekat, onosno sve podatke o jednom pacijentu
let minTez=pacijenti[0].pTezina;
pacijenti.forEach(elem=>{

if(minTez>elem.pTezina){

    minPac=elem;
    minTez=elem.pTezina;
}

});
minPac.stampaj();




//ispisati podatke o pacijentu sa najvecim bmi;


let maxPac=pacijenti[0];
let maxBmi=pacijenti[0].bmi();//bmi je metod pa ga pozivamo sa zagradama;
pacijenti.forEach(elem=>{

    if(elem.bmi()>maxBmi);
maxPac=elem;
maxBmi=elem.bmi;



});


console.log(`pacijent sa najvecim BMI je`);
maxPac.stampaj();


/*Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj
(vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom
veku*/

let filmVek=(niz,odGod,doGod)=>{

    niz.forEach(elem=>{

       if(  elem.fGodinaIzdanja>=odGod && elem.fGodinaIzdanja<=doGod)
       {

        elem.stampaj();
       }
    });
};

filmVek(filmovi,1999,2020);


let prosecnaOcena=niz=>{

    let sumaOcena=0;
    let brojOcena=0;
    niz.forEach(film=>{
        let ocene=film.fOcene;
        ocene.forEach(o=>{

            sumaOcena+=o;
            brojOcena++;

        });



    });
    let arsr=sumaOcena/brojOcena;
    return arsr;

};

    console.log(`prosecna ocena svih filmova je ${prosecnaOcena(filmovi)}`);


    /*Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a ona vraća
najbolje ocenjeni film.*/



    let najboljeOcenjeni=niz=>{

        let naj=niz[0];
        niz.forEach(film=>{

            let p=film.prosecna();//ovo prosecna() je metod iz film_gs

            if(p>naj.prosecna()){

                naj=film;

            }


        });
        return naj;

    };
console.log(`Najbolje ocenjeni broj je:`);
najboljeOcenjeni(filmovi).stampaj();


//Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film
//koji je najbliži prosečnoj oceni svih filmova.

let osrednjiFilm=(niz)=>{


    let globalniProsek=prosecnaOcena(niz);
    //globalni prosek gp=6.2;
    //prosek nekog pojedinacnnog filma npr=4.5
    //prosek nekog drugog filma = 7;
    //|-7|==|+7|
    let najbliziElem=niz[0];
    let najbliziProsek=Math.abs(niz[0].prosecna()-globalniProsek);
    niz.forEach(elem=>{
        
        let pom=Math.abs(elem.prosecna()-globalniProsek);
        if(pom<najbliziProsek){

            najbliziElem=elem;
            najbliziProsek=pom;

        }

    });
    return najbliziElem;
};


let osr=osrednjiFilm(filmovi);
osr.stampaj();

//prosecna ocena za f1:

console.log(f1.prosecna());
console.log(f2.prosecna());
console.log(f2.prosecna());



//Napisati funkciju najcescaOcena kojoj se prosleđuje niz ocena, a ona vraća
//ocenu koju su filmovi najčešće dobijali.OVAKO NESTO MOZE DA BUDE NA ITREVJUU ZA POSO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let oc=[1,1,5,8.3,4.001,10,1,9,9,5,5,5]; //neki random niz za koji ce da nadjemo koji broj se najcesce pojavljivao

    let najcesca=oc[0];
    let ponavljanje=0;
    let maxPonavljanja=0;
for(let i=0; i<oc.length; i++){

    for(let j=0; j<oc.length; j++){

        if(oc[i]==oc[j]){

            ponavljanje++;
        }
    
        if(ponavljanje>maxPonavljanja){

            maxPonavljanja=ponavljanje;
            najcesca=oc[i];
        }
        //ponavljanje resetujemo na 0 da bi svaki put pocelo iznova brojanje ponavljanja
    }
    ponavljanje=0;
}
console.log(`Najfrekventnija ovecena je;${najcesca}`);

















































