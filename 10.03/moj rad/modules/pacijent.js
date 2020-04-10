export class Pacijent{

    constructor(i,v,t){
    
        this.ime=i;
        this.visina=v;
        this.tezina=t;
    }
    
    stampaj(){
    
        let a=this.ime;
        let b=this.visina;
        let c=this.tezina;
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