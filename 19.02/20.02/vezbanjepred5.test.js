//ispisati tekst u konzoli

let hello=()=>{

	console.log(`neki tekst prvi`);
}

hello();


//ispisati neke vrednosti

let hello1=(s1,s2)=>{


	console.log(`neki tekst ${s1}, i neki drugi tekst ${s2}`);
}

hello1(1,"cao");




//3)Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je
//neparan ili netačno ukoliko nije neparan.

let neparan=n=>{


if (n%2!=0) {

	console.log(true);
}


else{

	console.log(false);
}
}
neparan(1);



/*4. Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim
napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.*/

let maks2=(n,m)=>{

let max;

	if (n>m)
	 {
	 	max=n;

	 }

	 else{

	 	max=m;
	 }

	 return max;
}

console.log(maks2(1,5));


let maks4=(n,m,j,k)=>{



	let mak1=maks2(n,m);
	let mak2=maks2(j,k);
	let mak3=maks2(mak1,mak2);
	return mak3;
}
console.log(maks4(1,5,6,2));


//Napraviti funkciju koja prikazuje sliku za prosledjenu adresu slike.

let div=document.getElementById('bla');
let adresa=(adresa)=>{

	return `<img src='${adresa}'><br>`;

}

 div.innerHTML+=adresa(`kafa.png`);
console.log(div.innerHTML);
 div.innerHTML+=adresa(`kafa.png`);
console.log(div.innerHTML);



let sledbenik=n=> n+1;
console.log(sledbenik(1));


//ispis elemenata niza

niz=["ne","mogu","da verujem"];

for(let i=0; i<niz.length; i++)

{

	console.log(niz[i]);
}


//ispis svih elemenata u obrnutom redosledu


niz=["ne","mogu","da verujem"];

for(let i=niz.length-1; i>=0; i--)

{

	console.log(niz[i]);
}



//Odrediti zbir elemenata celobrojnog niza.



let niz1=[1,5,-7,10,-3,2];



let sum=0;

for(let i=0; i<niz1.length; i++)
{

	sum+=niz1[i];
}

console.log(sum);


//Odrediti proizvod elemenata celobrojnog niza.

let niz2=[1,5,-7,10,-3,-2];



let p=1;

for(let i=0; i<niz1.length; i++)
{

	p*=niz1[i];
}

console.log(p);




//Odrediti srednju vrednost elemenata celobrojnog niza.


 niz1=[1,5,-7,10,-3,2];



 sum=0;
let br=0;
for(let i=0; i<niz1.length; i++)
{

	sum+=niz1[i];
	br++;
}
let sr=sum/br;
console.log(sr);


////Odrediti maksimalnu vrednost u celobrojnom nizu.

niz1=[1,5,11,10,-3,2];


max=niz1[0];
for(let i=0; i<niz1.length; i++){


	if (max<niz1[i])

	 {

	 	max=niz1[i];
	 }
}


console.log(max);


////Odrediti minimalnu vrednost u celobrojnom nizu.


niz1=[5,-9,6,-40,-5,5,9,9,17,15,16];



let min=niz1[0];
for(let i=0; i<niz1.length; i++){


	if (min>niz1[i])

	 {

	 	min=niz1[i];
	 }
}


console.log(min);

//napisati arrow funkciju koja vraca minimalni element niza


niz1=[5,-9,6,-40,-5,5,9,9,17,15,16];


 min=niz=>{
 min=niz1[0];
for(let i=0; i<niz1.length; i++){


	if (min>niz1[i])

	 {

	 	min=niz1[i];
	 }
}
return min;
}
console.log(min(niz1));




//Odrediti indeks maksimalnog elementa celobrojnog
//niza.(odnosno treba da izadje najveci element se nalazi na toj i toj poziciji)



niz02=[-5,9,9,17,15,16];

let index=niz=>{
	let index=0;
max=niz02[0];
for(let i=0; i<niz02.length; i++){


	if (max<niz02[i])

	 {

	 	max=niz02[i];
	 	 index=i;
	 }
}
return index;
}
console.log(index(niz02));



//Odrediti broj elemenata celobrojnog niza koji su
//veći od srednje vrednosti.
niz02=[-5,9,11,17,15,16];

let srvr=niz=>{

	sum=0;
	br=0;
	let br1=0;
	for(let i=0; i<niz.length; i++){


		sum+=niz[i];
		br++;
	}

	let srvr=sum/br;

for(let i=0; i<niz02.length; i++){

	if(niz[i]>srvr){
		br1++;
	}
}
	return br1;
}
console.log(srvr(niz02));




//izracnati zbir pozitivnih elemenata celobrojnog niza



let niz04=[2,-4,-7,14,4];

let pozitivni=niz=>{


sum=0;
for(let i=0; i<niz.length; i++){

	if (niz[i]>0)

	 {

	 	sum+=niz[i];
	 }
}
return sum;
}
console.log(pozitivni(niz04));



//odrediti broj parnih elemenata sa neparnim indeksima

 niz04=[2,-4,-7,14,4];

 pozitivni1=niz=>{


br=0;
for(let i=0; i<niz.length; i++){

	if (niz[i]%2==0 && i%2!=0)

	 {

	 	br++;
	 	console.log(niz[i]);
	 }
}
	
}
(pozitivni1(niz04));





//ormirati ul listu
niz04=[2,-4,-7,14,4];

let ul=niz=>{


let div=document.getElementById('bla1');
	let li='<ul>';

	for(let i=0; i<niz.length; i++)
	{


		li+=`<li>${niz[i]}</li>`;
	}
	li+=`</ul>`
	return li;
}
div.innerHTML+=ul(niz04);





niz06=[2,4,6];
 div=document.getElementById('bla1');
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


let kosarkaskiTim=['tim A', 'tim BB', 'tim CCC'];

div=document.getElementById('bla1');
 lista=niz=>
{

	let listic='<table>';
	for(i=0; i<niz.length; i++)
	{

		listic+=`<tr><td>${niz[i]}</td><td>${niz[i]}</td></tr>`
	}

		listic+=`</table>`
		return listic;
}

div.innerHTML+=lista(kosarkaskiTim);
console.log(div.innerHTML);



/*Dat je niz stringova čiji su članovi putanje do slika.
Prikazati sve sliku u html dokumentu sa putanjama
navedenim u nizu.*/


let nizSlika=['kafa.png', 'kafa2.png', 'kafa3.png'];




div=document.getElementById('bla1');
let slike=niz=>{
	let slika="";
for(i=0; i<niz.length; i++){

	slika+= `<img src=${nizSlika[i]}>`
}
return slika;
}
div.innerHTML+=slike(nizSlika);


let str=`slika`;
//slice-odakle poceti podstring(od koje pozicije poceti) , gde zavrsiti podstring(do koje pozicije)

console.log(str.slice(0,2))

//substr-odakle poceti podstring(od koje pozicije poceti, koliko elemenata od te pozicije na dalje uzeti
console.log(str.substr(2,2));


//replace

console.log(str.replace('s','w')); //prvo unosis slovo koje se zamenjuje pa onda slovo kojim se zamenjuje



//Ispisati dužinu svakog elementa u nizu stringova.

niz11=['Tim A', 'Tim BB', 'Tim CCC'];

for(let i=0; i<niz11.length; i++)
{


	console.log(niz11[i].length);
}

//Odrediti element u nizu stringova sa najvećom dužinom.
niz11=['Tim A', 'Tim BB', 'Tim CCC'];

max=niz11[0].length;
let a=niz11[0];
for(let i=0; i<niz11.length; i++)
{
	if (max<niz11[i].length) 

	{

		max=niz11[i].length;
		 a=niz11[i];
		
	}
	
	
}
console.log(a);






//prosecan broj slova u nizu reci
//ovde prvo moramo da saberemo sva slova elemenata niza a onda da ih podelimo brojem 
//elemenata niza

niz12=["neko", "zapravow", "niko"];


let suma12=niz=>{


let su=0;
let c=0;

for(let i=0; i<niz12.length; i++)
{

	su+=niz12[i].length;
	
		 c=su/niz12.length;
}


return c;


}

console.log(suma12(niz12));



//ispisati natprosecno dugacke reci




let niz123=["neko", "zapravow", "niko","akakakkakaakakkak"];


let suma123=niz=>{


let su=0;
let c=0;
let br=0;

for(let i=0; i<niz123.length; i++)
{

	su+=niz123[i].length;
	
}	

	 c=su/niz123.length;


for(let i=0; i<niz123.length; i++){

		 if (niz123[i].length>c)
 {
	br++;
 	console.log(niz123[i],br);

 }

}


}

suma123(niz123);


//Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’.

let niz20=['aa', 'bb', 'cc'];



let brojElemenata=niz=>{


	let br=0;

	for(let i=0; i<niz.length; i++)
	{

		if (niz[i].includes('a'))
		 {
		 	br++;
		 }


	}
	return br;
}
console.log(brojElemenata(niz20));



//odrediti broj elemenata u nizu stringova koji pocinju na slovo 'a';

niz20=['aa', 'bb', 'cc'];


let pocinju=niz=>{

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

console.log(pocinju(niz20));



//24. zadatak iz nizova:
//Dati su nizovi:
/*a[0],a[1],...,a[n-1] i
b[0],b[1],...,b[n-1].
Formirati niz c[0],c[1],..,c[2n-1] ciji su elementi
a[0],b[0],a[1],b[1],...,a[n-1],b[n-1].*/



 a=[1,-3,5];
let b=[2,4,-6];
let c=[];


for(let i=0; i<a.length; i++)
{

	c.push(a[i],b[i]);
}
console.log(c);







//26. zadatak

//Na osnovu niza a[0],a[1],...,a[2n-1], formirati niz b[0],b[1],...,b[n-1] po 
//formuli b[i]=((a[i]+a[2n-1-i])/2)
let aw=[1,4,6,8,10,15];
let p1=[];
for(let i=0; i<((aw.length)/2); i++)
{



	p1.push((a[i]+a[aw.length-1-i])/2);
}

console.log(p1);








//malo zadaci iz GRANANJA

/*Preuzeti koji je dan u nedelji sa računara i ispitati
da li je to radni dan ili je u pitanju vikend.*/





let datum=new Date();
let dan=datum.getDay();


if (dan<6 && dan!=0)
 {

 	console.log(`radni dan`);
 }

 else
 {

 	console.log(`vikend`);
 }






let boja=`crna`;
switch(boja){

case "plava":
console.log(`izabrali ste plavu boju`);
break;

case "crvena":
console.log(`iyabrali ste crvenu boju`);
break;


case 'crna':
console.log(`izabrali ste odgovarajucu boju`);
break;

default:
console.log(`izabrali ste nepostojecu boju`);





}

/*Za uneti redni broj dana ispisati koji je to dan u nedelji (1. dan je
ponedeljak).*/

switch (dan)


{

case 0:
console.log(`nedelja`);
break;

case 1:
console.log(`ponedeljak`);
break;

}



//Ispisati dvostruku vrednost brojeva od 5 do 15 u jednom redu

i=5;
m=15;

let res="";


for ( i=5; i<=m; i++)

{
	res+=" "+i*2+"";


	




}

console.log(res);


//Napraviti funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice
//treba da bude jednaka vrednosti iteratora.
 div=document.getElementById('bla1')

let slikes=(n,m)=>{
let res="";
for(let i=n; i<=m; i+=3){



res+= `<p style='font-size:${i}px'>neki tekst</p>`

}
return res;


}
div.innerHTML+=slikes(10,20);




let blog1={
	title:'Blog1!',
	content:'Tekst 1',
	likes:60,
	dislikes:50


};

console.log(blog1);


let blog2={

	title:'Blog2',
	content:'Tekst 2',
	likes:30,
	dislikes:20
};


let blog3={


	title:'Blog3?',
	content:'Tekst 3',
	likes:10,
	dislikes:50


};



let user={

	username:'JohnDoe',
	age:30,
	blogs:['Title1','Title2','Title3']

}



console.log(user.username);

//ako hocu da ispisem svaki deo niza 'blogs', radim sledece:

console.log(user.blogs);



let nizmoj=user.blogs;//

for(let i=0; i<nizmoj.length; i++){


	console.log(`naslov bloga je ${nizmoj[i]}`);
}



let arrBlogs=user.blogs;
//ispis prethodnog niza

for(let i=0; i<arrBlogs.length; i++)

{

	console.log(`Naslov bloga je ${arrBlogs[i]}`);
}




//ispis niza koriscenjem metoda `forEach` petljom (cita se forič);


//1) sintaksa:
// "nazivNiza".forEach("arrow funkcija");




arrBlogs.forEach(i=>{

	console.log(`naslov bloga je ${i}`)//praktnicno ovo znaci da je arrBlogs[i] zamenjeno sa i samo, 
	//u ovoj petlji, koja nam to i omogucava
});




//kreiranje metoda unutar objekta


 user={

	username:'JohnDoe',//ovo je jedan properti unutar objekta
	age:30,
	blogs:['Title1','Title2','Title3'],
	ispis:function(){

		console.log(`neki tekst`);
	},
	pristupOsobini:function(){

		let rt=this.blogs;
		console.log(rt[1]);
	},


	 
	logBlogs:function(){
		let rt=this.blogs;
		rt.forEach(b=>
		{
			console.log(b);

		});//ako zelimo da pristupimo u okviru objekta njegovim propertijima

}
};

	user.ispis();
	user.pristupOsobini();
	user.logBlogs();



let blogs=[blog1, blog2, blog3];

//Iteracija forEach petljom

blogs.forEach(n=>
	{
	console.log(n);



});

console.log(blog1.content);


blogs.forEach(a=>{
	console.log(a.title);

});

//Napraviti arrow funkciju kojoj se prosleđuje niz
//objekata, a ona vraća ukupan broj lajkova


let lajkovi=niz=>{
let sum=0;
niz.forEach(a=>{

sum+=a.likes;
});
return sum;
}
console.log(lajkovi(blogs));



//Napraviti arrow funkciju kojoj se prosleđuje niz
//objekata, a ona vraća prosečan broj lajkova



let prosecan=niz=>{
let sum=0;
let br=0;

niz.forEach(a=>{
sum+=a.likes;
br++

});

return sum/br;



}
console.log(prosecan(blogs));


/*Napraviti arrow funkciju kojoj se prosleđuje niz
objekata, a ona ispisuje sve one naslove blogova koji
imaju više pozitivnih nego negativnih ocena*/



let natProsecan=niz=>{

niz.forEach(a=>{

if (a.likes>a.dislikes)
 {

 	console.log(a.title);
 }

});


}
natProsecan(blogs);




//Napisati arrow funkciju kojoj se prosleđuje niz objekata
//a ona ispisuje sve naslove koji se završavaju uzvičnikom


let naslovi=niz=>{

for(let i=0; i<niz.length; i++)
{
if (niz[i].title.endsWith('!')) 

{
console.log(niz[i].title);
}

}


}
naslovi(blogs);






let user1={
	username:`JelenaMatejic`,
	age: 25,
	blogs:[blog1,blog2,blog3],
	blogs1:function(){

		this.blogs.forEach(a=>{

			console.log(a);


		});

	},
	blogsTitle:function(){

		this.blogs.forEach(a=>{

			console.log(a.title);


		});

	}
};
user1.blogs1();
user1.blogsTitle();













//Napraviti niz korisnika gde svaki od korisnika sadrži niz
//blogova. Svaki blog u ovom nizu je objekat.
 blog1={
	title:'Blog1!',
	content:'Tekst 1',
	likes:70,
	dislikes:50


};




 blog2={

	title:'Blog2',
	content:'Tekst 2',
	likes:50,
	dislikes:50
};


 blog3={


	title:'Blog3?',
	content:'Tekst 3',
	likes:70,
	dislikes:40


};




 user1={
	username:`JelenaMatejic`,
	age: 25,
	blogs:[blog1,blog2,blog3]

};

let user2={

	username:`PeraPeric`,
	age: 16,
	blogs:[blog1,blog2,],

};


let user3={

	username:`AnaAntic`,
	age: 29,
	blogs:[blog1,blog3,],

};

console.log(user3);


//niz korisnika

let users=[user1, user2, user3];//ovim je resen ovaj deo zadatka gore navedenih


//Ispisati imena onih autora koji imaju ispod 18 godina

let age=niz=>{

	for(let i=0; i<niz.length; i++)

	{

		if (users[i].age<18)
		 {

		 	console.log(users[i].username);
		 }
	}


}
age(users);

//isti zadatak preko forEach petlje
let age1=niz=>{

	niz.forEach(a=>{

		if (a.age<18) 
		{
			console.log(a.username);
		}
	});



}

age1(users);




//Ispisati naslove onih blogova koji imaju više od 50
//lajkova

let lajk=niz=>{

	users.forEach(a=>{
		let ar=a.blogs;
		ar.forEach(b=>{
			if (b.likes>50)

			 {

			 	console.log(b.title);
			 }

		});

	});
}
lajk(users);




//Ispisati sve blogove autora čiji je username ’JelenaMatejic’

let username=(niz,ime)=>{

niz.forEach(a=>{
	
	if (a.username==ime) 

	{let ar=a.blogs;

		ar.forEach(b=>{

			
	
	console.log(b.title);

	});
	}

});


}

username(users,'JelenaMatejic');

//slicno kao prethodno nego se unosi i ime i korisniici





//Ispisati imena onih autora koji imaju ukupno više od 100
//lajkova za blogove koje su napisali

let viselajkova=niz=>{



	niz.forEach(a=>{

		let ar=a.blogs;
		let sum=0;
		ar.forEach(b=>{
			sum+=b.likes;

		});

		if (sum>100)
	 {

	 	console.log(a.username);
	 }

	});


}

viselajkova(users);





//Ispisati naslove onih blogova koji imaju natprosečan broj
//pozitivnih ocena i ispodprosečan broj negativnih ocena






let prosecanpozitivan=niz=>{

		let sum1=0;
		let sum2=0;
		let br1=0;
		let br2=0;
	niz.forEach(a=>{
	let ar=a.blogs;
		

		ar.forEach(b=>{
			sum1+=b.likes;
			sum2+=b.dislikes;

			br1++;
			br2++;

		});

		
	});
		let prosekpoz=sum1/br1;
		let prosekneg=sum2/br2;
		console.log(prosekpoz,prosekneg);


	niz.forEach(c=>{

		let ar=c.blogs;

			ar.forEach(d=>{

				if (d.likes>prosekpoz && d.dislikes<prosekneg)

				 {

				 	console.log(d.title);
				 }

				 
	});
			});

}


prosecanpozitivan(users);



/*Napraviti objekat dan koji sadrži atribute:
Datum
Kiša (true/false)
Sunce (true/false)
Oblačno (true/false)
Vrednosti temperature (niz izmerenih temperatura tog dana)*/


//Napraviti metod prosecnaTemperatura koji računa i vraća
// prosečnu temperaturu za niz temperatura (koji je dat u objektu)


let dan01={


	datum:'2020/02/24',
	kisa:false,
	sunce: false,
	oblacno: true,
	vrednostitemperature:[1,3,7,9,10,3,1],
	prosecnaTemperatura:function(){

		let suma=0;
		let br=0;
		this.vrednostitemperature.forEach(a=>{
			suma+=a;
			br++;

		});
		let prosek=suma/br;
		return prosek;
	},

};
console.log(dan01.prosecnaTemperatura())



//Napraviti niz dana dani koji sadrži nekoliko dan objekata
	let dan1={
		Datum: '24.02.2020',
		Kisa: true,
		Sunce: true,
		Oblacno: true,
		Vrednostitemperature: [9,10, 19, 12,10,5]

	};
	let dan2={

	Datum: '25.02.2020',
		Kisa: false,
		Sunce: true,
		Oblacno: false,
		Vrednostitemperature: [4,15, 25, 14,13,5]
	};
	let dan3={

	Datum: '26.02.2020',
		Kisa: false,
		Sunce: true,
		Oblacno: true,
		Vrednostitemperature: [9,10, 20, 12,11,5]
	}

	let dani=[dan1,dan2,dan3];





//Napraviti arrow funkciju maksTemperatura kojoj se prosleđuje 
//niz dana a ona vraća maksimalnu temperaturu koja je izmerena u tim danima.



 maxTemperatura1=niz=>{



	let max=-Infinity;
	niz.forEach(a=>{

		let ar=a.Vrednostitemperature;

		ar.forEach(b=>{

			if (b>max)
			 {
			 	max=b;
			 }

		});
	});
	return max;
}
console.log(maxTemperatura1(dani));




/*Uvesti globalnu promenljivu prosek koja predstavlja niz od 12 brojeva, 
u kojoj su smeštene prosečne temperature za svaki mesec u godini.
 U objektu dan napisati metodu koja ispituje da li je prosečna 
 temperatura iznad proseka za taj mesec ili ne.*/


let prosek=[0.4, 3.9, 5.6, 11, 18.1, 20.1, 22.1, 21.4,18.5, 11.4, 4.5, 2.4];




 dan={

	datum: '2020/02/24',//ovako se obicno unosi datum u bazi podataka
	kisa: false,
	sunce: true,
	oblacno: true,
	temperature:[-2,3,7,12,12,6,2,-1],
	//prosecna temperatura na dan
	prosek:function() {
		let temp=this.temperature;
		let suma=0;
		temp.forEach(t=>{
			suma+=t;

		});
		let p=suma/temp.length;
		return p;
	},
	//koliko je bilo merenja sa natprosecnom temperaturom
	brojNatprosek:function(){
		let p=this.prosek();
		let br=0;
		let ar=this.temperature;
		for(let i=0; i<ar.length; i++)
		{	
			
			if (ar[i]>p)

			 {

			 	br++;
			 }

		}
		return br;
	},
	//prebrojava koliko je bilo merenja sa maksimalnom temperaturom
	brojMaksimalnih:function(){

		let ar=this.temperature;
		let max=ar[0];
		let br=0;
		for(let i=0; i<ar.length; i++)
		{

			if (ar[i]>max)
			 {
			 	max=ar[i];
			 }
		}

		for(let i=0; i<ar.length; i++)
		{
			if (ar[i]==max)

			 {

			 	br++;
			 }
		}
		return br;





	},

	//prima dva parametra koji predstavljaju dve temperature
	// a koji broji koliko je merenja bilo izmedju ove dve temperature
	brojIzmedju: function(t1,t2){
		
		if (t1>t2)
		 {

		 	let t=t1;
		 	t1=t2;
		 	t2=t;
		 }
		let br=0;
		let ar=this.temperature;

		 for(let i=0; i<=ar.length; i++)
		 {

		 	if (t1<=ar[i] && ar[i]<=t2)
		 	 {
		 	 	br++;
		 	 }
		 	

		 }
		 return br;


	},

	//Proverava da li je u većini dana temperatura bila iznad proseka ili ne.
	iznadProsek:function(){

		let prosek=this.prosek();

		let ab=this.temperature;
		let br=0;
		let br1=0;
		for(let i=0; i<ab.length; i++)
		{

			if (ab[i]>prosek)
			 {

			 	br++;
			 }

			 if (ab[i]<prosek)
			  {

			  	br1++;
			  }
		}

		if (br>br1) 
		{

			return true;
		}
		else
		{

			return false;
		}


			},




	//Proverava da li je dan bio leden. Za dan se smatra da je leden ukoliko nijedna
	// temperatura izmerena tog dana nije iznosila iznad 0 stepeni.
	//ovo pazi, bitno je dosta, objasnjava kako se prekida niz kad se pojavi prva zeljena vrenost

 	
 ledeniDan:function(){
	let ar=this.temperature;
	for(let i=0; i<ar.length; i++)

	{

		if (ar[i]>0)
		 {

		 	return true;
		 }

		 else
		 {

		 	return false;
		 }
	}


},

	//Proverava da li je dan bio nepovoljan za meteropate. 
	//Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni.
	//ovde u svakom trenutku posmatramo dva elementa istovremeno, npr 1. i 2. element pa 2. i 3. itd.

	nepovoljan: function()
	{

		let ar=this.temperature;
		for(let i=0; i<ar.length; i++)

		{

			if (Math.abs(ar[i+1]-ar[i])>8) 

			{

				return true;
			}

			
		}

		return false;



	},
/*Proverava da li je dan bio neuobičajen. Za dan se kaže da je neuobičajen 
	ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, 
	ili je bilo i kišovito i oblačno i sunčano.*/
neuobicajen1:function()
	{

		let ar=this.temperature;
		let sustina=false;
		for(let i=0; i<ar.length; i++)
		{
			if (this.kisa==true && ar[i]<-5) 

			{

				sutina=true;
			}

			if (this.oblacno && ar[i]>25)

			 {

			 	sustina=true;
			 }
		}

		if (this.kisa && this.oblacno && this.suncano)

		 {

		 	sustina=true;
		 }

		 return sustina;
	},

//prosek=[0.4, 3.9, 5.6, 11, 18.1, 20.1, 22.1, 21.4,18.5, 11.4, 4.5, 2.4];

	//Drugi deo zadatka, vezano za globalnu promenljivu prosek.
	//U objektu dan napisati metodu koja ispituje da li
	// je prosečna temperatura iznad proseka za taj mesec ili ne.
	iznadProsekZaMesec: function()
	{

		let stringdate=this.datum.substr(5,2);
		console.log(stringdate);
		let date=parseInt(stringdate);
		console.log(date);
		let p=prosek[date-1];
		let pr=this.prosek();
		if (pr>p)

		 {

		 	return true;
		 }

		 else
		 {

		 	return false;
		 }






	},

};
console.log(dan.temperature);
console.log(dan.prosek());
console.log(dan.brojNatprosek());
console.log(dan.brojMaksimalnih());
console.log(dan.brojIzmedju(1,11));
console.log(dan.iznadProsek());
console.log(dan.ledeniDan());
console.log(dan.nepovoljan());
console.log(dan.neuobicajen1());
console.log(dan.iznadProsekZaMesec());




	




//Formirati niz objekata tipa dan.

 dan1={

datum:'2020/02/20',
kisa: false,
oblacno:true,
sunce: true,
temperature:[-2,1,3,7,11,11,5,1]




};

 dan2={

datum:'2020/03/20',
kisa: true,
oblacno:true,
sunce: true,
temperature:[2,7,8,11,11,13,5,4]




};




 dan3={

datum:'2020/02/22',
kisa: true,
oblacno:false,
sunce: false,
temperature:[-7,-4,2,0,-2,-3]




};



let merenjaDani=[dan1,dan2,dan3];



/*Napisati arrow funkciju koja ispisuje datum u kome je naviše puta izmerena temperatura. 
Ukoliko ima više takvih datuma, ispisati:
prvi takav,
poslednji takav.*/



let prviNajviseMerenja=niz=>

{

	let max=niz[0].temperature.length;
	let index=0;
	 niz.forEach(a=>{

	 	if (a.temperature.length>max)
	 	 {

	 	 	max=a.temperature.length;
	 	 }


	 });

console.log(max);
	let br=0;
	 for(let i=0; i<niz.length; i++)

	 {
	 	if (niz[i].temperature.length==max) 

	 	{
	 		br++;
	 		
	 	}
	 }
return i;



}

console.log(prviNajviseMerenja(merenjaDani));






























