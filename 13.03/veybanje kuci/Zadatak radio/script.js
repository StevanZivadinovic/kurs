/*


Testirati rad napravljenih metoda. */


import {FMRadio} from './modules/FMradio.js';

let fm1=new FMRadio(90,5);
let fm2=new FMRadio(88,5);
let fm3=new FMRadio(98,5);
let stanice=[fm1,fm2,fm3];
fm1.promeniZvuk('+');
console.log(fm1.ton);
fm2.frekvencijaIskljuci();
console.log(fm2.frekvencija);//ne radi nesto kako treba;



//Napisati funkciju srednjaFrekvencija kojoj se prosleđuje niz radio stanica, a
//ona vraća koja je prosečna frekvencija prosleđenih radio stanica.

let srednjaFrekvencija=niz=>{

    let suma=0;
    niz.forEach(a => {
        suma+=a.frekvencija;
    });
    let b=suma/niz.length;
    return b;
};

console.log(srednjaFrekvencija(stanice));

//Napisati funkciju najbliziMaks kojoj se prosleđuje niz radio stanica, a funkcija
//vraća onu radio stanicu čija je frekvencija najbliža maksimalnoj frekvenciji.

let najbliziMaks=niz=>{

    let najblizi=niz[0];
    let najRas=Math.abs(108-niz[0].frekvencija);
    niz.forEach(a=>{

        if(Math.abs(108-a.frekvencija)<najRas){

            najblizi=a;
            najRas=108-a.frekvencija
        }


    });
    return najblizi;

};
console.log(najbliziMaks(stanice));



