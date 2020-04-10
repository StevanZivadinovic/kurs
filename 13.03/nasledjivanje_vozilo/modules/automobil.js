/*
import {Vozilo} from './vozilo.js';

export class Automobil extends Vozilo{//clasa automobil nasledjuje klasu vozilo, tj nasledjuje sve promenljive i metode iz 
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
*/

import { Vozilo } from "./vozilo.js";


export class Automobil extends Vozilo{

    constructor(t,b,br){

        super(t,b);
        this.regBr=br;
    }

    set regBr(br){

        this._regBr=br;
    }
    get regBr(){
        return this._regBr;
    }

    ispisiAuto(){

        console.log(`Auto tipa ${this.tip}, boje: ${this.boja}`);
    }
}