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

	rez=rez+i +"";
	i++;

console.log(rez);
}

console.log(rez);//da bi dobio resenje kako treba, ako bi stavio console log u petlji onda bi dobio piramidalno resenje
















//Ispisati brojeve od 20 do 1.

let j=20;
while(j>=1)
{

	console.log(j);
	j=j-1;					
}


//Ispisati parne brojeve od 20 do 1.


 j=20;
while(j>=1)
{

	console.log(j);
	j-=2;//ili j=j-2;
}


//Ispisati brojeve od 20 do 1, koji su deljivi sa 3



i =20;
while (i>=1)

{

	if (i%3==0 && i%9 !=0) 

	{

		console.log(i);
	}
	i--;
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






















