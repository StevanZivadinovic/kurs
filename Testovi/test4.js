/*1) Zadatak (30 poena)
Odrediti sumu i broj brojeva, u intervalu od n do m (uključujući brojeve n i m), koji su deljivi
sa 7 i neparni su. Vrednosti promenljivih n i m odredite sami.
U konzoli ispisati:
● U prvom redu ispisati sumu
● U drugom redu ispisati broj brojeva
● U trećem redu ispisati proizvod sume i broja brojeva*/

let n=1;
let m=35;
let i;
let s=0
let br=0;
let res="";

for(i=n; i<=m; i++)

{
if (i%7==0 && i%2!=0) 

{
	s+=i;
	res+=""+i;

	br++;

}


}

console.log(s);
console.log(br);
console.log(s*br);






/*2) Zadatak (35 poena)
Napraviti funkciju indeksTelesneMase kojoj se prosleđuju dva parametra tezina (težina u
kilogramima) i visina (visina u centimetrima). Funkcija na osnovu prosleđenih parametara
(težine i visine), računa i vraća indeks telesne mase (BMI).
BMI računati koristeći sledeću formulu:
BMI=tezina u Kg/(visina u metrima na kvadrat)

Za zadatu visinu i težinu osobe odrediti BMI pozivom prethodne funkcije i na osnovu te
vrednosti u konzoli napisati jednu od sledeće četiri kategorije:
● Pothranjenost (BMI manji ili jednak 18.5)
● Normalna težina (BMI između 18.5 i 24.9, neuključujući ove vrednosti)
● Povišena težina (BMI između 24.9 i 30, uključujuči ove vrednosti)
● Gojaznost (BMI strogo veći od 30)

Na primer, ukoliko osoba ima 100 kg i visoka je 182 cm (1.82m) njen BMI je 30.2, a u konzoli je
potrebno ispisati „Gojaznost“*/




function indeksTelesneMase(tezina,visina)
{


let BMI=tezina/((visina/100)**2);


return BMI;
}

let indeks=(indeksTelesneMase(100,182));


if (indeks<=18.5) 
{

	console.log("Pothranjenost");
}

else if(indeks>=18.5 && indeks<=24.9)

{

	console.log("Normalna tezina");
}

else if(indeks>=24.9 && indeks<=30)

{

	console.log("Povisena tezina");
}

else
{
	console.log("Gojaznost");
}




/*3) Zadatak (35 poena)
Napisati funkciju razlika koja računa razliku (zbira parnih brojeva od n do m koji su deljivi sa 3) i
(broja brojeva od n do m kojima je poslednja cifra 3).
Funkcija kao parametre prima dva broja, n i m, a kao rezultat vraća traženu razliku.
Pozvati ovu funkciju i njen rezultat ispisati u konzoli.*/


function razlika(n,m)

{

let s=0;
let br=0;
for(i=n; i<=m; i++)

{
	if (i%2==0 && i%3==0) 

	{

		s+=i;
		
	}

	if (i%10==3) 
	{

		br++;
		
	}
}

return (s-br);
}

console.log(razlika(1,20));








