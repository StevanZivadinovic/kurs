/*Kreirati klasu Radnik koja sadrži dva atributa - ime i platu ranika.
Napraviti konstruktor kome se prosleđuju dve vrednosti koje treba postaviti.
Napraviti odgovarajuće getere i setere.*/

export class Radnik{
    constructor(i,p){
        this.ime=i;
        this.plata=p;
    }

    set ime(i){
        this._ime=i;

    }
    set plata(p){

        this._plata=p;
    }
    get ime(){
        return this._ime;
    }
    get plata(){
        return this._plata;
    }


}