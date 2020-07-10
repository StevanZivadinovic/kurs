//Ispisati brojeve parne od 20 do 1


let i=20;
let rez="";
while(i>=1)


{
	if (i%2==0) {
	rez=rez+i+"";
	}
	i--;
	
}
console.log(rez);



//Ispisati dvostruku vrednost brojeva od 5 do 15 u jednom redu

i=5;
m=15;
let p="";

for(i=5; i<=m; i++)
{

	p+=i**2+"";
	

}
console.log(p);

//Odrediti sumu brojeva od n do m

n=5;
m=20;
s=0;
for (n=5; n<=m; n++)



{
	s=s+n;
	


}
console.log(s);


n=5;
m=20;
s=0;
rez="";
for (n=5; n<=m; n++)
{
s=s+n;
rez=rez+s+"";
	
	
}
console.log(rez);


//Odrediti proizvod brojeva od n do m



n=1;
m=5;
p=1;
 rez="";
for(n=1; n<=m; n++)//raditi sa i a ne sa n;

{

	p=p*n;
	rez=rez+p+"";
console.log(rez);
}


//Odrediti sumu kvadrata brojeva od n do m



n=1;
m=6;
s=0;
for(n=1; n<=m; n++)

{
	s=s+n**2;

	console.log(s);
}


//Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100??????????????????????????????????????
m=100;
p=1;
for(n=20; n<=m; n++)

{

	if (n%11==0) 

	{

		p*=n;
	}
	
	console.log(p);
}


//Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.


m=52;
let br=0;
n=i;
for(i=5; i<=m; i++)

{

	if (i%13==0) 

	{

		br++;
	}
	
	console.log(br);
}





//Ispisati aritmetičku sredinu brojeva od n do m

n=1;
m=5;
br=0;
s=0;
for(i=n; i<=m; i++)

{

	s+=i;
	br++;
}

let asrs=s/br;
console.log(asrs);




//Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno.

br=0;
br1=0;
n=-7;
m=13;
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



//Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5.
n=5;
m=50;
br=0;
i=1;
for(i=n; i<=m; i++)

{

	if (i%3==0 || i%5==0)
	 {

	 	br++;
	 }


}

console.log(br);




//Prebrojati i izračunati sumu brojeva od n do m kojima je 
//poslednja cifra 4. Mi smo ovde odradili 
//bez parnih



n=10;
m=45;
br=0;
s=0;
for(i=n; i<=m; i++)
{
	if (i%10==4)

	 {
		
	 	s=s+i;
	 	br++;
	 }

}
console.log(s,br);





//Odrediti proizvod brojeva od n do m koji su deljivi brojem a

n=-11;
m=30;
a=10;
p=1;


for(i=n; i<=m; i++)

{

	if (i%10==0 && i!=0)

	 {

	 	p=p*i;
	 }
}

console.log(p);





//Preuzeti sa interneta tri slike i imenovati ih 1, 2 i 3. For petljom u HTML-u ispisati
//svaku od sličica uz pomoć brojača (iteratora).

/*for(i=3; i>=1; i--)

{	 let slike =document.getElementById("slicice");
	slike.innerHTML+=`<img src='images/${i}.png'><br>`;
	console.log(slike);
}
*/



/*let slike = document.getElementById("slicice");//ovde ne prijavljuje gresku jer je promenljiva "slike" gore
	//u prethodnom primeru deklarisana sa let i to u bloku pa zato i vazi samo u bloku, jer promeljive deklarisane
	//;sa let u bloku vaze samo u bloku;


for (i=1; i<=3; i++)
{
	slike.innerHTML+="<img src='images/"+i+".png'><br>";
	console.log(slike);
}*/

/*let slike = document.getElementById("slicice");

for (i=1; i<=9; i++){  

if (i%3==1) {

slike.innerHTML+=`<img src='images/1.png'><br>`;
} 

else if (i%3==2)
{
	slike.innerHTML+=`<img src='images/2.png'><br>`;
}

else{
	slike.innerHTML+=`<img src='images/3.png'><br>`;

}
}*/











//Napraviti funkciju sumiraj koja određuje sumu brojeva od n do m. 
//Brojeve n i m proslediti kao parametre funkciji.




function sumiraj(n,m)
{
	
	let i;
	let s=0;
	for(i=n; i<=m; i++)

	{
		s+=i;
	}

	return s;
}
console.log(sumiraj(10,15));





function sum(n,m)
{
	let i;
	
	if (n<m)
	 {
	 	return 0;
	 }
	for(i=n; i<=m; i++)

	{
		let s=0;
		s+=i;
	}

	return s;
}
console.log(sum(10,15));





//Napraviti funkciju množi koja određuje proizvod brojeva od n do m.
//Brojeve n i m proslediti kao parametre funkciji.


function mnozi(n,m)
{
	let i;
	let p=1;
	for(i=n; i<=m; i++)
	{
		p*=i;
	}

	return p;
}

let proizvod=mnozi(1,5);
console.log(proizvod);




//Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m.
//Brojeve n i m proslediti kao parametre funkciji.



function aritmeticka(n,m)
{
	let i;
	let s=0;
	let br=0;
	for(i=n; i<=m; i++)
	{


		s+=i;
		br++;
	}

	return s/br;
}

let ari=aritmeticka(1,10);
console.log(ari);




/*Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja
cifra 3 u intervalu od n do m.
Brojeve n i m proslediti kao parametre funkciji.*/

function arit(n,m)
{
	let i;
	let s=0;
	let br=0;
	for(i=n; i<=m; i++)
	{


		if (i%10==2)
		 {
		 	s+=i;
		 	br++;
		 }
		
	}
	if (br>0) {

	return s/br;
}
} 
console.log(arit(1,30));






//Napraviti funkciju deljivSaTri koja se koristi u ispisivanju brojeva 
//koji su deljivi sa tri u intervalu od n do m.
//Prebrojati koliko ima ovakvih brojeva od n do m.






function deljivsaTri (n,m)
{
	
	br=0;
	for(let i=n; i<=m; i++)
	{

		if (i%3==0)
		 {
		 	console.log(i);
		 	br++;
		 }
	}
	return br;
}

console.log(deljivsaTri(1,10));











//Napraviti funkciju koja prikazuje sliku za prosledjenu adresu slike.




function slike1(put)

{


	return `<img src='${put}'><br>`;
}
let slika1=document.getElementById('prvi');
slika1.innerHTML=slike1("jabuka.png");
slika1.innerHTML+=slike1("jabuka.png");










//Napraviti funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa
//u tu boju.



let tekst=document.getElementById('par');
function paragraf(boja)

{

	return `<p style="color: ${boja}">Neki tekst</p>`
}

tekst.innerHTML=paragraf("red");
console.log(tekst.innerHTML);




function paragraf1(boja,tekst)

{

	return `<p style="color: ${boja}">${tekst}</p>`
}

tekst.innerHTML+=paragraf1("red", "mnogo lepi tekst");
console.log(tekst.innerHTML);

tekst.innerHTML+=paragraf1("blue", "mnogo lepi tekst");
console.log(tekst.innerHTML);




//Napraviti funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima
//prosleđenu veličinu fonta.



function paragraf4(font,tekst)

{

	return `<p style="font-size: ${font}px">${tekst}</p>`
}


tekst.innerHTML+=paragraf4(100, "mnogo lepi tekst");
console.log(tekst.innerHTML);


//Napraviti funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice
//treba da bude jednaka vrednosti iteratora.





function paragraf5(n,m)

{
	
	let res="";
	
	for(let i=n; i<=m; i++)

	{
		
		 res+=`<p style="font-size: ${i}px">Neki tekst</p>`;
		
	}
	return res;
}

tekst.innerHTML+=paragraf5(31,35);
console.log(tekst.innerHTML);









//ovo su zadaci sa interneta za program C, ali mogu da se rade i u Java Script

//Write a program in C to display n terms of natural number and their sum

function prvi(n)

{	let s=0;
	let i;
	for (i=1; i<=n; i++){

		
		s+=i;


	}
return s;
}
console.log(prvi(8));



//Write a program in C to display the cube of the number upto given an integer.-ispisano u konzoli



function drugi(n,m)
{let kub;
	for(let i=n; i<=m; i++)

	{
		
		kub=i**3;
		console.log(`za broj ${i} kub je ${kub}`);
	}

	return kub;
}

let drugi11=drugi(1,5);




//Write a program in C to display the cube of the number upto given an integer.-ispisano na sajtu, vidljivo 
//korisniku
tekst1=document.getElementById('par');
function drugi(n,m)
{let kuba="";
	let kub;
	for(let i=n; i<=m; i++)

	{
		
		let kub=i**3;
		kuba += `<p>za broj ${i} kub je ${kub}</p>`;
	}

	return kuba;
}

tekst1.innerHTML+=drugi(1,5);
console.log(tekst.innerHTML);





 //Write a program in C to display the pattern like right angle triangle using an asterisk



function c(n,m)

{
	let p="";
	for(let i=n; i<=m; i++)
	{

			p=p+"*";//ako hoces brojeve umesto zvezdice sa zagradama samo stavis i, bez zagrada;


			console.log(p);


	}
					
}
c(1,5);




//15. Write a C program to calculate the factorial of a given number. 




function faktorijel(n)

{

	let p=1;
	for(let i=1; i<=n; i++)

	{
		p*=i;

	}
	return p;
}

console.log(faktorijel(2));





//16. Write a program in C to display the n terms of even natural number and their sum.

function parni(n) {      
let i = 1;
let br = 0;
let parni = "";
 sum = 0;
while (br < n) {
  if (i % 2 == 0) {
    sum += i;
    parni += i + " ";
    br++;
  }
 	i++;
}
console.log(parni, sum);

}

parni(7);






//moze i ovako prethodni zadatak


 function parni1(n) { 
let zbir = 0;
for (i = 1; i <= n * 2; i++) {
  if (i % 2 == 0) {
    zbir += i;
    console.log(i);
  }
}
console.log(`Zbir prvih ${n} parnih brojeva je ${zbir}.`);
}
parni1(7);








//8. Write a program in C to display the n terms of odd natural number and their sum 

function neparni(n)

{


	let i=1;
	let sum=0;
	let br=0;
	while(br<n)
	{

		if (i%2!=0) 
		{
			sum+=i;
			
			br++;
			
			console.log(i);
		}
		i++;
		
	}
	console.log(`Zbir prvih ${n} neparnih brojeva je ${sum}.`);
}
neparni(5);







//	Napisati program za ispis dvostruke vrijednosti prvih n prirodnih brojeva.




function kvadrat11(n)

{	
	let p;
	let i=1;
	let res="";
	for(i=1; i<=n; i++)
	{

		 p=i**2;
		res+=" "+ p +"";
		
	}
	console.log(res);
	

}
kvadrat11(5);




// Write a program in C to display the sum of the series [ 9 + 99 + 999 + 9999 ...].


function kvadrat12(n)

{	let t=0;
	
	let i=1;
	let res="";
	for(i=1; i<=n; i++)
	{
		
		t=t*10+9;
		res+="+ "+t+"";
		

	}
	
	console.log(res);
}


kvadrat12(4);





























