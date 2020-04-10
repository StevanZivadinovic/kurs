/*Kreirati klasu Boja koja ima talasnu dužinu u nm, zasićenje i intenzitet.
Napraviti konstruktor kome se prosleđuju tri vrednosti koje treba postaviti.
Napraviti odgovarajuće getere i setere. */

export class Boja{

        constructor(nm,za,int){

            this.talasna=nm;
            this.zasicenje=za;
            this.intezitet=int;
        }

        set talasna(nm){
            this._talasna=nm;
        }
        set zasicenje(za){
            this._zasicenje=za;
        }
        set intezitet(int){
            this._intezitet=int;
        }
        get talasna(){
            return this._talasna;
        }
        get zasicenje(){
            return this._zasicenje;
        }
        get intezitet(){
            return this._intezitet;
        }

}