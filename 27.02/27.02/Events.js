

let dugmeZdravo=document.getElementById('zdravo');

dugmeZdravo.addEventListener('click',()=>{//prvi parametar odredjuje akciju,
 //ovde konkretno oznacava da nesto treba
//da se desi kad se klikne, drugi parametar je trenutno
 //prazan i zato stavljamo prazne zagrade




	console.log('Zdravo Jelena');
	let zdravoParagraf=document.getElementById('zdravoPara');
	zdravoParagraf.innerHTML+='zdravo!!!!';
}); 


//let zdravoParagraf=document.getElementById('zdravoPara'); 
//  ako ovako ostavimo,van event-a poruka ce se ispisati i ako se \
//dugme ne klikne
//zdravoParagraf.innerHTML='Zdravo!!!!!';






/*Napraviti dugme klikom na koje se u konzoli
ispisuje vrednost brojača br.
Brojač na početku ima vrednost 1, a svaki put
kada se klikne na dugme povećati vrednost
brojača za 1. */

let br=1;

let dugmeBrojac=document.getElementById('brojac');
dugmeBrojac.addEventListener('click',()=>{
	//nikako stavljati ovde brojac, tj uvoditi ga ovde
	br++;
	console.log(br);
	let zdravoParagraf=document.getElementById('zdravoPara');
	zdravoParagraf.innerHTML=`vrednost brojaca je: ${br}`;



});


/*Napraviti dugme + i dugme -.
Kada se klikne na dugme +, na ekranu prikazati
vrednost brojača povećanu za 1.
Kada se klikne na dugme -, na ekranu prikazati
vrednost brojača smanjenu za 1. */



let r=0;//mozemo odmah isisati vrednost ove promenljiove u spanu;
let spanRezultat=document.getElementById('rezultat');
spanRezultat.innerHTML=r;

let dugmePlus=document.getElementById('plus');
dugmePlus.addEventListener('click',()=>{


	r++;
	spanRezultat.innerText=r;


});

let dugmeMinus=document.getElementById('minus');
dugmeMinus.addEventListener('click',()=>{

	r--;

	if (r<0)
	 {

	 	r=0;/*dopuna Dopuniti prethodni zadatak uslovima, tako da se na
ekranu prikazuju samo pozitivni brojevi. Ukoliko je
vrednost manja od nule, na ekranu nastaviti
prikazivanje broja 0. */
	 }
	spanRezultat.innerText=r;//ako stavis += onda je zanimljivije


});



/*Napraviti input polje i dugme.
U input polje treba da se unese ime neke osobe, a
na ekranu u paragrafu da se ispiše Zdravo i ime
osobe preuzeto iz input polja. */


let bp=document.getElementById('buttonPozdrav');
bp.addEventListener('click',()=>{

let vrednost=document.getElementById('Inputpozdrav').value;
let pp=document.getElementById('paragrafPozdrav');
pp.innerText=`zdravo ${vrednost}`;



});




//Napraviti sledeću formu i rezultat računanja ispisati
//u paragrafu ispod nje.



let btnKv=document.querySelector('#buttonKv'); //nismo upotrebilil get elementById 
//samo da bi malo promenili prinicip inace to je ista stvar
let rezRacunanja=document.querySelector('#rez');
btnKv.addEventListener('click',()=>{


let br=document.querySelector('#inputKv').value;
let kv=br*br;
rezRacunanja.innerHTML=`rezultat je:${kv}`;

});



 btnKv=document.querySelector('#buttonPola'); //nismo upotrebilil get elementById 
//samo da bi malo promenili prinicip inace to je ista stvar
 rezRacunanja=document.querySelector('#rez1');
btnKv.addEventListener('click',()=>{


let br=document.querySelector('#inputPola').value;
let pola=br/2;
rezRacunanja.innerHTML=`rezultat je:${pola}`;

});




btnKv=document.querySelector('#buttonKrug'); //nismo upotrebilil get elementById 
//samo da bi malo promenili prinicip inace to je ista stvar
 rezRacunanja=document.querySelector('#rez2');
btnKv.addEventListener('click',()=>{


let br=document.querySelector('#inputKrug').value;
let krug=br*br*Math.PI;
rezRacunanja.innerHTML=`rezultat je:${krug}`;

});


























