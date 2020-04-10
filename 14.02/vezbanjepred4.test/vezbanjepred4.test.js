let pol="Z";
let avatar=document.getElementById('idid');
if (pol=="M") 
{

	avatar.innerHTML +=`<img src="male.png">`;
	console.log("muski pol");
}

else

{
avatar.innerHTML +=`<center><img src="female.png"></center>`;
	console.log("zenski pol");

}


let a=1;
let b=3;
let c=a;
a=b;
b=c;
console.log(a,b);




/*Na osnovu unetog broja poena ispitati koju ocenu profesor treba
da upiše učeniku. Učenik je položio ispit ukoliko ima više od 50
poena, u suprotnom je pao ispit.
Za više od 50 poena učenik dobija ocenu 6,
za više od 60 poena učenik dobija ocenu 7,
za više od 70 poena učenik dobija ocenu 8,
za više od 80 poena učenik dobija ocenu 9 i
za više od 90 poena učenik dobija ocenu 10.*/


let poeni=70;
if (poeni<50) 

{

console.log(`ucenik je pao ispit`);

}


else if (poeni<=60)

{

	console.log(`ucenik je dobio 6`);
}

else {

	console.log(`ucenik je dobio visoku ocenu`)
}




/*Preuzeti koji je dan u nedelji sa računara i ispitati
da li je to radni dan ili je u pitanju vikend.*/



let datum=new Date();
let dan=datum.getDay();

if (dan==0 || dan==6)

 {

 	console.log(`vikend je`);
 }

 else{

 	console.log(`rani dan`);
 }




/*Za vreme preuzeto sa računara ispisati
dobro jutro za vreme manje od 12 sati ujutru,
dobar dan za vreme manje od 18 sati
popodne i u ostalim slučajevima ispisati dobro
veče.*/

let sati=datum.getHours();

if (sati<12)

 {

 	console.log(`dobro jutro`);
 }

 else if (sati>=12 && sati<=18)
  {

  	console.log(`dobar dan`);
  }

  else
  {
  	console.log(`dobro vece Srbijo`);
  }



/*Uporediti dva uneta datuma i ispisati koji od
njih je raniji.*/

let dan1=10;
let mesec1=1;
let godina1=2020;


let dan2=2;
let mesec2=1;
let godina2=2020;



if (godina2>godina1)

 {

 	console.log(`prvi datum je raniji`);
 }

 else if(godina1>godina2)
 {

 	console.log(`drugi datum je raniji`);
 }


else if (mesec1<mesec2)

 {

 	console.log("prvi datum je raniji");
 }

 else if (mesec2<mesec1) 

 {

 	console.log("drugi datum je raniji");
 }


else if (dan1<dan2) 

{
	console.log("prvi datum je raniji");
}


else if(dan2<dan1)

{

	console.log("drugi datum je raniji");
}



else
{

	console.log("isti je datum");
}





/*Za unet početak i kraj radnog vremena dva
lekara ispisati DA ukoliko se njihove smene
preklapaju, u suprotnom ispisati NE.*/


let p1=9;
let k1=17;

let p2=12;
let k2=21;


if (((p1<=p2 && p2<=k1)) || ((p2<=p1 && p1<=k2)))
{

	console.log(`preklaapju se smene`);
}

else
{

	console.log(`ne preklapaju`);
}




/*Učitati dva cela broja i ispitati da li je veći od
njih paran.*/




let p=10;
let r=15;

if (p>r)
 {

 	if (p%2==0)

 	 {
 	 	console.log(`paran`);

 	 }
 	 else
 	 {
 	 	console.log(`neparan`);
 	 }
 }

 else 
  {

  	if (r%2==0) 

  	{
  		console.log(`paran`);
  	}
  	else
 	 {
 	 	console.log(`neparan`);
 	 }
  }






let boja="crna";
switch (boja)
{
	case "plava":
	console.log(`plava moja`);
	break;

	case "crna":
	console.log(`crna boja`);
	break;


	default:
	console.log(`neodgovarajuca boja`);


}


/*Za uneti redni broj dana ispisati koji je to dan u nedelji (1. dan je
ponedeljak).*/




console.log(dan);
switch(dan)

{

	case 0:
	console.log(`nedeljaa je `);
	break;


	case 1:
	console.log(`ponedeljak je`);
	break;


	case 2:
	console.log(`utorak je`);
	break;

	default:
	console.log(`ne zna se koji je dan`);


}


i=1;
while(i<=10)

{


	console.log(i);
	i++;
}



//Ispisati brojeve od 1do 20, sve u istom redu


let s="";
i=1;
while(i<20)

{
	
	s+=i+"";
	
	i++;
}
console.log(s);


//Ispisati brojeve od 20 do 1.


 s="";
i=20;
while(i>=1)

{
	
	s+=i+"";
	
	i--;
}
console.log(s);


//Ispisati parne brojeve od 20 do 1.
s="";
i=20;
while(i>=1)

{
	if (i%2==0)

	 {
	 	s+=i+"";
	
	
	}
	i--;
	
}
console.log(s);




//Ispisati brojeve od 20 do 1, koji su deljivi sa 3


s="";
i=20;
while(i>=1)

{
	if (i%3==0 && i%9!=0)

	 {
	 	s+=i+"";
	
	
	}
	i--;
	
}
console.log(s);



////Odrediti sumu brojeva od 1 do 100


i=1;
let sum=0;
while(i<=10)

{
	sum=sum+i;
	i++;
}
console.log(sum);








//Odrediti sumu parnih brojeva od 1 do 100

i=1;
 sum=0;
while(i<=100)

{
	if (i%2==0) {
	sum=sum+i;}
	i++;
}
console.log(sum);




//Odrediti sumu brojeva od 1 do n


let n=5;
i=1;
s=0;
while(i<=n)

{
	s+=i;
	i++;

}

console.log(s);





//Odrediti sumu brojeva od n do m

n=5;
let m=10;
s=0;
i=n;
while(i<=m)

{

	s+=i;
	i++;
}

console.log(s);



console.log(`suma brojeva od ${n} do ${m} je ${s}`);









//Odrediti proizvod brojeva od n do m


n=5;
m=6;
let pr=1;
i=n;
while(i<=m)

{

	pr*=i;
	i++;
}

console.log(pr);



console.log(`proizvod brojeva od ${n} do ${m} je ${pr}`);







//odrediti proizvod svakog drugog broja od n do m




n=5;
m=8;
 pr=1;
i=n;
while(i<=m)

{
	if (i%2==0) {

	pr*=i;
	}
i++;
}

console.log(pr);



console.log(`proizvod brojeva od ${n} do ${m} je ${pr}`);




//Odrediti sumu kvadrata brojeva od n do m




n=5;
 m=6;
s=0;
i=n;
while(i<=m)

{


	s+=i**2;
	i++;
}

console.log(s);



console.log(`suma brojeva od ${n} do ${m} je ${s}`);





//Odrediti sa koliko brojeva je deljiv uneti broj k



i=1;
let k=20;
let br=0;
while(i<=k)

{

	if(k%i==0)
	{

		br++;
	}
	i++;
}

console.log(br);






//Ispisati dvostruku vrednost brojeva od 5 do 15 u jednom redu

i=5;
m=15;

let res="";


for ( i=5; i<=m; i++)

{
	res+=" "+i+"";


	




}

console.log(res);





//Odrediti sumu brojeva od n do m

n=1;
m=11;
s=0;

for(i=n; i<=m; i++)

{

s+=i;

}
console.log(s);

//Odrediti proizvod brojeva od n do m



n=1;
m=6;
p=1;

for(i=n; i<=m; i++)

{

p*=i;

}
console.log(p);





//Odrediti sumu kvadrata brojeva od n do m


n=1;
m=5;
s=0;

for(i=n; i<=m; i++)

{

s+=i**2;

}
console.log(s);





//Odrediti proizvod svih brojeva deljivih sa 11
// u intervalu od 20 do 100





n=20;
m=50;
p=1;

for(i=n; i<=m; i++)
{
	if (i%11==0) 

	{
		p*=i;
		

	}

}
console.log(p);




//Prebrojati koliko ima brojeva deljivih sa 13 u 
//intervalu od 5 do 150.




n=5;
m=30;
p=1;
br=0;

for(i=n; i<=m; i++)
{
	if (i%13==0) 

	{
		p*=i;
		br++;
		

	}

}
console.log(br);





//Ispisati aritmetičku sredinu brojeva od n do m




n=1;
m=6;
s=0;
br=0;

for(i=n; i<=m; i++)

{

s+=i;
br++;

}
console.log(s/br);



//Prebrojati koliko brojeva od n do m je pozitivno, 
//a koliko njih je negativno.



n=-1;
m=7;
s=0;
br=0;
let br1=0;


for(i=n; i<=m; i++)
{



	if (i>=0)

	 {

	 	br++;
	 }

	 else
	 {

	 	br1++;
	 }
}


console.log(br,br1);






//Prebrojati koliko je brojeva od 5 do 50 koji 
//su deljivi sa 3 ili sa 5.
n=5;
m=50;
br=0;
for(i=n; i<=m; i++)

{

	if (i%5==0 || i%3==0)
	 {
	 	br++;
	 }
}

console.log(br);


//Prebrojati i izračunati sumu brojeva od n do m kojima je 
//poslednja cifra 4. Mi smo ovde odradili 
//bez parnih. ali sam dodao i parne



n=10;
m=50;
br=0;
res="";
for(i=n; i<=m; i++)

{


	if (i%10==4 && i%2==0)

	 {	res+=" " +i+"";
	 	
	 	br++;
	 }
}

console.log(res,br);





//Odrediti proizvod brojeva od n do m koji su deljivi brojem a




n=10;
m=15;
p=1;
a=5;

for(i=n; i<=m; i++)

{

	if (i%a==0)

	 {

	 	p*=i;
	 }
}

console.log(p);






//Preuzeti sa interneta tri slike i imenovati ih 1, 2 i 3. 
//For petljom u HTML-u ispisati
//svaku od sličica uz pomoć brojača (iteratora).



let div= document.getElementById('op');


for(i=1; i<=3; i++){

if (i%3==1) {

div.innerHTML+=`<img align='right' src='1.png'><br>`;
} 

else if (i%3==2)
{
	div.innerHTML+=`<img src='2.png'><br>`;
}

else{
	div.innerHTML+=`<img src='3.png'><br>`;

}
}





//Napraviti funkciju sumiraj koja određuje sumu brojeva od n
// do m. 
//Brojeve n i m proslediti kao parametre funkciji.


function sumiraj (n,m)
{
	let s=0;
	 n;
	m;
	i;

	for(i=n; i<=m; i++)

	{
		s+=i;

	}
	return s;
}

console.log(sumiraj(1,6));





function sum1(n,m)
{
	let i;
	let s=0;
	if (n>m)
	 {
	 	return 0;
	 }
	for(i=n; i<=m; i++)

	{
		 
		s+=i;
	}

	return s;
}
console.log(sum1(10,15));



//Napraviti funkciju množi koja određuje proizvod 
//brojeva od n do m.
//Brojeve n i m proslediti kao parametre funkciji.



function mnozi(n,m)

{	 p=1;

	for(i=n; i<=m; i++)

	{
		p*=i;

	}
	return p;
}
console.log(mnozi(1,5))





//Napraviti funkciju koja vraća aritmetičku sredinu brojeva 
//od n do m.
//Brojeve n i m proslediti kao parametre funkciji.


function arsr(n,m)

{
	let s=0;
	br=0;

	for(i=n; i<=m; i++)

	{
		s+=i;
		br++;

	}
	return s/br;
}

console.log(arsr(1,10));






/*Napisati funkciju koja vraća aritmetičku 
sredinu brojeva kojima je poslednja
cifra 3 u intervalu od n do m.
Brojeve n i m proslediti kao parametre funkciji.*/




function arsr1(n,m)

{
	let s=0;
	br=0;

	for(i=n; i<=m; i++)


	{

		if (i%10==3) {
		s+=i;
		br++;
}
	}
	return s/br;
}

console.log(arsr1(1,30));





//Napraviti funkciju deljivSaTri koja se koristi u ispisivanju brojeva 
//koji su deljivi sa tri u intervalu od n do m.
//Prebrojati koliko ima ovakvih brojeva od n do m.

function deljivSaTri (n,m)
{
	let br=0;
	for(i=1; i<=m; i++)
	{
		if (i%3==0)

		 {

		 	console.log(i);
		 	br++;
		 }
	}
	return br;
}

deljivSaTri(2,6);



//Napraviti funkciju koja prikazuje sliku za prosledjenu adresu slike.

let wer=document.getElementById('op1');
function putanja11(put)

{

return `<img src='${put}'>`;

}

wer.innerHTML+= putanja11("1.png");
wer.innerHTML+= putanja11("2.png");





//Napraviti funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa
//u tu boju.


function paragraf1(boja, tekst)

{

	return `<p style='color:${boja}'>${tekst}</p>`


}

wer.innerHTML+=paragraf1("pink", "neki lepi tekst");


wer.innerHTML+=paragraf1("green", "neki lepi tekst");




//Napraviti funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima
//prosleđenu veličinu fonta.


function paragraf2(font)

{

	return `<p style='font-size:${font}px'>Neki tekst</p>`


}

wer.innerHTML+=paragraf2(45);




//Napraviti funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice
//treba da bude jednaka vrednosti iteratora.




function paragraf5(n,m)

{	let res="";

	for(i=n; i<=m; i++)

	{

		res+= `<p style='font-size:${i}px'>Pet puta</p>`;
	}return res;
}

wer.innerHTML+=paragraf5(25,29);





//Write a program in C to display the cube of the number upto given an integer.-ispisano u konzoli


function cube(n,m)

{

	for (i=n; i<=m; i++)
	{
		let c=i**3;
		console.log(c);
	}
	
	return c;
}

cube(10,15);



//Write a program in C to display the cube of the
// number upto given an integer.-ispisano na sajtu, vidljivo korisniku




function cube(n,m)

{
	let cub="";
	for (i=n; i<=m; i++)
	{
		let c=i**3;
		cub+=`<p>za broj ${i} kub je ${c}</p>`;
		
	}
	
	return cub;
}

wer.innerHTML=cube(10,15);




 //Write a program in C to display the pattern like right angle triangle using an asterisk


function cc(n,m)

{
	let p="";
	for(let i=n; i<=m; i++)
	{

			p=p+"*";//ako hoces brojeve umesto zvezdice sa zagradama samo stavis i, bez zagrada;


			console.log(p);


	}
					
}
cc(1,5);




//15. Write a C program to calculate the factorial of a given number.



function faktorijel(n,m)

{
	p=1;

	for(i=n; i<=m; i++)

	{
		p*=i;

	}
	console.log(p);
	return p;
}


faktorijel(1,5);




//16. Write a program in C to display the n terms 
//of even natural number and their sum.





function even(n)

{
	let zbir=0;
	for(i=1; i<=n*2; i++)

	{
		if (i%2==0) {
			zbir += i;
		console.log(i);}

	}
	console.log(zbir);
	return zbir;

}

even(5);




//drugi nacin


function odd(n){


let br=0;
let zbir=0
let i=1;
let res="";
while(br<n)
{


	if (i%2!=0) 

	{	res+=" "+i+"";
		zbir+=i;
		br++;


		
	}

	i++;
}
console.log(res,zbir);

return zbir;


}

odd(5)





//	Napisati program za ispis dvostruke vrijednosti prvih n prirodnih brojeva.


function dvostruke(n){


let br=0;
let dvo;
let i=1;
let res="";
while(br<n)
{


	

		dvo=i*2;
		res+=" "+dvo+"";
		
		br++;
		i++;
}
console.log(res);

return dvo;


}

dvostruke(5)


// Write a program in C to display the sum of the series [ 9 + 99 + 999 + 9999 ...].



function devet(n)

{	let t=0;
	let res="";
	for(i=1; i<=n; i++)
	{
		 
		 t=t*10+9;
		 res+=" "+t+"";

	}
	

	console.log(res);
}

devet(5)


















