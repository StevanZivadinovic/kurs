
import { Osoba } from "./osoba.js";

export class Zaposleni extends Osoba{

    constructor(i,p,gr,pl,po){

        super(i,p,gr);

        this.plata=pl;
        this.pozicija=po;
    }

    set plata(pl){

        this._plata=pl;
    }

    set pozicija(po){

        this._pozicija=po;
    }

    get plata(){

        return this._plata;
    }

    get pozicija(){
        return this._pozicija;
    }

    ispisiZaposlenog(){

        this.ispisiOsobu();

        console.log(`plata: ${this.plata} ${this.pozicija}`);
    }

    ekonomista(){

        if(this.pozicija=='ekonomista'){

            console.log(`zaposlen u ekonomskom sektoru`);
        }
    }

    natprosecnaPlata(prosek){
        if(this.plata>prosek){

            return true;
        }

        else{

            return false;
        }

    }
}
