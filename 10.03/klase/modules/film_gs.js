/*// Modul film_gs.js


export class Film {
    constructor(n, r, g) {
        this.fNaslov = n;
        this.fReziser = r;
        this.fGodinaIzdanja = g;
    }



    
    stampaj() {
        console.log(`Film '${this.naslov}' rezirao ${this.reziser}, ${this.godinaIzdanja}. godine`);//nazivi
        //promenljivih u stammpaj, tj nazivi njihovi moraju da budu isti kao u construktoru ili kao nazivi
        //polja deklarisanih unutar getera i setera.
        //Nazivi polja u konstruktoru i imena getera i setera moraju da budu isti. A nazivi polja koja se deklarisu
        //unutar setera i preuzimaju unutar getera moraju da se razlikuju od naziva setera i getera i od naziva polja
        //u konstruktorima!!!OVO JE PRVA MOGICNOST I OVAKO RADI, REKLA MI JELENA
        //Moguce je i da nazivi u konstruktoru i nazivi polja unutar setera i getera budu isti, a nazivi
        //setera i getera razliciti od ovih. To sam sam zakljucio na osnovu primera auto.js;
    }


    //U klasi Film, dodati po tri setera za sva polja, s tim da se u seteru za
    //godinu izdanja proverava da li je godina veća od 1800.
    get fNaslov() {
        return this.naslov;//ovo nazoves isto kao u seteru
    }
    set fNaslov(n) {// ne mora da bude isto slovo kao gore
        this.naslov = n;//ovde mora isto slovo kao u zagradama sto je slovo u prethodnom redu
    }
    get fReziser() {
        return this.reziser;
    }
    set fReziser(r) {
        this.reziser = r;
    }
    get fGodinaIzdanja() {
        return this.godinaIzdanja;
    }
    set fGodinaIzdanja(g) {
        if(g > 1800) {
            this.godinaIzdanja = g;
        }
        else {
            this.godinaIzdanja = 1800;
        }
    }
} */

