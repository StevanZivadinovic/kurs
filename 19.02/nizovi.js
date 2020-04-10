let cars=["Toyota", "BMW", "Opel"];//pozicije elemenata se numerisu od 0 pa nadalje(0,1,2,3...n-1), i te se pozicije
//nazivaju jos i indeksi.

console.log(cars);
console.log(cars[0]);//pozivas samo prvi element niza, koji je numerisan sa 0. U uglastim zagradama
//moze da stoji bilo koji broj pozicije koji postoji u nizu;

console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);//posto element sa pozicijom 3 ne postoji, u konzoli se ispisuje undefined.

cars[1]="Ford"; //kada hocemo da izmenimo neki element vec postojeceg niza
//navodimo poziciju kojoj uvodimo promenu i pisemo promenu


console.log(cars);





let test=[6.7, "sreda", -9, false];//nema ogranicenja u smislu tipa podatka koji mogu da se unesu u niz
console.log(test);





//petljom mozemo da dopremo do bilo kog elementa iz niza pristupajuci indeksima
// koje ima svaki element
let cars1=["toyota", "opel", "ford"]
for(let i=0; i<cars1.length; i++)

{

	console.log(cars1[i]);
}


//ispis svih elemenata niza
for(let i=0; i<=cars1.length-1; i++)//i=0,1,2

{

console.log(cars1[i]);
}


//ispis svih elemenata u obrnutom redosledu



for(let i=cars1.length-1; i>=0; i--)//i=2,1,0

{

	console.log(cars1[i]);//
}




//Odrediti zbir elemenata celobrojnog niza.



//let niz=[5,-9, 6, -4, -5,5, 9,9,8,0,-2];
let niz=[1,2,3,4,5]
let suma=0;

for(let i=0; i<niz.length; i++)//ne sme kod i<niz.length da stoji i<=, nego
// i<niz.length

{
	suma+=niz[i];
}


console.log(suma);




//Odrediti proizvod elemenata celobrojnog niza.


 niz=[1,2,3,4,5]
 let proizvod=1;

for(let i=0; i<niz.length; i++)//ne sme kod i<niz.length da stoji i<=, nego i<niz.length

{
	proizvod*=niz[i];
}


console.log(proizvod);




	

 niz=[1,2,3,4,5];
  suma=0;
  //ako se desi da je niz prazan let niz=[], onda dole kod let srvr, suma ce biti 0 i niz.length ce biti 0
  //pa odatle sledi da ce da bude 0/0 sto je NaN.

for(let i=0; i<niz.length; i++)//ne sme kod i<niz.length da stoji i<=, nego i<niz.length

{
	suma+=niz[i];
}

let srvr=suma/niz.length;
console.log(srvr);



//druga varijanta

 niz=[1,2,3,4,5];
  suma=0;
  //ako se desi da je niz prazan let niz=[], onda dole kod let srvr, suma ce biti 0 i niz.length ce biti 0
  //pa odatle sledi da ce da bude 0/0 sto je NaN.

for(let i=0; i<niz.length; i++)//ne sme kod i<niz.length da stoji i<=, nego i<niz.length

{
	suma+=niz[i];
}

//let srvr; treba i ovo ovde ali je vec deklarisano pa samo morao da ga zakomentarisem
if (niz.length==0)//ovo je da ne bi doslo do deljenja sa nulom. To se moze desiti ako
	//je niz prazan

 {

 	srvr=0;
 }

 else
 {

 	srvr=suma/niz.length;
 }
console.log(srvr);




//Odrediti maksimalnu vrednost u celobrojnom nizu.




 niz=[5,-9,6,-4,-5,5,9,9,8,0,-2];


let max=niz[0];//prvi element je proglasen za maksimum, pa i u for petlji polazi od jedinice tj od drugog elemnta niza.
//ovde bi bila greska napisati let max=0;, posto ima negativnih brojeva u nizu
for(let i=1; i<niz.length; i++)

{


	if (niz[i]>max)

	 {

	 	max=niz[i];
	 }
}

console.log(max);




//Odrediti minimalnu vrednost u celobrojnom nizu.

let min=niz[0];//prvi element niza proglasen za minimalni



for(let i=1; i<niz.length; i++)

{


	if (niz[i]<min) 

	{

		min=niz[i];
	}

	
}

console.log(min);





//napisati arrow funkciju koja vraca minimalni element niza


niz=[5,-9,6,-4,-5,5,9,9,8,0,-2];

let minArrow=niz=>
{


	let min =niz[0];
	for(let i=1; i<niz.length; i++)

	{

		if (niz[i]<min)

		 {

		 	min=niz[i];
		 }
	}

	return min; //tek ovde moze da ide return
}


console.log(minArrow(niz));
console.log(minArrow([1,-9, 3, 8,11,44,-6]));

let niz1=[1,5,20];
console.log(minArrow(niz1));





//Odrediti indeks maksimalnog elementa celobrojnog
//niza.(odnosno treba da izadje najveci element se nalazi na toj i toj poziciji)



let maxIndex=niz=>

{

	let max=niz[0];//vrednost maksimalnog elementa niza
	let indeks=0;//indeks maksimalnog elementa niza


	for(let i=1; i<niz.length; i++)

	{

		if (niz[i]>max) 
		{


			max=niz[i];
			indeks=i;
		}

	}
	return indeks;
}

console.log(maxIndex(niz));


let niz2=[1,5,10,15];
console.log(maxIndex(niz2));






//Odrediti broj elemenata celobrojnog niza koji su
//veći od srednje vrednosti.

//ovde prvo moramo da odredimo srednju vrednost niza pa tek onda da vidimo broj eleemenata vecih od te vrednosti;
//sustina je da moramo da napravimo dve pretlje u funkciji, ne moze jednom petljom




let brojSrVr=niz=>

{let broj=0;
	let suma=0;
	let srvr;
	for(let i=0; i<niz.length; i++)

	{


		suma+=niz[i];

		
		 
	}
	srvr=suma/niz.length;

	for(let i=0; i<niz.length; i++)

	{


		if (niz[i]>srvr)

		 {

		 	broj++;
		 }
	}
return broj;

}

console.log(brojSrVr(niz2));




//2. nacin za prethodni zadatak



let arSr=niz=>
{let suma=0;
for(let i=0; i<niz.length; i++)

	{


		suma+=niz[i];

		
		 
	}
	return suma/niz.length;

}


 brojSrVr=niz=>

{	 srvr=arSr(niz);
	let broj=0;
	
	
	

	for(let i=0; i<niz.length; i++)

	{


		if (niz[i]>srvr)

		 {

		 	broj++;
		 }
	}
return broj;

}

console.log(brojSrVr(niz2));



//izracnati zbir pozitivnih elemenata celobrojnog niza




let zbirPoz=niz=>

{

	let suma=0;

	for(let i=0; i<niz.length; i++)

	{
		if (niz[i]>0) 

		{

			suma+=niz[i];
		}

	}
return suma;
}


console.log(zbirPoz(niz));


//izracunati zbbir parnih brojeva u celobrojnom nizu



let brPar=niz=>

{

	let broj=0;

	for(let i=0; i<niz.length; i++)

	{
		if (niz[i]%2==0) //u parne brojeve spada i nula i spadaju negativni brojevi deljivi sa dva: -2, -4, -6 itd

		{

			broj++;
		}

	}
return broj;
}


console.log(brPar(niz));


//odrediti broj parnih elemenata sa neparnim indeksima

let brParNepInd=niz=>

{

	let broj=0;

	for(let i=0; i<niz.length; i++)

	{
		if (niz[i]%2==0 && i%2!=0) //u parne brojeve spada i nula i spadaju negativni brojevi deljivi sa dva: -2, -4, -6 itd

		{

			broj++;
		}

	}
return broj;
}


console.log(brParNepInd(niz));




//Promeniti znak svakom elementu celobrojnog niza


let promeniZnak=niz=>

{

	for(let i=0; i<niz.length; i++)

	{

		niz[i]*=-1;


	}
//ovde ne treba return zato sto bas menjamo sami uneseni niz, ne dobijamo neke nove vrednsti kao inace

}
promeniZnak(niz);//ne radi!!!!!!!!!!!!!!!!!!
console.log(niz);








//formirati ul listu 


let lista=niz=>
{
//elementi niza su stringovi
let result="";//neutral za konkatenaciju stringova je prazan string, valjda ga uvek koristis kao npr suma=0;
result+="<ul>";
for(let i=0; i<niz.length; i++)

{


	result+=`<li>${niz[i]}</li>`
}

result+="</ul>";
return result;
}



let div=document.getElementById('blabla');
div.innerHTML=lista(["jaja", "melko", "jogurt"]);






















































































































