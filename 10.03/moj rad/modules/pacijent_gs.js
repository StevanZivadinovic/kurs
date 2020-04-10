export class Pacijent{

    constructor(i,v,t){
    
        /*this.ime=i;
        this.visina=v;
        this.tezina=t;*/
        //menjamo ovo da prilagodimo seteru
        this.pIme=i; // seter
        this.pVisina=v;
        this.pTezina=t;
    }

    get pIme(){

        return this.ime;
    }

    set pIme(i){

        this.ime=i;
    }

    get pVisina(){

        return this.visina;
    }

    set pVisina(v){

        if(v<0)
        {

            this.visina=0;
        }

        else if(v<=2.5){

            this.visina=v;
        
        }

        else{

            this.visina=2.5;
        }
    }

    get pTezina(){

        return this.tezina;
    }

    set pTezina(t){

        if(t<0)
        {

            this.tezina=0;
        }

        else if(t<=550){

            this.tezina=t;
        }

        else{

            this.tezina=550;
        }
    }



    
    stampaj(){
    
        let a=this.pIme; //geter
        let b=this.pVisina;
        let c=this.pTezina;
        console.log(`Visina je pacijenta ${a} je ${b}, a tezina je ${c} `);//umesto a si mogo this.ime odmah da uneses, 
        //vazi isto i za b i c;
    
    
            }
    Bmi(){
            let b=this.visina;
            let c=this.tezina;
            let rez=c/(b**2);
    
                return rez;
        }      
        
    Kritican(){
    
        if(this.Bmi()<15 || this.Bmi()>40)//polja se navode bez zagrada a funkcije sa zagradama, kao ovde Bmi();
        {
            return true;
    
        }
    
        else{
    
            return false;
        }
    }
    
    }