/*Kreirati klasu Autobus koja ima podatke o registarskom broju autobusa i o
broju sedišta u autobusu.
Napraviti konstruktor kome se prosleđujeu odgovarajuće vrednosti.
Napraviti odgovarajuće getere i setere.
Napraviti metodu koja ispisuje podatke o autobusu.*/


export class Autobus{

        constructor(rb,sed){
            this.regBroj=rb;
            this.sedista=sed;
        }

        set regBroj(rb){
            this._regBroj=rb;
        }
        set sedista(sed){
            this._sedista=sed;
        }
        get regBroj(){
            return this._regBroj;
        }
        get sedista(){
            return this._sedista;
        }
        ispisAutobusa(){
            console.log(`Autobus tablica: ${this.regBroj}, sedista: ${this.sedista}`);
        }
        
}