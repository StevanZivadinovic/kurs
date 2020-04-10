//ispisati tekst u konzoli



let hello=()=>

{

	console.log("Hello world");
}


hello();




//ispisati neke vrednosti



let ispis=(s1,s2)=>

{


	let sum=s1+","+s2;
	console.log(sum);
}

ispis(1,5);//ako bi i ovde stavio console.log ne bi radilo





//3)Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je
//neparan ili netačno ukoliko nije neparan.



let neparan=(n)=>

{
if (n%2==0) 

{

	console.log(true);
}

else{

	console.log(false)
}




}

neparan(6);



/*4. Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim
napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.*/


maks2=(n,m)=>

{
	let max;
	if (n>m) {

		return n;
	}

	else{
		return m;
	}
}

console.log(maks2(1,5));



maks4=(n,m,j,k)=>

{

	let mak1=maks2(n,m);
	let mak2=maks2(j,k);
	let mak3=maks2(mak1,mak2);
	return mak3;
}

console.log(maks4(1,5,8,3));




//Napraviti funkciju koja prikazuje sliku za prosledjenu adresu slike.

//obicna funkcija
let div=document.getElementById('qa');
function slika1(putanja)

{



return `<img src=${putanja}>`


}

div.innerHTML+=slika1("kafa2.png");
console.log(div.innerHTML);



//arrow funkcija

 div=document.getElementById('qa');
 slika1=(putanja)=>

{



return `<img src=${putanja}>`


}

div.innerHTML+=slika1("kafa.png");
console.log(div.innerHTML);





//1) telo arrow funkcije se sastoji samo od return naredbe. 
//Ako zadatak glasi da treba samo da se vrati funkcija mozemo
//da napisemo:
//let sum=(a,b)=>a+b;





//primer:
slike=document.getElementById('qa');
let slika3=(putanja)=>`<img src='${putanja}' alt='bla'>`;

slike.innerHTML+=slika3("jabuka.png");


//2) Arrow funkcija prima jedan parametar

 slike=document.getElementById('qa'); let slika4=putanja=>`<img
src='${putanja}' alt='bla'>`;//nema zagrada kod promenljive

slike.innerHTML+=slika4("jabuka.png");




let sledbenik=n=> n+1;
console.log(sledbenik(1));






//nizovi!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let niz=["ne","mogu","da verujem"];
console.log(niz);


console.log(niz[1]);

niz[1]="zelim";
console.log(niz);






//ispis elemenata niza

niz=["ne","mogu","da verujem"];

for(i=0; i<niz.length; i++)

{

console.log(niz[i]);	
}

// moze i ovakav ispis sa izmenjenom pertljom


niz=["ne","mogu","da verujem"];

for(i=0; i<=niz.length-1; i++)

{

console.log(niz[i]);	
}



//ispis svih elemenata u obrnutom redosledu



niz=["ne","mogu","da verujem"];

for(i=niz.length-1; i>=0; i--)

{

console.log(niz[i]);	
}



//Odrediti zbir elemenata celobrojnog niza.


let niz1=[1,5,-7,10,-3,2];
	  	
	  	let s=0;
	for(i=0; i<niz1.length; i++)

	{


		s+=niz1[i];
	}

console.log(s);


//Odrediti proizvod elemenata celobrojnog niza.


let niz2=[1,5,-7,10,-3,-2];
	  	
	  	let p=1;
	for(i=0; i<niz1.length; i++)

	{


		p*=niz2[i];
	}

console.log(p);


//Odrediti srednju vrednost elemenata celobrojnog niza.


 niz1=[1,5,-7,10,-3,2];
	  	
	  	 s=0;
	for(i=0; i<niz1.length; i++)

	{


		s+=niz1[i];
	}

console.log(s/niz1.length);





//Odrediti maksimalnu vrednost u celobrojnom nizu.




 niz=[5,-9,6,-4,-5,5,9,9,8,15,-2];


let max=niz[0];


for(i=1; i<niz.length; i++)

{


	if (max<niz[i])

	 {
	 	max=niz[i];


	 }
}

console.log(max);



//Odrediti minimalnu vrednost u celobrojnom nizu.


niz=[5,-9,6,-4,-5,5,9,9,17,15,16];


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

let niz01=[-5,9,9,-17,15,16];


let minimalniEl=niz=>
{

let min=niz[0];//prvi element niza proglasen za minimalni



for(let i=1; i<niz.length; i++)

{


	if (niz[i]<min) 

	{

		min=niz[i];
	}

	
}

return min;
}

console.log(minimalniEl(niz01));








//Odrediti indeks maksimalnog elementa celobrojnog
//niza.(odnosno treba da izadje najveci element se nalazi na toj i toj poziciji)
//DOMACI/////////////////////////////////////////////////////////////////////////////
niz02=[-5,9,9,-17,15,16];
let max1=niz=>
{
	let max=niz[0];
	let indx=0;

	for(i=0; i<niz.length; i++)

	{

		if (max<niz[i]) 
		{

			max=niz[i];
			indx=i;
		}
	}

return indx;
}

console.log(max1(niz02));

console.log(niz02.length);






//Odrediti broj elemenata celobrojnog niza koji su
//veći od srednje vrednosti.

//ovde prvo moramo da odredimo srednju vrednost niza pa tek onda da vidimo broj 
//eleemenata vecih od te vrednosti;
//sustina je da moramo da napravimo dve pretlje u funkciji, ne moze jednom petljom

let niz03=[1,5,8,11,-13, 5];

let srVr=niz=>
{
	let s=0;
	let srvr;
	let br=0;
	for(i=0; i<niz.length; i++)
	{

		s+=niz[i];
	}

	srvr=s/niz.length;



	for(i=0; i<niz.length; i++)

	{

		if (niz[i]>srvr)
		{
			br++;
		}
	}
	console.log(br, srvr)
return br;
}


console.log(srVr(niz03));






//izracnati zbir pozitivnih elemenata celobrojnog niza



let niz04=[1,4,-7,14,4];

let poz=niz=>
{
	let suma=0;

	for(let i=0; i<niz.length; i++)

	{


		if (niz[i]>=0) 

		{

			suma+=niz[i];
		}
	}
	return suma;
}
console.log(poz(niz04));



//izracunati zbbir parnih brojeva u celobrojnom nizu



let niz05=[1,4,7,3,-2,-16];


let parni=niz=>
{
	let sum=0;

	for(let i=0; i<niz.length; i++)

	{
		if (niz[i]%2==0)

		 {

		 	sum+=niz[i];
		 }
	}
	return sum;
}

console.log(parni(niz05));




//odrediti broj parnih elemenata sa neparnim indeksima

let niz06=[2,4,6,-6,3,7];

let parniNep=niz=>
{


	let br=0;
	for(let i=0; i<niz.length; i++)

	{

		if (niz[i]%2==0 && i%2!=0)

		 {

		 	br++;
		 }
	}
	return br;
}

console.log(parniNep(niz06));



////Promeniti znak svakom elementu celobrojnog niza
niz06=[2,4,6];





let promenaZnaka=niz=>
{
	for(let i=0; i<niz.length; i++)

	{

		niz[i]*=(-1);
	}


}

promenaZnaka(niz06)
console.log(niz06);




//ormirati ul listu 


niz06=[2,4,6];
 div=document.getElementById('qa');
let lista=niz=>
{

	let listic='<ul>';
	for(i=0; i<niz.length; i++)
	{

		listic+=`<li>${niz[i]}</li>`
	}

		listic+=`</ul>`
		return listic;
}

div.innerHTML+=lista(niz06);
console.log(div.innerHTML);//ne treba posto lista treba da prikaze na ekranu a ne u konzoli




//Dat je niz imena košarkaškog tima. Prolaskom kroz niz
//formirati tabelu u čijim su redovima imena tima, i tabelu
//ispisati u html dokument.



//tabela sa vise redova
let kosarkaskiTim=['tim A', 'tim BB', 'tim CCC'];
let tabela=document.getElementById('qb');
let dodatak=`<table>`;
for(let i=0; i<kosarkaskiTim.length; i++)

{
	dodatak+=`<tr><td>${kosarkaskiTim[i]}</td></tr>`;

}

dodatak+=`</table>`;

tabela.innerHTML+=dodatak;//ako ovde stavis umesto "dodatak" naziv niza, ovde
//se niz zove "kosarkaskiTim", dobices tabelu u jednom redu, ne znam zasto, ali radi :)
//mozes da uradis i na ovaj nacin ispod



//tabela u jednom redu

 kosarkaskiTim=['tim A', 'tim BB', 'tim CCC'];
 tabela=document.getElementById('qb');
 dodatak=`<table><tr>`;
for(let i=0; i<kosarkaskiTim.length; i++)

{
	dodatak+=`<td>${kosarkaskiTim[i]}</td>`;

}

dodatak+=`</tr></table>`;

tabela.innerHTML+=dodatak;



/*Dat je niz stringova čiji su članovi putanje do slika.
Prikazati sve sliku u html dokumentu sa putanjama
navedenim u nizu.*/


let nizSlika=['kafa.png', 'kafa2.png', 'kafa3.png'];

let slike1=document.getElementById('slike');

for(let i=0; i<nizSlika.length; i++)
{

	slike1.innerHTML+=`<img src="${nizSlika[i]}">`

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


	 niz11=['Tim A', 'Tim BB', 'Tim CCC'];
let s1="";
for(let i=0; i<niz11.length; i++)
{

	s1+=" "+niz11[i].length + "";
}
console.log(s1);




//Odrediti element u nizu stringova sa najvećom dužinom.


let niz12=["neko", "zapravow", "niko"];



max=niz12[0].length;
for(let i=0; i<niz12.length; i++)

{

	if (max<niz12[i].length) 

	{

		max=niz12[i].length;
	}
}

console.log(max);




//isti zadatak preko funkcije



 niz12=["neko", "zapravow2111", "niko"];

let najduzaRec=niz=>{

max=niz[0].length;
for(let i=0; i<niz.length; i++)

{

	if (max<niz[i].length) 

	{

		max=niz[i].length;
	}
}
return max;
}
console.log(najduzaRec(niz12));





//sad treba naci pored najduze reci i koja je to rec


niz12=["neko", "zapravow2111", "niko"];

 najduzaRec=niz=>{

max=niz[0].length;
let max1=niz[0];

for(let i=0; i<niz.length; i++)

{

	if (max<niz[i].length) 

	{

		max=niz[i].length;
		max1=niz[i];
	}
}
return max1;
}
console.log(najduzaRec(niz12));

console.log(niz12[1]);




//prosecan broj slova u nizu reci
//ovde prvo moramo da saberemo sva slova elemenata niza a onda da ih podelimo brojem 
//elemenata niza

niz12=["neko", "zapravow2111", "niko"];
suma=0;
for(let i=0; i<niz12.length; i++)

{

	suma+=niz12[i].length;
}

console.log(suma/niz12.length);


//isto ovo samo preko funkcije
niz12=["ne", "zapravow2111", "niko222"];
let lepaFunkcija=niz=>{

suma=0;
for(let i=0; i<niz12.length; i++)

{

	suma+=niz12[i].length;
}

let arsr=suma/niz12.length;
return arsr;
}
console.log(lepaFunkcija(niz12));



//ispisati natprosecno dugacke reci

niz12=["ne", "zapravow2111", "niko11111","sjsjsjjsjjs"];
let Funkcija=niz=>
{
	let p="";
	for(let i=0; i<niz.length; i++)

	{

		if (niz[i].length>lepaFunkcija(niz)) 

		{
			p+=" "+niz[i]+"";
			
		}
	}
console.log(p);

}

Funkcija(niz12);





//Odrediti broj elemenata u nizu stringova čija je dužina
//veća od prosečne dužine svih stringova u nizu.
niz12=["ne", "zapravow2111", "niko11111","sjsjsjjsjjs"];
let  brojNatprosecnoDugackeReci=niz=>

{

	let ar=lepaFunkcija(niz);//za prosledjeni niz da odredi prosek slova. 
	//Funkciju prosekSlova smo preuzeli posto je vec definisana
	
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

let niz13=['aa', 'bb', 'ca'];
let niz14=(niz,slovo)=>{
br=0;
for(let i=0; i<niz.length; i++)

{

	if (niz[i].includes("a")) 

	{

		br++;
	}
}
return br;
}
console.log(niz14(niz13));

let q=niz13[0].includes("b");
console.log(q);



//odrediti broj elemenata u nizu stringova koji pocinju na slovo 'a';
let niz08=['aaa', 'abb','aaa']
let sadrzea=niz=>

{
	let br=0;
	for(let i=0; i<niz.length; i++)

	{
		if (niz[i].startsWith('a',1)) 

		{

			br++;
		}

	}

return br;
}

console.log(sadrzea(niz08));





//24. zadatak iz nizova:
//Dati su nizovi:
/*a[0],a[1],...,a[n-1] i
b[0],b[1],...,b[n-1].
Formirati niz c[0],c[1],..,c[2n-1] ciji su elementi
a[0],b[0],a[1],b[1],...,a[n-1],b[n-1].*/

let a=[1,5,7];
let b=[2,4,6];
let c=[];

for(let i=0; i<a.length; i++)

{


	c.push(b[i]);
	c.push(a[i]);
}


console.log(c);


//25.zadatak iz nizove:

/*a[0],a[1],...,a[n-1] i
b[0],b[1],...,b[n-1].
Formirati niz c[0],c[1],..,c[n-1] ciji su elementi
a[0]*b[0],a[1]*b[1],...,a[n-1]*b[n-1].*/



 a=[1,5,7];
 b=[2,4,6];
 c=[];
let dupli=(a,b)=>{
for(let i=0; i<a.length; i++)

{


	c.push(a[i]*b[i]);
	
}
return c;
}

console.log(dupli(a,b));


//26. zadatak

//Na osnovu niza a[0],a[1],...,a[2n-1], formirati niz b[0],b[1],...,b[n-1] po 
//formuli b[i]=((a[i]+a[2n-1-i])/2)


a=[2,4,6,7,10,12,7];
b=[];


for(let i=0; i<((a.length+1)/2); i++)
{
b.push((a[i]+a[a.length-1-i])/2);
}


console.log(b);


//sa interneta zadazi za nizove



//Napisati program kojim se pronalazi broj nula u unetom nizu brojeva


let qa=[1,5,8,0,4];


let nula=niz=>{


let indeks=0;
for(let i=0; i<niz.length; i++)
{


	if (niz[i]==0)//probao sam ovde sa includes da mi pronadje broj nula, ali ne moze, to sluzi samo za 
		//pronalazenje slova kod stringova
	 {
	 	indeks=i;
	 	console.log(indeks);
	 }
}


}
nula(qa);



//Kreira se niz od N celih brojeva. 
//Treba ispisati sve one članove čija je vrednost manja od njihovog rednog broja (indeksa) u nizu.

let qb=[1,5,8,0,3];
for(let i=0; i<qb.length; i++)
{

	if (qb[i]<i) {

		console.log(qb[i]);
	}
}


/*Za unete nizove A od N i B od M celih brojeva, treba ispisati M elemenata 
niza A onim redosledom kako je navedeno u nizu B. 
Podrazumeva se da ni jedan elemenat niza B nije veći od N.
Npr. A=[23,52,38,44} i B=[3,1,1,2], ispisuje se 38, 23, 23, 52.*/



let AA=[23,52,38,44];
let BB=[3,1,1,2];

for(let i=0; i<qb.length; i++)
{

	console.log((AA[BB[i]-1]));


}



//Unose se nizovi A i B od po N elemenata. Kreirati niz C čiji je 
//svaki elemenat jednak manjem od odgovarajućih elemenata nizova A i B.
//Ako bismo želeli preciznije da se izrazimo: Ci = min(Ai, Bi).


let A=[1,3,7,8];
let B=[2,4,10];
let C=[];

if(A.length>B.length)
{
	C=B;

}

else{

	C=A;
}
console.log(C);


/*Za zadati niz od N celih brojeva krirati i ispisati novi niz čiji
 se elementi dobijaju kao zbirovi prvog i poslednjeg elementa unetog niza,
  zatim drugog i pretposlednjeg, trećeg i trećeg s kraja... Podrazumeva se da je N parno.
Ako je zadat niz [4,8,6,2,1,9], treba da se dobije [13,9,8].*/



let w=[4,8,6,2,1,9];
let e=[];

for(let i=0; i<w.length/2; i++)
{

	e.push(w[i]+w[w.length-1-i]);
}

console.log(e);





















//VEZBANJE OBJEKTI


let blog={

	title:'neko',
	content:'niko',
	author:'JM'

};

console.log(blog);
console.log(typeof blog);



console.log(blog.title, blog.content, blog.author);





//izmena osobine
blog.title='preslava';
console.log(blog);


let blog1={

	title:'prvi',
	content:'jabuka',
	author:'Stevan'


};


let blog2={

	title:'drugi',
	content:'kruska',
	author:'Dejan'


};



let blog3={

	title:'treci',
	content:'ananas',
	author:'Biljana'


};


console.log(blog1,blog2,blog3);


let user={


	username:'AndjelaNole',
	age:'25',
	blogs:['blog1','blog2','blog3']
}
console.log(user);



console.log(user.username);


console.log(user.blogs);


//zasebno svaki blog iz niza blogs
let niz17=user.blogs;
for(let i=0; i<user.blogs.length; i++)
{

	console.log(user.blogs[i]);
}


//preko forEach petlje


niz17.forEach(i=>{

	console.log(i);
});






 user={


	username:'AndjelaNole',
	age:'25',
	blogs:['blog1','blog2','blog3'],
	login:function(){
		console.log(`Tableta protiv bolova`);

	},

	logBog:function(){

		console.log(this.blogs);
	}

};
user.logBog();
user.login();
console.log(this);



//foreach petlja unutar objekta

let user01={

	username:'akisa',
	age:35,
	blogs:['blog4','blog5','blog6'],
	login1:function(){

		console.log(`neki tekst`);
	},

	login2:function(){

		console.log(this.age);
	}
};

user01.login2();






 blog1={

	title:'prvi',
	content:'jabuka',
	author:'Stevan'


};


 blog2={

	title:'drugi',
	content:'kruska',
	author:'Dejan'


};



 blog3={

	title:'treci',
	content:'ananas',
	author:'Biljana'

}


let blogs=[blog1, blog2, blog3];
blogs.forEach(n=>{

	console.log(n);
});



//forEach petlja
console.log(blog1.title);

blogs.forEach(n=>{
	console.log(n.author);

});

//for petlja
for(let i=0; i<blogs.length; i++)
{

	console.log(blogs[i].author);
}

//arrow funkcija

let autori=niz=>{

	for(let i=0; i<niz.length; i++)
{

	console.log(niz[i].author);
}
}

autori(blogs);

blog1={

	title:'prvi!',
	content:'jabuka',
	author:'Stevan',
	likes:15,
	dislikes:17

};


 blog2={

	title:'drugi',
	content:'kruska',
	author:'Dejan',
	likes:10,
	dislikes:7

};



 blog3={

	title:'treci!',
	content:'ananas',
	author:'Biljana',
	likes:100,
	dislikes:45
};


 blogs=[blog1, blog2, blog3];

//Napraviti arrow funkciju kojoj se prosleđuje niz
//objekata, a ona vraća ukupan broj lajkova


let objekti=niz=>
{

	let suma=0

	niz.forEach(b=>{

		suma+=b.likes;
	});
	
return suma;
}
console.log(objekti(blogs));


//Napraviti arrow funkciju kojoj se prosleđuje niz
//objekata, a ona vraća prosečan broj lajkova
 

 objekti=niz=>
{

	let suma=0
	let br=0;
	niz.forEach(b=>{

		suma+=b.likes;
		
	});
	
return suma/niz.length;
}
console.log(objekti(blogs));




/*Napraviti arrow funkciju kojoj se prosleđuje niz
objekata, a ona ispisuje sve one naslove blogova koji
imaju više pozitivnih nego negativnih ocena*/



let pozitivni= niz=>{


	niz.forEach(a=>{

		if (a.likes>a.dislikes) 
		{
			console.log(a.title);
		}

	});

}

pozitivni(blogs);





//Napisati arrow funkciju kojoj se prosleđuje niz objekata
//a ona ispisuje sve naslove koji se završavaju uzvičnikom



let naslovi=niz=>{


	niz.forEach(a=>{

		if (a.title.endsWith('!')) 

		{

			console.log(a.title);
		}
	
	});
}
naslovi(blogs);


//OBJEKAT U OBJEKTU




let user02={


	title:'Stevan01',
	content: 'prekrsajna prijava',
	author:'NIS U SRCU',
	moja:function(){

		for(let i=0; i<blogs.length; i++)
		{
			console.log(blogs[i]);
		}
	},
	tvoja:function(){

		blogs.forEach(b=>{

			console.log(b.content);
		});
	}
};

user02.moja();
user02.tvoja();




//Napraviti niz korisnika gde svaki od korisnika sadrži niz
//blogova. Svaki blog u ovom nizu je objekat.
blog1={

	title:'prvi!',
	content:'jabuka',
	author:'Stevan',
	likes:55,
	dislikes:17

};


 blog2={

	title:'drugi',
	content:'kruska',
	author:'Dejan',
	likes:10,
	dislikes:7

};



 blog3={

	title:'treci!',
	content:'ananas',
	author:'Biljana',
	likes:100,
	dislikes:45
};

let user001={

	username:`JelenaKovacevic`,
	age: 19,
	blogs:[blog1,blog2,]

};


let user002={

	username:`PeraPeric`,
	age: 16,
	blogs:[blog1,blog2,]

};


let user003={

	username:`AnaAntic`,
	age: 29,
	blogs:[blog1,blog3,]

};

console.log(user003);


//niz korisnika

let users=[user001, user002, user003];//ovim je resen ovaj deo zadatka gore navedenih

console.log(users[0].username);



//Ispisati imena onih autora koji imaju ispod 18 godina

	 autori=niz=>{

	niz.forEach(a=>{

		if (a.age<18)

		 {

		 	console.log(a.username);
		 }
	});
}

autori(users);	



//moze i bez arrow funkcije


users.forEach(a=>{

		if (a.age<18)

		 {

		 	console.log(a.username);
		 }
	});



//Ispisati naslove onih blogova koji imaju više od 50
//lajkova
let lajkovi=niz=>{


	niz.forEach(a=>{

		let blogovi=a.blogs;
			blogovi.forEach(b=>{

				if (b.likes>50) 
				{
					console.log(b.title);
				}
			});
	});
}

lajkovi(users);



//Ispisati sve blogove autora čiji je username ’JelenaKovacevic’



let username=niz=>{

	niz.forEach(a=>{
		let usr=a.blogs;
		if (a.username=="AnaAntic")
		 {

		 	usr.forEach(b=>{

		 		console.log(b.author);


		 	});
		 }

	});
}

username(users);




//isto se trazi kao u prethodnom primeru, razlika je u tome sto se trazi da se poded
//niza unese i ime kao promenljiva a ne da se sadzi u samoj funkciji


 username=(korisnici,ime)=>{


korisnici.forEach(a=>{

	if (a.username==ime) 
	{

		let blogovi =a.blogs;
		blogovi.forEach(b=>{
			console.log(b.author);

		});
	}

});

}

username(users,'JelenaKovacevic');



//Ispisati imena onih autora koji imaju ukupno više od 100
//lajkova za blogove koje su napisali!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


let popularniAutori=autori=>{
	
	autori.forEach(a=>{
		let sum=0;
		let blogovi=a.blogs;

		blogovi.forEach(b=>{

			sum+=b.likes;
			
		});

		if (sum>100)

			 {

			 	console.log(a.username);
			 }

	});


}
popularniAutori(users);



let ukupnolajkova=niz=>{
let ukupno=0;
niz.forEach(elem=>{//samo sa ovim ovo nije arrow funkcija nego 
	//samo forEach petlja, koja tek treba da se stavi u arrow funkciju



	ukupno+=elem.likes;

});

//console.log(ukupno); umesto ovoga posto je funkcija stavljas:
return ukupno;
}

console.log(ukupnolajkova(blogs));


//Ispisati imena onih autora koji imaju ukupno više od 100
//lajkova za blogove koje su napisali!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//(isti zadatak kao pretposlednji samo ubacena funkcija ukupnolajkova)

popularniAutori=autori=>{

	autori.forEach(a=>{
		//ako ovde stavimo sumLikes=0//dobicemo sumu za sve korisnike ukupno
		let nizBlogova=a.blogs;
		let sumLikes=ukupnolajkova(nizBlogova);

		if (sumLikes>100)

		 {

		 	console.log(a.username);
		 }
	});

}

popularniAutori(users);

























	
