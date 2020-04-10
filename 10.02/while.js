let i = 1;

while(i <= 10) {

console.log( i );

i++;

}



//Ispisati brojeve od 1 do 20,
//svaki u novom redu

console.log("zdravo");

 i=1;
while(i<=20)

{

	console.log(i);
	i++;//ovo stavljas da ne bi upao u beskonacnu petlju, moze i+1 umesto ovoga isto
}



console.log("svete!");










//Ispisati brojeve od 1do 20, sve u istom redu




i=1;
let rez="";
while(i<=20)

{

	rez=rez + i + "";
	i++;


}

console.log(rez);//da bi dobio resenje kako treba, ako bi stavio console log u petlji onda bi dobio piramidalno resenje
















//Ispisati brojeve od 20 do 1.

let j=20;
while(j>=1)
{

	console.log(j);
	j--;					
}


//Ispisati parne brojeve od 20 do 1.


 j=20;
while(j>=1)
{

	console.log(j);
	j-=2;//ili j=j-2;
}


//Ispisati brojeve od 20 do 1, koji su deljivi sa 3



 i =1;
while (i<=20)

{

	if (i%3==0 && i%9 !=0) 

	{

		console.log(i);
	}
	i++;
}




//Odrediti sumu brojeva od 1 do 100

 i=1;
let s=0; //neutral za sabiranje//uvek ovde definisi s(suma), nikako ne u petlji, uvek je nula kad se trazi suma
while(i<=100)
{
	s+=i;
	i++;
}

console.log(s);
/*
s=0; i=1;
s=1; i=2;
s=3; i=3;
s=6; i=4;
s=10;i=5;
s=15;i=6;
*/



//Odrediti sumu parnih brojeva od 1 do 100


i=1;
s=0;
while(i<=100)

{

	if (i%2 == 0) 
	{

		s+=i;//s=s+1;
		
	}
	i++;
}

console.log(s); //ispisujemo rzultat uvek na kraju kada je suma u pitanju









//Odrediti sumu brojeva od 1 do n



 i=1;
let n=100;
 s=0;

while(i <=n)
{

	s+=i;
	i++;//i=i+1
}

console.log(s);

console.log(n*(n+1)/2);





//Odrediti sumu brojeva od n do m


n=5;
let m=10;
 s=0;
  i=n; //ovo mi treba kad hocu da mi u drugoj konzoli bude lepo ispisano n i m, inace ne bude kako valja
  //nece da pise za n=5 i za m=10, vec nesto drugo.
while (n<=m)

{
	s+=n;
	n++;
}


console.log(s);
console.log("suma brojeva"+n+"do"+m+"je");//zasto pvde umesto n ne stavimo i???????????????????????????
console.log(`suma brojeva  od ${n} do ${m} je ${s}`);




//Odrediti proizvod brojeva od n do m
n=1;
m=5;
i=n;//????????????????????????????????????????????????????????????????????????????????????????//samo zbog ispisa u conzoli?
let p=1;//neutral za mnozenje ima vrednost 1, uvek;


while(n<=m)
{

	p*=n;//p=p*i;
	n++;
}

console.log(p);


//odrediti proizvod svakog drugog broja od n do m


n=1;
m=5;
i=n;//????????????????????????????????????????????????????????????????????????????????????????????
 p=1;//neutral za mnozenje ima vrednost 1, uvek;


while(i<=m)
{

	p*=i;//p=p*i;
	i+=2;//samo je ovo razlika u odnosu na predhodni zadatak
}

console.log(p);






//Odrediti sumu kvadrata brojeva od n do m

n=1;
m=5;
i=n;
s=0;
while(i<=m)

{
	s=s+i**2;
	i++;
}
console.log(s);




//Odrediti sa koliko brojeva je deljiv uneti broj k


let k=15;
i=1;
let br=0;
while(i<=k)

{

	if(k%i==0){

		br++;
	}
i++;
}

console.log(br);






/*
15/1=true;
15/2=false;
15/3=true;
15/4=false;
15/5=true;
15/15=true;
*/























