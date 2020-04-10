let date= new Date();
console.log(date);

 let sati=date.getHours();



let dan=date.getDay();
let mesec=date.getMonth();
let godina=date.getFullYear();

let dan1=date.getDate();

console.log(dan1);
console.log(dan);
console.log(sati);
console.log(mesec);
console.log(sati);



let div=document.getElementById('blabla');

let p=document.getElementById('text');
if (sati>=9 && sati<=17  && dan==0 )
{

	p.innerHTML = 'ponedeljak-' ,document.write(dan1,mesec+1,godina);

	div.innerHTML ="<img src='slike/otvoreno.jpg'>";//menjas sadrzaj html taga
} 

else{

	div.innerHTML ="<img src='slike/zatvoreno.jpg'>";

}


if (sati>=9 && sati<=17  && dan==1 )
{


	p.innerHTML = 'ponedeljak-' ,document.write(dan1), ".", document.write(mesec+1), ".", document.write(godina);

	div.innerHTML ="<img src='slike/otvoreno.jpg'>";//menjas sadrzaj html taga
} 

else{

	div.innerHTML ="<img src='slike/zatvoreno.jpg'>";

}


if (sati>=9 && sati<=17  && dan==2 )
{


	p.innerHTML = 'utorak-' ,document.write(dan1,mesec+1,godina);

	div.innerHTML ="<img src='slike/otvoreno.jpg'>";//menjas sadrzaj html taga
} 

else{

	div.innerHTML ="<img src='slike/zatvoreno.jpg'>";

}


if (sati>=9 && sati<=17  && dan==3 )
{


	p.innerHTML = 'sreda-' ,document.write(dan1,mesec+1,godina);

	div.innerHTML ="<img src='slike/otvoreno.jpg'>";//menjas sadrzaj html taga
} 

else{

	div.innerHTML ="<img src='slike/zatvoreno.jpg'>";

}




if (sati>=9 && sati<=17  && dan==4 )
{


	p.innerHTML = 'cetvrtak-' ,document.write(dan1,mesec+1,godina);

	div.innerHTML ="<img src='slike/otvoreno.jpg'>";//menjas sadrzaj html taga
} 

else{

	div.innerHTML ="<img src='slike/zatvoreno.jpg'>";

}


if (sati>=9 && sati<=17  && dan==5 )
{


	p.innerHTML = 'petak-' ,document.write(dan1,mesec+1,godina);

	div.innerHTML ="<img src='slike/otvoreno.jpg'>";//menjas sadrzaj html taga
} 

else{

	div.innerHTML ="<img src='slike/zatvoreno.jpg'>";

}




if (sati>=9 && sati<=17  && dan==6 )
{


	p.innerHTML = 'subota-' ,document.write(dan1,mesec+1,godina);

	div.innerHTML ="<img src='slike/otvoreno.jpg'>";//menjas sadrzaj html taga
} 

else{

	div.innerHTML ="<img src='slike/zatvoreno.jpg'>";

}
//Zadatak 1


let grama =230;
let postarinabp=230*5;

let postarinasp=230*5-((230*5)*0.1);


console.log(`Cena bez popusta je ${postarinabp} dinara, cena sa popustom je ${postarinasp} dinara`);










//Zadatak 2


date=new Date();
sati=date.getHours();
minuti=date.getMinutes();
console.log(sati, minuti);


let kraj=(17-sati)*60-minuti;
console.log(kraj);


if (sati<9)

 {

 	console.log("pre radnog vremena");
 }


else(sati >17)

{

	console.log("posle ranog vremena");
}





//Zadatak 3


let uk=40;
let plava=25;
let zuta=20;
let plavazuta=(plava+zuta)-uk;
console.log(plavazuta);
if (zuta>=10 && plava>=10 && plavazuta>=5)

 {

 	console.log("buket je ekskluzivan");
 }

else
{

	console.log("buket nije ekskluzivan");
}













