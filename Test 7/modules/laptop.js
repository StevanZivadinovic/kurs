import { Racunar } from "./racunar.js";



export class Laptop extends Racunar{

    constructor(s,b,m){
        super(s,b);
        this.masa=m;
    }
    set masa(m){
        if(m<100){
            this._masa=100;
        }
        else{
            this._masa=m;
        }

        
    }
    get masa(){
        return this._masa;
    }
    stampajLaptop(){
        console.log(`Racunar sifre: ${this._sifra}, boja: ${this._boja}, masa:${this._masa}`);
    }
}