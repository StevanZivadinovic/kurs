import {Racunar} from './modules/racunar.js';
import {Laptop} from './modules/laptop.js';


//(10 poena)
//Napraviti niz od najmanje tri objekta klase Laptop (10 poena)



let lap1=new Laptop('abvg','zelena',150);
let lap2=new Laptop('abvgd','siva',200);
let lap3=new Laptop('abzd','siva',250);

let laptopovi=[lap1,lap2,lap3];
console.log(lap3._masa);




//(15 poena)
//Napisati funkciju (možete koristiti i pomoćne funkcije i/ili metode) koja
//ispisuje konfiguracije svih natprosečno teških laptopova.


let prosek=niz=>{

    let suma=0;
    niz.forEach(a => {
        suma+=a.masa;
    });
    let rez=suma/niz.length;
    return rez;
};
console.log(prosek(laptopovi));



let natprosecno=niz=>{


    let prosek1=prosek(niz);
    
    niz.forEach(a=>{
        if(a.masa>prosek1){
           a.stampajLaptop();
        }

    });
}
natprosecno(laptopovi);



//(15 poena)
//Napisati funkciju koja vraća najčešću boju laptopova. Ukoliko postoje
//više najučestalijih boja, vratiti bilo koju od njih.

let najcesceBoje=niz=>{
    let brSiva=0;
    let brCrna=0;
    let brBela=0;
    niz.forEach(a=>{
        if(a.boja=='siva'){

            brSiva++;
        }
        if(a.boja=='crna'){

            brCrna++;
        }
        if(a.boja=='bela'){

            brBela++;
        }


    });
    console.log(brBela);

    
    let max=brSiva;
    let boja='siva';
    
    
        if(brCrna>max){
            max=brCrna;
            boja="crna";
        }
        if(brBela>max){
            max=brBela;
            boja='bela';
        }

    
    return boja;

};
console.log(najcesceBoje(laptopovi));



//(5 poena)
//Testirati program (napraviti objekte i proveriti da li rade kreirane metode
//i funkcije, ovde ne morate proveravati rad getera i setera)



let lap4=new Laptop('abvg','zelena',300);
let lap5=new Laptop('abvgd','siva',350);
let lap6=new Laptop('abzd','crna',450);
let lapovi=[lap4,lap5,lap6];

lap4.stampajLaptop();
lap5.stampajRacunar();
console.log(prosek(lapovi));
natprosecno(lapovi);
console.log(najcesceBoje(lapovi));

