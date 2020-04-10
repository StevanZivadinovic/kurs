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





//petljom mozemo da dopremo do bilo kog elementa iz niza pristupajuci indeksima koje ima svaki element
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

	console.log(cars1[i]);//ne radi!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}




//Odrediti zbir elemenata celobrojnog niza.



//let niz=[5,-9, 6, -4, -5,5, 9,9,8,0,-2];
let niz=[1,2,3,4,5]
let suma=0;

for(let i=0; i<niz.length; i++)//ne sme kod i<niz.length da stoji i<=, nego i<niz.length

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




//Odrediti srednju vrednost elemenata celobrojnog niza.

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
if (niz.length==0)

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

niz=[5,-9,6,-4,-5,5,9,9,8,0,-2];

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
niz=[5,-9,6,-4,-5,5,9,9,8,0,-2];
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
promeniZnak(niz);//radi, ali nece u jednom redu kad stavis, mora ovako ova dva 
//zadnja reda pitaj o cemu se radi
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


//ovo nadalje je radjeno 20.02.2020.



//Dat je niz imena košarkaškog tima. Prolaskom kroz niz
//formirati tabelu u čijim su redovima imena tima, i tabelu
//ispisati u html dokument.



let nizTimova=['tim A', 'tim B', 'tim C'];

let tabela_js="<table>";/* 
<tabele>

<tr><td>tim A</td></tr>
<tr><td>tim B</td></tr>
<tr><td>tim C</td></tr>

</table>*/
//tabela u razlicitom redu
for(i=0; i<nizTimova.length; i++)

{

	tabela_js+=`<tr><td>${nizTimova[i]}</td></tr>`// ovo znaci(+=): na postojeci tag <table> dodaj !
}

tabela_js+="</table>"


let divTabela=document.getElementById('tabela');
divTabela.innerHTML=tabela_js;//ako ovde stavis umesto tabela_js naziv niza, ovde
//se niz zove "nizTimova", dobices tabelu u jednom redu, ne znam zasto, ali radi :)


//tabela u istom redu
/*<tabele>

<tr>
<td>tim A</td>
<td>tim B</td>
<td>tim C</td>
</tr>

</table>*/



 nizTimova=['tim A', 'tim B', 'tim C'];

 let tabela="<table><tr>";
for(i=0; i<nizTimova.length; i++)

{

	tabela+=`<td>${nizTimova[i]}</td>`// ovo znaci(+=): na postojeci tag <table> dodaj !
}

tabela+="</table></tr>"


let divTabela1=document.getElementById('tabela');
divTabela1.innerHTML+=tabela;





/*Dat je niz stringova čiji su članovi putanje do slika.
Prikazati sve sliku u html dokumentu sa putanjama
navedenim u nizu.*/


let nizSlika=['kafa.png', 'kafa2.png', 'kafa3.png'];
let slike="";//ovde moze i bez ovoga, a moze i s ovim s tim sto moras da primenis ovaj princip iz pretodnog zadatka

divTabela1=document.getElementById('slike');

for(let i=0; i<nizSlika.length; i++)

{

divTabela1.innerHTML+=`<img src=${nizSlika[i]}><br>`

}







//Stringovi i njihovi metodi



let str="Zdravo Svete!";//svaki od karaktera(slova, razmaci) jesu pozicije unutar samog stringa

//duzina stringa

console.log(str.length);//duzina stringa

//da li string sadrzi neko slovo(karakter)?-includes

console.log(str.includes('v'));//da li string sadrzi slovo v;


if(str.includes('o'))//osetljiv je na velika slova, odnosno razlikuje velika i mala slova
	{
		console.log('string sarzi slovo o');

	}

else
{
	console.log('string ne sadrzi slovo o')
}


//ispitati da li je odredjeni karakter bas na nekoj odredjenoj poziciji?



console.log(str.includes('Z',0))//da li je veliko slovo z na prvoj (0 je oznaka za prvu poziciju u nizovima)  pozziciji;


//index unetog slova-indexOf

console.log(str.indexOf('e'));//indeks slova e

//poslednji indeks unetog slova-lastIndexOf


console.log(str.lastIndexOf('e'));



//Prvo slovo reci-startWidth
console.log(str.startsWith('Z'));

//Poslednje slovo reci-endsWith

console.log(str.endsWith("?"));

//slice-odakle poceti podstring(od koje pozicije poceti) , gde zavrsiti podstring(do koje pozicije)

console.log(str.slice(0,5))

//substr-odakle poceti podstring(od koje pozicije poceti, koliko elemenata od te pozicije na dalje uzeti
console.log(str.substr(2,4));


//replace

console.log(str.replace('e','w')); //prvo unosis slovo koje se zamenjuje pa onda slovo kojim se zamenjuje





//Ispisati dužinu svakog elementa u nizu stringova.


let niz11=['Tim A', 'Tim BB', 'Tim CC'];

for(let i=0; i<niz11.length; i++)
{

	let duzinareci=niz11[i].length;
	console.log(duzinareci);
	//console.log(niz.Timova[i].length)
}




//Odrediti element u nizu stringova sa najvećom dužinom.




let maks=niz11[0].length;
for(let i=0; i<niz11.length; i++)


{


	if (maks<niz11[i].length) 
	{

		maks=niz11[i].length;
		//ovde bi bilo greska kucati console.log
	}
	//i ovde bi bilo greska kucati console.log
}

console.log(maks);



//preko funkcije

let niz12=['Tim A', 'Tim BB', 'Tim CCC']

let najduzarec=niz12=>
{
let maks=niz12[0].length;
for(let i=0; i<niz12.length; i++)


{


	if (maks<niz12[i].length) 
	{

		maks=niz12[i].length;
		//ovde bi bilo greska kucati console.log
	}

	//i ovde bi bilo greska kucati console.log
}

	return maks;

}
console.log(najduzarec(niz12));






//u prethodnom primeru smo samo nasli duzinu najduze reci, sad hocemo da i vidimo koja je to rec



 niz12=['Tim A', 'Tim BB', 'Tim CCC']

 najduzarec=niz12=>
{
	let maksRec=niz12[0];
let maks=niz12[0].length;
for(let i=0; i<niz12.length; i++)


{


	if (maks<niz12[i].length) 
	{

		maks=niz12[i].length;
		maksRec=niz12[i];
		//ovde bi bilo greska kucati console.log
	}
	//i ovde bi bilo greska kucati console.log
}


	return maksRec;

}
console.log(najduzarec(niz12));





//prosecan broj slova u nizu reci//ovde prvo moramo da saberemo sva slova elemenata niza a onda da ih podelimo brojem 
//elemenata niza



let s=0;
for(let i=0; i<niz12.length; i++)

{


	s+=niz12[i].length;

}
let arsr=s/niz12.length;


//ako hocemo preko funkcije
let prosekSlova=niz=>

{
let s=0;
for(let i=0; i<niz.length; i++)

{


	s+=niz[i].length;

}
let arsr=s/niz.length;

return arsr
}

console.log(prosekSlova(niz12));





//ispisati natprosecno dugacke reci



let natprosecnoDugackeReci=niz=>

{

	let ar=prosekSlova(niz);//za prosledjeni niz da odredi prosek slova. Funkciju prosekSlova smo preuzeli posto je vec
	//definisana
	for(let i=0; i<niz.length; i++)
	{


		if(ar<niz[i].length)

		{

			console.log(niz[i]);
		}
	}


}

natprosecnoDugackeReci(niz12);




//Odrediti broj elemenata u nizu stringova čija je dužina
//veća od prosečne dužine svih stringova u nizu.


let  brojNatprosecnoDugackeReci=niz=>

{

	let ar=prosekSlova(niz);//za prosledjeni niz da odredi prosek slova. Funkciju prosekSlova smo preuzeli posto je vec
	//definisana\
	let br=0;
	for(let i=0; i<niz.length; i++)
	{


		if(ar<niz[i].length)

		{

			br++;
		}
	}


return br;


}


console.log(brojNatprosecnoDugackeReci(niz12));






//Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’.

let niz13=['aa', 'bb', 'cc'];
let brojElemenataSaKarakterom=(niz,slovo)=>

{

let br=0;
for(let i=0; i<niz.length; i++)

{

	if (niz[i].includes(slovo)) 

	{

		br++;
	}
}

return br;
}


console.log(brojElemenataSaKarakterom(niz13,"b"));




//odrediti broj elemenata u nizu stringova koji pocinju na slovo 'a';



let niz08=['aaa', 'abb','aaa']
let sadrzea=niz=>

{
	let br=0;
	for(let i=0; i<niz.length; i++)

	{
		if (niz[i].startsWith('a')) 

		{

			br++;
		}

	}

return br;
}

console.log(sadrzea(niz08));







//24. zadatak iz nizova
/*//Dati su nizovi:
/*a[0],a[1],...,a[n-1] i
b[0],b[1],...,b[n-1].
Formirati niz c[0],c[1],..,c[2n-1] ciji su elementi
a[0],b[0],a[1],b[1],...,a[n-1],b[n-1].*/


let a=[2,5,7];//jednake su duzine pa mozemo dakoristimo samo jednu for petlju, za ovaj zadatak moramo da imamo
//nizove jednake duzine, inace ne moze da se uradi;
let b=[-7,-5,-9];
let c=[];//ovo moramo odmah da uvedemo, prazan niz, da bi imao gde da uvedem elemente

for(let i=0; i<a.length; i++)
{
	c.push(a[i]);//nizu c dodajemo i-ti element niza a;
	c.push(b[i]);//nizu c dodajemo i-ti element niza b;
}

console.log(c);//da proverimo samo izgled novog niza c;

console.log(c.pop());//izbacili smo jedan element niza
c.pop();//ovde smo izbacili jos jedan elment c niza
console.log(c);

//push - dodajemo na kraju niza jedan element
//pop-izbacuje zadnji element niza



//25. zadatak iz nizova




let proizvodElemenata=(a,b)=>
{

	let c=[];
	for(let i=0; i<b.length; i++)
	{
		c.push(a[i]*b[i]);//svaki put na niz doda prozivod brojeva a i b;

	}

return c;
}
console.log(proizvodElemenata(a,b));



//26. zadatak

//niz b ima duplo manje brojeva od a niza



a=[2,4,6,8,10,12];//ovde, ako znam indeks prvog broja znam i indeks poslednjeg, ako znam indeks drugog znam 
// i indeks pretposlednjeg itd. Sve su to parovi, povezani su;
b=[]; //na pocetku b je prazan;

let n=a.length/2;//uvek ce biti ceo broj zato sto zadatak zahteva da a niz ima paran broj elemenata

for(let i=0; i<n; i++)

{
	console.log(a[i]);
	let i_pom= (a.length-1) - i;
	console.log(i_pom);
	b.push((a[i]+a[i_pom])/2);


}

console.log(b);














































