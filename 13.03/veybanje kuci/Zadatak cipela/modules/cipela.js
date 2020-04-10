/*Napraviti klasu Cipela koja sadrži atribute: naziv, broj cipele i niz prepravki
koje treba obaviti na cipeli.
Napraviti odgovarajući konstruktor, getere i setere.
Napraviti metodu zalepi koja po pozivu na ekranu ispisuje “Zalepljena cipela”.
Napraviti metodu prosiri koja po pozivu na ekranu ispisuje “Prosirena cipela”.
Napraviti metodu usij koja po pozivu na ekranu ispisuje “Usivena cipela”. */

export class Cipela{ 
    constructor(n,br,niz){

        this.naziv=n;
        this.broj=br;
        this.prepravke=niz;
    }

    set naziv(n){
        this._naziv=n;
    }
    set broj(br){
        this._broj=br;
    }
    set prepravke(niz){
        this._prepavke=niz;
    }
    get naziv(){
        return this._naziv;
    }
    get broj(){
        return this._broj;
    }
    get prepravke(){
        return this._prepavke;
    }
    zalepi(){
        console.log(`Zalepljena cipela`);
    }
    prosiri(){
        console.log(`Prosirena cipela`);
    }
    usij(){
        console.log(`Usivena cipela`);
    }


}