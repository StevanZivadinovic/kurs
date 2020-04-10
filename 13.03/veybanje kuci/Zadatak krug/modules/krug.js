/*Kreirati klasu Krug koja ima atribut za poluprečnik kruga.
Napraviti odgovarajući konstruktor, getere i setere.
Napraviti metodu obimKruga koja izračunava i vraća obim kruga.
Napraviti metodu povrsinaKruga koja izračunava i vraća površinu kruga.*/

export class Krug{


    constructor(p){
        this.poluprecnik=p;
    }
    set poluprecnik(p){
        this._poluprecnik=p;
    }
    get poluprecnik(){

        return this._poluprecnik;
    }
    obimKruga(){
        let o=2*this.poluprecnik*Math.PI;
        return o;
    }
    povrsinaKruga(){
        let p=(this.poluprecnik)**2*Math.PI;
        return p;
    }
}