

export class Racunar{

    constructor(s,b){
      this.sifra=s;
        this.boja=b;
    }
    set sifra(s){
        if(s.length==4){

            this._sifra=s;
        }
        else{
            this._sifra='aaaa';
        }
        
    }
    set boja(b){
        if(b=='bela' || b=='siva' || b=='crna'){
           this._boja=b; 
        }
        else{
            this._boja='bela';
        }
        
    }
    get sifra(){
        return this._sifra;
    }
    get boja(){
        return this._boja;
    }
    stampajRacunar(){
        console.log(`Racunar sifre: ${this.sifra}, boja: ${this.boja}`)
    }

    
}