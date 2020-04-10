//Kreirati klasu Film koja od polja sadrži naslov, reziser i
//godinaIzdanja, kao i metodu stampaj() za prikaz naslova filma.





 export class Film {

    constructor(n,r,god){

        this.naslov=n;
        this.reziser=r;
        this.godinaIzdanja=god;

    }

    stampaj(){
        let naslov=this.naslov;//uzima naslov objekta za koji pozoves metodu stampaj();
        console.log(`Naslov filma je ${naslov}`);
    }


    get aGodIzdanja(){

        return this.godinaIzdanja;
    }

    set aGodIzdanja(god){

        if(god>1800){

            this.godinaIzdanja=god;//ovo god ovde je ovo god iz aGodIzdanja
        }

        else{

            this.godinaIzdanja=1800;
        }
    }

    get aNaslov(){

        return this.naslov;
    }

    set aNaslov (n){

        this.naslov=n;
    }

    get aReziser(){

        return this.reziser;
    }

    set aReziser(r){

        this.reziser=r;
    }
}