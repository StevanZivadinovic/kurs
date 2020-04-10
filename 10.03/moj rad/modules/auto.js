

//Formiramo klasu Auto
//OVO JE DEFINICIJA KLASE
export class Auto{
    //polja:marka, boja i ima krov
    //konstruktor:
    constructor(m,b,ik){//dodavanje polja.Ovo constructor je zapravo metoda sama po sebi.Metoda je funkcija u objektu(klasi)

        this.marka=m;
        this.boja=b;
        this.imaKrov=ik;
    }//nema zareza !!!

    sviraj(){//unesenje metode.Unutar klasa i objekata ne unositi metode kao Arrow funkcije, nego kao obicne funkcije

        let m=this.marka;//unutar metoda pristupamo polju klase. Ovde se this odnosi na objekat koji bude pozivao
        // metodu sviraj();

        console.log(`Auto marke ${m} svira: Beep!`)
    }

    get aMarka(){//aMarka je samo naziv get funkcije (getera)

        return this.marka;
    }

    set aMarka(m){//aMarka je samo naziv funkcije (setera)

            if(m.includes("Citroen"))
            {
                console.log(`nije dozvoljena marka`)
            }
            else
            {

               this.marka=m; 
            }
        
    }

    get aBoja(){

        return this.boja;
    }

    set aBoja(b){

        this.boja=b;
    }

    get aImaKrov(){

        return this.imaKrov;
    }

    set aImaKrov(ik){

        this.imaKrov=ik;
    }
}

