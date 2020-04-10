let s=0;
for(let i=1; i<=3; i++) //ovde je i definisano samo u prvoj for petlji, ne vazi u ovoj narednoj petlji

{

	s+=i;
}
//console.log(i);
for(i=4; i<=6; i++)//ovde je "i" automatski dobilo vrednost var, ali vazi van petlje isto kao da smo van petlje 
	//napisali let i;
{	

	s+=i;
}
console.log(i);
console.log(s);






function f1()
{

	var j=3;//ovo j vazi samo u ovom bloku ako je definisano sa let, a na nivou funkcije onda je definasano sa var
	if(8===8)
	{
		let k=-5;//sad ne ispisuje u konzoli k zato sto je definisano sa let i vazi samo u bloku, sa var
		//bi trebalo da moze. Ako se neka promenljiva definise unutar funkcije ali bez kljucnih reci
		//var ili let onda ona vazi globalno(automatski joj se dodaje var iako nije ispisano, kao da 
		//je definisana sa let ili var, na pocetku, mimo bilo kakve
		//funkcije.Ali ovo ne raditi nego ih uvek eksplicitno uvesti sa let ispred funkcije da bi vazile 
		//globalno.Moze i funkciji definisanje globalnih promenljivih sa var ali obavezno ispisati var.
	}
	//console.log(j,k);

}

function f2(){
var j=1;//ove dve promenljive ovde vaze samo za funkciju f2
var k=3;

console.log(j,k);
}


f1();
f2();


//var-funkcije: promenljiva se uvodi sto je ranije moguce HOISTING se to zove
//let-funkcije:primenjuju se gde su uvedene





//Napraviti funkciju sumiraj koja određuje sumu brojeva od n do m. 
//Brojeve n i m proslediti kao parametre funkciji.



function suma1(n,m)
{

	let s=0;
	 
	for (let i=n; i<=m; i++)
	{
		s+=i;
	}
	
	return s;
	console.log("blabla");
	//nije se pojavilo zato sto je stavljeno posle return-a.
	//return ima dve uloge:
	//1) Vraca rezuktat funkcije
	//2) Prekida tok izvrsenja funkcije
}


let p=suma1 (7,14);
console.log(p);

p=suma1(1,9);
console.log(p);
console.log(suma1(7,14));












function suma(n,m)
{
	if (n>m) //ako je ovo ispunjeno onda se funkcija prekida

	{
		return 0;//funkcija se prekida zbog ovog return, odnosno broj nula se vraca u funkciju koju pozivamo
	}

	let s=0;//ako ovde skolonimo let onda je s globalno definisana i prikazace se u 124. redu preko console.log
	 
	for (let i=n; i<=m; i++)
	{	
		 s +=i;
	}
	console.log(s);//ovde isto dobijes kao u 125. redu!!!!!!!!!!!!!!!!!!!ali je fora da bude bez console.log
	//ovde, nego treba da bude consle.log van funkcije;

	return s;
	console.log("blabla",0);//nije se pojavilo zato sto je stavljeno posle return-a.
	//return ima dve uloge:
	//1) Vraca rezuktat funkcije
	//2) Prekida tok izvrsenja funkcije

}
 po=suma (15,16);//ovde udje vrednost nula ako je n vece od m
console.log(po);//konzola prikaze vrednost nula








//Napraviti funkciju množi koja određuje proizvod brojeva od n do m.
//Brojeve n i m proslediti kao parametre funkciji.

function mnozi(n,m)
{
	p=1;
	let i;
	for(i=n; i<=m; i++)
	{
		p*=i;
		//ako bi ovde stavili return p; onda bi se samo jednom izvrsilo mnozenje, posto return zaustavlja funkciju
	}

return p;
}

let mnozenje=mnozi(2,5);
console.log(mnozenje);




//Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m.
//Brojeve n i m proslediti kao parametre funkciji.



function arsr(n,m)
{

	let zbir=0;
	let broj=0;


	for(let i=n; i<=m; i++){

		zbir+=i;
		broj++;
	}

	return zbir/broj;
	
}


console.log(arsr(1,10));








	/*Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja
	cifra 3 u intervalu od n do m.
	Brojeve n i m proslediti kao parametre funkciji.*/

function sr(n,m)
{

	let zbir=0;
	let broj=0;
	let i;
	

	for( i=n; i<=m; i++){
			if (i%10==3) 
			{
				zbir+=i;
				broj++;
			}
		
	}

	if (broj>0) {//moze i ovaj if da se ubaci, da ne bi doslo do deljenja sa nulom.
	return zbir/broj;
	//ako bi ovde stavio jos jedan return ne bi vredelo nista zato sto ovaj prethodni blokira sve nadalje
	// ako zbir/0=> Infinity, ako 0/0=>NaN
	}
}


console.log(sr(1,10));








//Napraviti funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi
//sa tri u intervalu od n do m.
//Prebrojati koliko ima ovakvih brojeva od n do m.




function deljivSaTri (n,m)

{
	br=0;
	for (let i=n; i<=m; i++)
	{
		if (i%3==0)
		 {
		 	
		 	br++;
		 }

	}
	return br;//mozes i ovde odmah da napises console.log(br); a ispod ne mora da pises console.log, i dobices
	//isto resenje, ali ne mozes to resenje kasnije da korsitis to je jedino problem. Kod ovog konkretnog
	//zadatka moze i ovako i onako.
	}


console.log("Broj brojeva deljiv sa tri" + deljivSaTri(5,14));//pretvorilo se u sting
let rez=deljivSaTri(5,14);
console.log(`Broj brojeva deljiv sa tri ${rez}`);//pretvoreno u string
console.log(deljivSaTri(5,14));







//Napraviti funkciju koja prikazuje sliku za prosledjenu adresu slike.


function slika(putanja)
{
	//return "<img src='"+ putanja+"'alt = 'blabla'>";
	return `<img src='${putanja}' alt='blabla'>`;
}

let elem=document.getElementById('blabla');
console.log(elem.innerHTML);
elem.innerHTML=slika('jabuka.png');
console.log(elem.innerHTML);
elem.innerHTML+=slika('jabuka.png');
//ovde mozes samo umesto jabuka.jpg da upises neku drugu putanju za drugu
//sliku







//Napraviti funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa
//u tu boju.



function paragraf(boja)
{
	return `<p style='color: ${boja}'>Tekst tekst...</p>`
}


elem.innerHTML+= paragraf("red");
elem.innerHTML+= paragraf("blue");






function paragraf2(boja,tekst)
{

	return `<p style=' color: ${boja}'>${tekst}</p>`;
}



elem.innerHTML+=paragraf2("green", "NEKI LEPI LEPI TEKST");
elem.innerHTML+=paragraf2("blue", "NEKI LEPI LEPI TEKST");



//Napraviti funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima
//prosleđenu veličinu fonta.





function paragraf3(velicina, tekst)

{

	return `<p style='font-size: ${velicina}px'>${tekst}</p>`;
}


elem.innerHTML+=paragraf3(24, "NEKI MNOGO LEP TEKST");








//Napraviti funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice
//treba da bude jednaka vrednosti iteratora.



function pisiPetParagrafa()
{
	let res="";//za nadovezivanje stringova, to je kod stringova, kod brojeva koristimo nulu.
	for(let i=1; i<=5; i++)

	{
		let j=i*10;
		res=res+`<span style='font-size:${j}px'>Neki tekst</span>`;//ako hoces u novom redu svaku recenicu onda 
		 //umesto span pises paragraf. Ovde je i trebalo paragraf

	}
	return res
}


elem.innerHTML+=pisiPetParagrafa();



























































