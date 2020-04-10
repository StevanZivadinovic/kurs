

 

import {Krug} from './modules/krug.js';

let k1=new Krug(2);
let k2=new Krug(8);
let k3=new Krug(7);


let krugovi=[k1,k2,k3];
//Napraviti funkciju upisaniKrug kojoj se prosleđuju dva objekta tipa krug, a
//ona vraća true ukoliko je u prvi prosleđeni krug moguće upisati drugi
//prosleđeni krug. U suprotnom funkcija vraća false.

let upisaniKrug=(obj1,obj2)=>{

    if(obj1.poluprecnik>obj2.poluprecnik){

        return true;
    }
    else{
        return false;
    }

};

//Napisati funkciju rastuci koja vraća true ukoliko se svaki krug može upisati u
//svog sledbenika. Ukoliko ma jedan krug ne može da se upiše u sledeći krug,
//vratiti false.

let rastuci=niz=>{

    for(let i=0; i<niz.length-1; i++){
        if(niz[i].polupecnik<niz[i+1].poluprecnik)
        {
    
    
        
            
        }
        
        if(niz[i].poluprecnik >= niz[i+1].poluprecnik)
        {
    
            return false;
        
        
        } 
           
        
    
    }
    return true; 
    };
    console.log(rastuci(krugovi));
























