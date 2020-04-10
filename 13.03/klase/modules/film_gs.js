// Modul film_gs.js

export class Film {
    constructor(n, r, g, o) {
        this.fNaslov = n;
        this.fReziser = r;
        this.fGodinaIzdanja = g;
        this.fOcene= o;
    }
    stampaj() {
        console.log(`Film '${this.fNaslov}' rezirao ${this.fReziser}, ${this.godinaIzdanja}. godine`);//
        //ili naslov getera i setera koji su isti sa nazivima u konstruktoru ili naziv promeljive iz getera i setera.
        //ovo godina izdanja mi je ustavri proenlkjiva iz getera i setera fGodinaIzdanja.
    }
    get fNaslov() {
        return this.naslov;
    }
    set fNaslov(n) {
        this.naslov = n;
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
    get fOcene(){

        return this.ocene;//Imena getera i setera moraju da budu ista sa onim u konstruktoru. A ovo u returnu mora da ima
        //drugacije ime bar za jedno slovo sto je ovde slucaj, slonili smo f;!!!!!
    }
    set fOcene(o){

        this.ocene=o;
    }
    
    
    //Napraviti metod prosek koji vraća prosečnu ocenu

    prosecna(){
        let s=0;
        let br=this.ocene.length; //ovde smo mogli i fOcene;
        let niz=this.ocene;

        niz.forEach(elem => {
            s+=elem;
        });
        let arsr=s/br;
        return  arsr;
    }


    


}





























