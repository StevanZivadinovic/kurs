//ispisati brojeve od 0 do 10

let i;
 for(i=0; i<=10; i++)

 {

 	console.log(i);
 }




//Ispisati brojeve od 20 do 1

for(i=20; i>=1; i--)
{

	console.log(i);
}



//Ispisati parne brojeve od 1 do 20

for(i=1; i<=20; i++)


{

	if (i%2==0) 

		{

			console.log(i);


	}
}

//moze i ovako

for(i=2	; i<=20; i+=2)


{

	

			console.log(i);
}

//Ispisati dvostruku vrednost brojeva od 5 do 15


for(i=5; i<=15; i++)

{
	
	console.log(i*2);
}




//sabirati brojeve od 1 pa nadalje redom, tako da ne predjete unetu sumu s; kad ne znas kolko puta treba
//obaviti neku operaciju koristis while, inace mozes for



let s=15;
i=1;
let br=0;

let pom_s=0;
while(pom_s<=s)


{
pom_s+=i;
i++;
br++;//broj brojeva koje treba sabrati da bi se dostigla zadata suma s=15;


}

console.log(br);

//pomnozite brojeve od 1 pa nadalje redom, tako da ne predjete uneti prozivod


p=15;
i=1;
pom_p=1;
br=0;
while(pom_p<=p)

{


pom_p*=i;
i++;
br++;



}

console.log(br-1);//zbog toga sto se obavi i poslednja iteracija koja je visak pa je
//oduzimamo






//for petlja 10puta zdravo

for (i=1; i<=10; i++)
{

	if (i%3==0) 
	{

		console.log("zdravo svete");
	}

	console.log("zdravo");
}
console.log("zdravo");


//while petlja 10 zdravo
i=1;
while(i<10)

{

	console.log("cao");
	i++;
}





//Odrediti sumu brojeva od 1 do 100



s=0;
for(i=1; i<=100; i++)

{

	s+=i;
	
}
console.log(s);



//Odrediti sumu brojeva od 1 do n

s=0;
i=1;
n=50;
for(i=1; i<=n; i++)

{

s+=i;
}
console.log(s);



//Odrediti sumu brojeva od n do m



s=0;
i=1;
n=50;
let m=100;
for(i=n; i<=m; i++)

{

s+=i;
}
console.log(s);




//Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100.


p=1;
for(i=20; i<=100; i++)



{
	if(i%11==0){

		p*=i;//p=p*i;
	}
}

console.log(p);


//Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100., i ispisati ih.

p=1;
for(i=20; i<=100; i++)



{
	if(i%11==0){

		p*=i;//p=p*i;
		console.log(i);//samo je ovde razlika u odnosu na prethodni
	}
}

console.log(p);



//Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.
br=0;
for(i=5; i<=150; i++)
{
	if (i%13==0)

	 {

	 	br++;
	 }

}
console.log(br);




//Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150., i koliko ima onih 
//koji nisu deljivi sa 13
br=0;
br1=0;
for(i=5; i<=150; i++)
{
	if (i%13==0)

	 {

	 	br++;
	 }

	 else{

	 	br1++;
	 }

}
console.log(br);
console.log(br1);
console.log(`u intervalu od 5 do 150 ima ${br} koji su deljivi sa 13 i ${br1} brojeva nedeljivih sa 13`)



//Ispisati aritmetičku sredinu brojeva od n do m.
//1. nacin

s=0;
n=5;
m=10;
br=0;
for(i=n; i<=m; i++)

{
	s+=i;
	br++;


}
let arsr=s/br;
console.log(arsr);



//Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno.



n=-7;
m=13;
poz=0;
neg=0;

for(i=n; i<=m; i++)

{

	if (i>=0) 

	{

		poz++;
	}
	else{
		neg++;
	}

	
}
console.log(poz);
console.log(neg);



//Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5.





for(i=5; i<=50; i++)

{

	if (i%3==0 || i%5==0) 

	{

		br++;
	}

	
}
console.log(br);



//Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4. Mi smo ovde odradili 
//bez parnih
n=10;
m=45;
br=0;
s=0;
let cifra;
for(i=n; i<=m; i++)

{

	 cifra=i%10;//da bi uzeli samo brojeve koji se zavrsavaju sa 4, uvek pises i%10 kad zelis
	//da odredis zadnju cifru
	if(cifra==4){

		br++;
		s=s+i;
	}
}
console.log(br,s);




//Odrediti proizvod brojeva od n do m koji su deljivi brojem a



n=11;
m=30;
a=10;
p=1;


for(i=n; i<=m; i++)


{
if (i%a==0) 
{
	p*=i;
}

}
console.log(p);




n=-11;//ako je ovde negativan broj
m=30;
a=10;
p=1;


for(i=n; i<=m; i++)


{
if (i%a==0 && i!=0) //ovde dopisujes i!=0, da bi zaobislo nulu, bez toga rezultat na kraju bi bio 0;
{
	p*=i;
}

}
console.log(p);//ako je neparan broj negativnih brojeva u prozivodu onda ce rezultat biti negativan;




//Preuzeti sa interneta tri slike i imenovati ih 1, 2 i 3. For petljom u HTML-u ispisati
//svaku od sličica uz pomoć brojača (iteratora).
div=document.getElementById('slika');
for(i=1; i<=3; i++)
{

	//div.innerHTML="<img src="+i+".png>";//ovako ako ostavis preklapaju se slike, zato dodajes + kod jednako
	//div.innerHTML +="<img src="+i+".png>";//ovako ako slike nisu u zasebnom folderu, ovde sliku cita sa nazivom
	//1.png, 2.png i 3.png
	//div.innerHTML +="<img src=images/"+i+".png><br>";//ovako ako zelis slicice u novim redovima
}



/*

div=document.getElementById('slika');
for(i=1; i<=10; i++)
{

if (i%3==1) {
div.innerHTML +="<img src='images/1.png'>"+"<br>";//ako hoces slike naizmenicno
}
else if (i%3==2) {
	div.innerHTML +="<img src='images/2.png'>"+"<br>";//ako hoces slike naizmenicno
}

else  {
	div.innerHTML +="<img src='images/3.png'>"+"<br>";//ako hoces slike naizmenicno
}


}

*/








console.log(1%3);




















































































