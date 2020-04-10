/*class Vozilo{

    constructor(t,b){

        this.tip=t;
        this.boja=b;

    }

    set tip(t){

        this._tip=t;
    }
    set boja(b){

        this._boja=b;
    }
    get tip(){
        return this._tip;//parametar(atribut, polje)
    }
    get boja(){

        return this._boja;
    }

    ispisiVozilo(){

        console.log(`Vozilo:${this.tip} ${this.boja}`);//pozvani su  geteri ovde
    }
    vozi(){

        console.log(`vozilo u pokretu`);
    }
}

class Automobil extends Vozilo{//clasa automobil nasledjuje klasu vozilo, tj nasledjuje sve promenljive i metode iz 
    //klase vozilo
//ova podklasa moze da radi i bez svog konstruktora zato sto nasledi konstruktor od roditeljske klase(ili od nekog
//drugog predka), ali ako uvodimo neki novi poperti u podklasi onda radimo sledece:
    constructor(t,b,rb){//t i b uzete od roditelja ali moraju da se otkucaju;

        super(t,b);
        this.regBr=rb;
    }

    set regBr(rb){

        this._regBr=rb;
    }

    get regBr(){
        return this._regBr;
    }

        ispisiAutomobil(){

            console.log(`automobil:${this.tip} ${this.boja} ${this.regBr}`);//napravili smo metodu u klasi automobil ali mozemo da pozivamo propertije
            //iz klase Vozilo!!!
        }

}
    ovo TREBA DA OSTANE ZAKOMENTARISANO UVEK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/

/*

import {Vozilo} from './modules/vozilo.js';
import {Automobil} from './modules/automobil.js';//ovde je klasa autombil nasledila sve od klase Vozilo
// i mozes preko klase automobil da pozoves sva polja i metode iz klase vozilo
import {Kamion} from './modules/kamion.js';


let v1=new Vozilo('drumsko','crvena');

v1.ispisiVozilo();
v1.vozi();


let a1=new Automobil('drumsko','plava','NI-111AA');
a1.ispisiVozilo();
a1.vozi();

a1.ispisiAutomobil();
// v1.ispisiAutomobil(); - ovo ne moze. Roditeljska klasa ne nasledjuje propertije i metode iz podklase;



let k1=new Kamion('drumsko vozilo','siva',4);
k1.ispisiKamion();


*/


//vezba

import {Vozilo} from './modules/vozilo.js';
import { Automobil } from './modules/automobil.js';
import { Kamion } from './modules/kamion.js';



let a1=new Automobil('drumsko','crna');
console.log(a1._boja);
a1.ispisiVozilo();

a1.ispisiAuto();

let k1=new Kamion('drumsko','crvena','150t');
k1.ispisiKamion();










