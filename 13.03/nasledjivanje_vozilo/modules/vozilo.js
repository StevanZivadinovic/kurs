/*export class Vozilo{

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
*/

//vezba
export class Vozilo{

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
        return this._tip;
    }
    get boja(){
        return this._boja;
    }

    ispisiVozilo(){

        console.log(`Vozilo je ${this.tip}, boje: ${this.boja}`);
    }

    vozi(){

        console.log(`Vozilo je u pokretu`);
    }
}

