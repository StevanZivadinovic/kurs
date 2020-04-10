/*
Napraviti funkciju ranijiDatum koja za dva prosleđena datuma ispisuje raniji
od ta dva datuma. Ukoliko su datumi jednaki onda na ekranu ispisati “Datumi
su jednaki”.*/


import {Datum}from './modules/datum.js';

let dat1=new Datum(3,5,2020);
let dat2=new Datum(3,5,2020);


let ranijiDatum=(dat1,dat2)=>{
if(dat1.godina<dat2.godina){

    console.log(`Prvi datum je raniji`);
}
else if(dat1.godina>dat2.godina){
    console.log(`Drugi datum je raniji`);
}
else if(dat1.mesec<dat2.mesec){

    console.log(`Prvi datum je raniji`);
}
else if(dat1.mesec>dat2.mesec){
    console.log(`Drugi datum je raniji`);
}
else if(dat1.dan<dat2.dan){

    console.log(`Prvi datum je raniji`);
}
else if(dat1.dan>dat2.dan){
    console.log(`Drugi datum je raniji`);
}
else{

    console.log(`Datumi su jedaki`);
}

};
ranijiDatum(dat1,dat2);









