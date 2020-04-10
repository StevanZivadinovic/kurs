
//ove dve sledece funkcije se zovu anonimne, zato sto nemaju ime
let suma=function(a,b)
{

return a+b;
}


//ili




 suma=function(a,b)
{

let s= a+b;
return s;
}

console.log(suma(1,4));
console.log(suma(9,4));




//ovu su arrow funkcije, to su zapravo skraceni zapisi anonimnih funkcija, ovih iznad :)
//ove funkcije su razlicite od ovih radjenih prethodnih dana zato sto rade samo u kontekstu 
//bloka u kojima su definisane.(ne znam sta to tacno znaci ali saznacu kad stignemo do tog
//objasnjenja)



let suma2=(a,b)=>

{
	
	return a+b;
}


console.log(suma2(1,9));




//ispisati tekst u konzoli

let hello=()=>
{

	console.log("hello world!");
}

hello();






//ispisati neke vrednosti


let echo=(s1,s2)=>

{


	let s=s1+", "+s2;
	console.log(s);

}
echo(1,5);

echo(1,5);






//3)Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je
//neparan ili netačno ukoliko nije neparan.




let neparan=(n)=>

{

	if (n%2==0) 

	{

		console.log(true);
	}

	else
	{
		console.log(false);
	}
}

neparan(6);






/*4. Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim
napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.*/

//pogledaj zadatke za vezbanje iz oblasti FUNKCIJE!!!!!!!!!!!!!!!!!!!!!!!!, postavljeno je na google drive, imas 
//resenja kod seebe uradjena u fajlu pod nazivom funkcije


let maks2=(a,b)=>

{

if (a>b) 

{

	return a;
}

else{

	return b;
}

}

 
console.log(maks2(1, 5));





let maks4=(a, b, c, d)=>
{console.log("samo da probam da vidim kako se vidi tekst, da sam uneo ovde neku vrednost sa dolarom onda bi u ovom tekstu")
console.log("bio ukuljucen i return, odnosno bili bi povezani, ovako je ovo samo tekst");
    /*let mak1 = maks2(a, b);
    let mak2 = maks2(c, d);
    let mak3 = maks2(mak1, mak2);*/
    //moze i ovako:
    let mak1 = maks2(a, b);
    let mak2 = maks2(mak1,c);
    let mak3 = maks2(mak2,d);

    return mak3;
}




console.log(maks4(1, 5, 7, 4));







//imas niz od 7 broja npr(5,4,8,-3,6,9,0)

//resenje bi bilo

/*let max=max2(5,4); maks je 5;
ax=max2(max,8); maks je 8;
ax=max2(max,-3); maks je 8;
ax=max2(max,6); maks je 8;
ax=max2(max,9); maks je 9;
ax=max2(max,0); maks je 9;*/





//Napraviti funkciju koja prikazuje sliku za prosledjenu adresu slike.


//obicna funkcija
let slike=document.getElementById('bla');
function slika(putanja)

{
return `<img src='${putanja}' alt='bla'>`;

}

slike.innerHTML+=slika("kafa1.png");





//arrow funkcija
let slika2=(putanja)=>

{
return `<img src='${putanja}' alt='bla'>`;

}

slike.innerHTML+=slika2("kafa2.png");








//1) telo arrow funkcije se sastoji samo od return naredbe. 
//Ako zadatak glasi da treba samo da se vrati funkcija mozemo
//da napisemo:
//let sum=(a,b)=>a+b;





//primer:
slike=document.getElementById('bla');
let slika3=(putanja)=>`<img src='${putanja}' alt='bla'>`;

slike.innerHTML+=slika3("jabuka.png");


//2) Arrow funkcija prima jedan parametar

 slike=document.getElementById('bla');
let slika4=putanja=>`<img src='${putanja}' alt='bla'>`;//nema zagrada kod promenljive

slike.innerHTML+=slika4("jabuka.png");




let sledbenik=n=> n+1;
console.log(sledbenik(1));












