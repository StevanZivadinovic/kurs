let datum=new Date();
//Date je ime klase;
//new Date(); -kreira objekat klase Date;

//let datum=new Date() - promenljiva datum cuva objekat klase Date !!!!!


console.log(datum.getDay());

let niz1=[1,2,3];
let niz2=new Array(1,2,3);
console.log(niz1,niz2);//niz1 i niz 2 su jednaki, Array je klasa koja ima npr metodu length;
//Ti nizove nastavu da definises isto kao i do sad, ne sa ovim Array, to je bilo samo za primer


let o1={


    ime:'Pera',
    godine:25
};


let o2=new Object();//Objekt je rec koja predstavlja klasu objekta o2; To je ugradjena klasa,vec postoji difoltno, ne moras
//da je kreiras
o2.ime='Pera';
o2.godine=25;

console.log(o1);
console.log(o2);


/*
//Formiramo klasu Auto
//OVO JE DEFINICIJA KLASE
class Auto{
    //polja:marka, boja i ima krov
    //konstruktor:
    constructor(m,b,ik){//dodavanje polja.Ovo constructor je zapravo metoda sama po sebi.Metoda je funkcija u objektu(klasi)

        this.marka=m;
        this.boja=b;
        this.imaKrov=ik;
    }//nema zareza !!!

    sviraj(){//unesenje metode.Unutar klasa i objekata ne unositi metode kao Arrow funkcije, nego kao obicne funkcije

        let m=this.marka;//unutar metoda pristupamo polju klase. Ovde se this odnosi na objekat koji poziva metodu sviraj();

        console.log(`Auto marke ${m} svira: Beep!`)
    }


}*/

import {Auto} from "./modules/auto.js"






let auto1=new Auto('Peugeot 208','bela',false);//ovde je isto kao da smo odradili construktor("peogeot","bela",false)
//ovde je konstruktor uradio sledece:
//1) auto1.marka="peugeot";
//2) auto1.boja="bela";
//3) auto1.imaKrov="false";

//auto1 je OBJEKAT!!! kome smo preko konstruktora zadali polja;

let auto2=new Auto('Mazda CX-30','crvena',true);//ovde je isto kao da smo odradili construktor("Mazda CX-30","crvena",false)
//ovde je konstruktor uradio sledece:
//1) auto2.marka="Mazda CX-30";
//2) auto2.boja="crvena";
//3) auto2.imaKrov="true";


console.log(auto1,auto2);


auto1.sviraj();
auto2.sviraj();
auto1.sviraj();

console.log(auto1.aMarka);//geterima i seterima pristupamo kao poljima a unosimo ih kao metode u klasu!!!
auto1.aMarka='Citroen C5'; //opet vidimo da se seteru pristupa kao polju. Ovo se nije prikazalo zato sto nam metod
//aMarka ne dozvoljava unos imena Citroen
auto1.marka='Citroen C5'; //ovo sad mozes
auto1.sviraj();
console.log(auto1);
auto1.boja='crna';
console.log(auto1);
/*
//Kreirati klasu Film koja od polja sadrži naslov, reziser i
//godinaIzdanja, kao i metodu stampaj() za prikaz naslova filma.





class Film {

    constructor(n,r,god){

        this.naslov=n;
        this.reziser=r;
        this.godinaIzdanja=god;

    }

    stampaj(){
        let naslov=this.naslov;//uzima naslov objekta za koji pozoves metodu stampaj();
        console.log(`Naslov filma je ${naslov}`);
    }

    
} */

/* ovo smo zakomentarisali
import Film from "./modules/film.js"


//Kreirati tri objekta klase Film.


let film1=new Film('Lepa sela lepo gore','Zdravko Sotra','2001');

let film2=new Film('Pulp Fiction','Quentin Tarantino','1994');

let film3=new Film('Zona Zamfirova','Milorad Pavic','2006');

//Testirati metode klase.

film1.stampaj();

film2.stampaj();

film3.stampaj();
*/

//Koristiti Bubel sajt, mozes na njemu da vidis kako klasa izgleda ako se zapise kao funkcija

/*

class Pacijent{

constructor(i,v,t){

    this.ime=i;
    this.visina=v;
    this.tezina=t;
}

stampaj(){

    let a=this.ime;
    let b=this.visina;
    let c=this.tezina;
    console.log(`Visina je pacijenta ${a} je ${b}, a tezina je ${c} `);//umesto a si mogo this.ime odmah da uneses, 
    //vazi isto i za b i c;


        }
Bmi(){
        let b=this.visina;
        let c=this.tezina;
        let rez=c/(b**2);

            return rez;
    }      
    
Kritican(){

    if(this.Bmi()<15 || this.Bmi()>40)//polja se navode bez zagrada a funkcije sa zagradama, kao ovde Bmi();
    {
        return true;

    }

    else{

        return false;
    }
}

}

*/
import {Pacijent} from "./modules/pacijent.js"

import {Film as FilmGS} from "./modules/film.js"
let f1=new FilmGS("Naked Gun","david zucher", 1980);
console.log(f1);


import {Pacijent as PacijentGS} from "./modules/pacijent_gs.js"//ovde i u pacijent_gs ne moze difoltno



let pacijent1= new Pacijent('Pera',1.95,);

let pacijent2=new Pacijent('Mika',1.80,85);

let pacijent3=new Pacijent('Zika',1.75,80);


console.log(pacijent1.Kritican());

console.log(pacijent2.Kritican());


console.log(pacijent3.Kritican());

let p1 = new PacijentGS('Mika',1.80,85);
p1.


