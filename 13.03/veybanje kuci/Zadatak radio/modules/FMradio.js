/*Kreirati klasu FMRadio koja sadrđi atribute o stanici, frekvenciji i jačini tona.

Klasa treba da sedrži odgovarajući konstruktor, getere i setere koji
zadovoljavaju uslov da se frekvencija nalazi u opsegu od 87.5MHz do
108MHz. Jačina zvuka treba da se nalazi u opsegu od 0 do 20.
Napraviti metodu promeniZvuk kojoj se prosleđuje simbol plus ili minus i koja
po pozivu jačinu zvuka menja isključivo za 1 stupanj. Ukoliko je prosleđen
simbol + povećati jačinu zvuka za 1, u suprotnom smanjiti jačinu zvuka za 1.

Voditi računa o tome da jačina zvuka ne sme biti manja od 0 i veća od 20
(Ova metoda ništa ne vraća, samo promeni vrednost zvuka).

Napraviti metodu frekvencijaIskljuci koja vrednost funkcije postavlja na
najmanju moguću frekvenciju (na 87.5MHz).
(I ova metoda takođe ništa ne vraća, samo postavi vrednost frekvencije)*/


export class FMRadio{

    constructor(f,t){
        this.frekvencija=f;
        this.ton=t;
    }

    set frekvencija(f){
        if(f<=87.5){
          this._frekvencija=87.5;  
        }
        
        else if(f>87.5 && f <= 108){
            this._frekvencija=f;
        }
        else{
            this._frekvencija=108;
        }
    }
    
    set ton(t){
        if(t<0){

            this._ton=0;
        }
        if(t>0 && t<20){
            this._ton=t;
        }
        if(t>20){
            this._ton=20;
        }
        
    }
    get frekvencija(){
        return this._frekvencija;
    }
    get ton(){
        return this._ton;
    }
    promeniZvuk(znak){
        
        if(znak=='+'){

            this.ton++;
        }
        if(znak=='-'){
            this.ton--;
        }
        

    }

    frekvencijaIskljuci(){

            this.frekvencija=87.5;
            
        }
}