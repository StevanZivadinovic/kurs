/*Kreirati klasu Datum koja sadrži tri atributa - dan, mesec i godinu.
Napraviti konstruktor kome se prosleđuju tri vrednosti koje treba postaviti.
Napraviti odgovarajuće getere i setere.*/


export class Datum{

    constructor(d,m,g){
        this.dan=d;
        this.mesec=m;
        this.godina=g;
    }

    set dan(d){

        this._dan=d;
    }
    set mesec(m){
        this._mesec=m;
    }
    set godina(g){
        this._godina=g;
    }
    get dan(){
        return this._dan;
    }
    get mesec(){
        return this._mesec;
    }
    get godina(){

        return this._godina;
    }
}