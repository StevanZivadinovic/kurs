
let div=document.createElement('div');
document.body.appendChild(div);
div.style.display='none';

let operacije=document.querySelectorAll('.operacija');
let brojevi=document.querySelectorAll('.broj');
let ime=document.querySelector('#text1');

let btn1=document.querySelector('#prva');
let btn2=document.querySelector('#druga');
console.log( typeof btn2);
let btn3=document.querySelector('#treca');
let btn4=document.querySelector('#cetvrta');

let rez;

let forma=document.querySelector('form');

let patern=/^[a-zA-z]{5,25}$/;
forma.addEventListener('submit',e=>{//ovaj i prehodni red su isti i za deo zdatka gde se podesava racunanje
     //i na deo zadatka sa validacijom. Odnosno, kad klines na submit, vrsi se racunanje i vrsi se validacija.

    e.preventDefault();

    if (patern.test(ime.value))

	 {

     


let ime=document.querySelector('#text1').value;
let prviBroj=document.querySelector('#text2').value;
console.log(prviBroj);
let drugiBroj=document.querySelector('#text3').value;
prviBroj=parseInt(prviBroj);//ovo prebacivanje je moralo da se odradi da bi brojeve racunar poznao kao brojeve
//a ne kao text. Jeste preuzeta vrednost promenljive ali da bi je prepoznao kao broj mora da se uradi parseInt     
drugiBroj=parseInt(drugiBroj);

if(btn1.checked)

{
    rez=prviBroj+drugiBroj;
    div.innerHTML=`<div>${prviBroj} + ${drugiBroj}= ${rez}<br><br> ${ime}</div>`;

}

 if(btn2.checked)

{
     rez=prviBroj-drugiBroj;
     div.innerHTML=`<div>${prviBroj} - ${drugiBroj}= ${rez}<br><br> ${ime}</div>`;

}

 if(btn3.checked)

{
     rez=prviBroj*drugiBroj;
     div.innerHTML=`<div>${prviBroj} * ${drugiBroj}= ${rez}<br><br> ${ime}</div>`;

}

 if(btn4.checked)

{
     rez=prviBroj/drugiBroj;
     div.innerHTML=`<div>${prviBroj} / ${drugiBroj}= ${rez}<br><br> ${ime}</div>`;

}



div.style.display='block';

//Nakon što je izvršen unos podataka, isprazniti polja za unos



document.querySelector('#text1').value="";
document.querySelector('#text2').value="";
document.querySelector('#text3').value="";



      }
//Kada se klikne na gore pomenuti div sa podacima, taj div nestane sa
//stranice.
else


	 {
	 	alert(`nije ispravan unos`);
	 }


div.addEventListener('click',()=>{


div.style.display="none";


});
});


/*Napraviti validaciju forme, tako da username sme biti sačinjen samo
od malih i velikih slova i dužine između 5 i 25 karaktera.
Ukoliko username ne ispunjava ove uslove, na ekranu prikazati alert
sa porukom obaveštenja, u suprotnom u div-u prikazati rezultat.*/


//let patern=/^[a-zA-z]{5,25}$/;
/*

forma.addEventListener('submit',e=>{//ovde umesto e moze i prazne zagrade. umesto inputUsername moglo
	//je da se pise form.username, ovo vazi samo za id-jeve.!!!!!!!!!!mnogo dobra caka

	if (patern.test(ime.value))

	 {
	 	console.log(":)");
	 }

	 else


	 {
	 	alert(`nije ispravan unos`);
	 }


}); */
