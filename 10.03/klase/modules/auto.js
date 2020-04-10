/*// Klasa Auto
// Unutar klasa i objekata: metode se pisu kao obicne funkcije, NIKADA kao arrow funkcije
export class Auto {
    // polja: marka, boja, imaKrov
    // konstruktor:
    constructor (m, b, ik) {
        this.marka = m;
        this.boja = b;
        this.imaKrov = ik;
    }
    sviraj() {
        // this - objekat koji je pozvao metodu//O
        let m = this.marka;
        console.log(`Auto marke ${m} svira: Beep!Beep!`);
    }
    get aMarka() { // Geter - u klasi je metoda//OVDE NISMO URADLI ONAKO KAKO SE INACE NAZIVAJU
        //PROMENLJIVE, ALI IZGLEDA DA MOZE I OVAKO. POSTOJE DVE MOGUCNOSTI:
        //1) NAZIV SETERA I GETERA MORA DA BUDE ISTI KAO NAZIV POLJA U KONSTRUKTORU, a naziv polja unutar
        //setera i getera razlicit od njih(OVAKO RADI!!!)
        //2) NAZIV POLJA UNUTAR GETERA I SETERA MORA DA BUDE ISTI KAO NAZIV POLJA U KONSTRUKTORU, a naziv setera
        //i getera mora da bude razlicit od njih. To sam zakljucio iz ovog primera ali nije sigurno.
        
        return this.marka;
    }
    set aMarka(m) { // Seter - u klasi je takodje metoda
        if(m.includes("Citroen")) {
            console.log("Nije dozvoljena marka");
        }
        else {
            this.marka = m;
        }
    }
    get aBoja() {
        return this.boja;
    }
    set aBoja(b) {
        this.boja = b;
    }
    get aImaKrov() {
        return this.imaKrov;
    }
    set aImaKrov(ik) {
        this.imaKrov = ik;
    }
}
*/






