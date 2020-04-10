
let div=document.createElement('div');
document.body.appendChild(div);
//div.style.display='none';

let ul=document.createElement('ul');
let li=document.createElement('li');

let Prva=document.querySelector('#prva').value;
console.log(Prva);
let Druga=document.querySelector('#druga').value;
let Treca=document.querySelector('#treca').value;
let Cetvrta=document.querySelector('#cetvrta').value;
let operacije=document.querySelectorAll('.operacija');
let brojevi=document.querySelectorAll('.broj');

let btn1=document.querySelector('#prva');
let btn2=document.querySelector('#druga');
let btn3=document.querySelector('#treca');
let btn4=document.querySelector('#cetvrta');

let rez=0;
let niz=[Prva,Druga,Treca,Cetvrta];




niz.forEach(a=>{

    

op=a;

});
let forma=document.querySelector('form');


 forma=document.querySelector('form');
forma.addEventListener('submit',e=>{

    e.preventDefault();
    
    
 
let ime1=document.querySelector('#text1').value;
let prviBroj=document.querySelector('#text2').value;
let drugiBroj=document.querySelector('#text3').value;
prviBroj=parseInt(prviBroj);
drugiBroj=parseInt(drugiBroj);//prebacivanje stringa u broj. Iz nekog razloga samo
//za plus operaciju mi brojeve sabirao kao stringove pa sam ovo morao da uradim.


if(btn1.checked)

{

     
     rez=prviBroj + drugiBroj;
     console.log(typeof prviBroj);

    div.innerHTML+=`<div style="background-color:red; width:200px; text-align:center; border-bottom:
    2px solid black">${prviBroj} +  ${drugiBroj}= ${rez}<br><br> ${ime1}</div>`;

}

else if(btn2.checked)

{
     
     rez=prviBroj-drugiBroj;
     div.innerHTML+=`<div style="background-color:red; width:200px; text-align:center; border-bottom:
     2px solid black">${prviBroj} -  ${drugiBroj}= ${rez}<br><br> ${ime1}</div>`;

}

else if(btn3.checked)

{    
     rez=prviBroj*drugiBroj;
     div.innerHTML+=`<div style="background-color:red; width:200px; text-align:center; border-bottom:
     2px solid black">${prviBroj} *  ${drugiBroj}= ${rez}<br><br> ${ime1}</div>`;

}

else if(btn4.checked)

{
     rez=prviBroj/drugiBroj;
     
     ul.style.listStyleType='none';
   
     
     //li.style.padding='0px';
     li.innerHTML+=`<p style="background-color:red; width:200px; text-align:center; border-bottom:
     2px solid black; ">${prviBroj} /  ${drugiBroj}= ${rez}<br><br> ${ime1}</p>`;

     ul.appendChild(li);
     div.appendChild(ul);
     
     //div.innerHTML+=`<div style="background-color:red; width:200px; text-align:center; border-bottom:
    // 2px solid black">${prviBroj} /  ${drugiBroj}= ${rez}<br><br> ${ime1}</div>`;

   


}


//div.style.display='block';


//Nakon što je izvršen unos podataka, isprazniti polja za unos
document.querySelector('#text1').value="";
document.querySelector('#text2').value="";
document.querySelector('#text3').value="";

});


//Kada se klikne na gore pomenuti div sa podacima, taj div nestane sa
//stranice.


//div.addEventListener('click',()=>{


//div.innerHTML="";

//});
//});


/*Napraviti validaciju forme, tako da username sme biti sačinjen samo
od malih i velikih slova i dužine između 5 i 25 karaktera.
Ukoliko username ne ispunjava ove uslove, na ekranu prikazati alert
sa porukom obaveštenja, u suprotnom u div-u prikazati rezultat.*/
























//ovo je neki moj pokusaj da brisem pojedinacne rezultate  iz liste, ali ne radi


/*
let list=ul.children;
let lista=Array.from(list);
lista.forEach(a=>{

a.addEventListener('click',e=>{
if(e.target.tagName=='LI'){

     e.target.remove();
}
});
}); */

ul.addEventListener('click',e=>{



     if(e.target.tagName=='LI'){
             
     
         e.target.remove();
     
                 
         
         }
     });