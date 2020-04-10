/*
let pozdrav=document.querySelector('#pozdrav');
pozdrav.addEventListener('click',()=>{

    alert('Hello!!!')

});

let ispisParagraf=document.querySelector('#ispis1');
let ispisPozdrava=document.querySelector('#ispis');
ispisPozdrava.addEventListener('click',()=>{


    ispisParagraf.innerText+=`Pozdrav!!!`;
    console.log('Zdravo Stevane');

});



let brojac=document.querySelector('#brojac');
let divBrojac=document.createElement('div');
document.body.appendChild(divBrojac);
let br=0;
brojac.addEventListener('click',()=>{
    br++;
    divBrojac.innerText=`Vrednost brojaca ${br}`;

});






let klikZaPozdrav=document.querySelector('#Klikni');

let pp=document.querySelector('#ispis2');   

klikZaPozdrav.addEventListener('click',()=>{
let unos1=document.querySelector('#Unos1').value;

    
        pp.innerHTML=`Zdravo ${unos1}`;
    


});




//Napraviti sledeću formu i rezultat računanja ispisati
//u paragrafu ispod nje.


let povrs=document.querySelector('#povrs');
let krug=document.querySelector('#krug');

krug.addEventListener('click',()=>{
let input=document.querySelector('#krug1').value;
let p=input*input*Math.PI;
povrs.innerText=`${p}`;
});
*/


let pozdrav=document.querySelector('#pozdrav');

pozdrav.addEventListener('click',a=>{

        alert('Pozdrav');
});


let btnHello=document.querySelector('#ispis');
let p=document.querySelector('#ispis1');

 btnHello.addEventListener('click',a=>{

    p.innerHTML=`Zdravo!!`;

});


let btnBrojac=document.querySelector('#brojac')
let br=0;
btnBrojac.addEventListener('click',a=>{
    br++;
    p.innerHTML=`Vrednost brojaca je: ${br}`;

});

let br1=0;
let plus=document.querySelector('#plus');
let minus=document.querySelector('#minus');
let span=document.querySelector('#span1');

plus.addEventListener('click',a=>{
    br1++;
    span.innerHTML=br1;

});

minus.addEventListener('click',a=>{
    br1--;
    span.innerHTML=br1;

});




let izracunajKvadrat=document.querySelector('#kvadrat1');
let div1=document.querySelector('#kvadrat2');
izracunajKvadrat.addEventListener('click',e=>{
let inputKvadrat=document.querySelector('#kvadrat').value;//ovaj red mora uvek da bude u bloku, bar je 
//do sad tako bilo. Ne znam sto tako;
    let rez=inputKvadrat**2;
    console.log(rez);
    div1.innerHTML=`Kvadrat unesenog broja je ${rez}`;


});





