/*let datum=new Date();
let danime=datum.getDate();
let dan=datum.getDay();
let mesec=datum.getMonth();
let god=datum.getFullYear();
let sati=datum.getHours();
console.log(danime, dan, mesec, god);
let div=document.getElementById('blabla');
let p=document.getElementById('paragraf');



if (sati>=9 && sati<=17 && dan==0)

 {
 	div.innerHTML = "<img src='slike/otvoreno.jpg'>";

 	p.innerHTML= `Nedelja- ${danime}. ${mesec}. ${god}.`
 }



else if (sati>=9 && sati<=17 && dan==1)

 {
 	div.innerHTML = "<img src='slike/otvoreno.jpg'>";

 	p.innerHTML= `Ponedeljak- ${danime}. ${mesec}. ${god}.`
 }

 else if (sati>=9 && sati<=17 && dan==2)

 {
 	div.innerHTML = "<img src='slike/otvoreno.jpg'>";

 	p.innerHTML= `Utorak- ${danime}. ${mesec}. ${god}.`
 }

 else if (sati>=9 && sati<=17 && dan==3)

 {
 	div.innerHTML = "<img src='slike/otvoreno.jpg'>";

 	p.innerHTML= `Sreda- ${danime}. ${mesec}. ${god}.`
 }

  else if (sati>=9 && sati<=17 && dan==4)

 {
 	div.innerHTML = "<img src='slike/otvoreno.jpg'>";

 	p.innerHTML= `Cetvrtak- ${danime}. ${mesec}. ${god}.`
 }

 else{

 	div.innerHTML = "<img src='slike/zatvoreno.jpg'>";
 }







 datum=new Date();
 danime=datum.getDate();
 dan=datum.getDay();
 mesec=datum.getMonth();
 god=datum.getFullYear();
 sati=datum.getHours();


if(sati<9)

{
	console.log("pre radnog vremena");
}

else if(sati>17)
{

	console.log("nakon radnog vremena");
}

else

{

	console.log("otvoreno je");
}*/

let datum=new Date();
let danunedelji=datum.getDay() 
let sati=datum.getHours() 
let minuti=datum.getMinutes() 
let danumesecu=datum.getDate() 
let mesec=datum.getMonth() 
let godina=datum.getFullYear() 


console.log(datum);


let slika=document.getElementById('blabla');
let parag=document.getElementById('paragraf');
if(sati>9 && sati<=15 && danunedelji==0)

{
	slika.innerHTML+=`<img src='slike/otvoreno.jpg'>`;
	parag.innerHTML+=`Nedelja-${danumesecu}.${mesec}.${godina}`;
}

else if (sati>9 && sati<=15 && danunedelji==1) 
{
	slika.innerHTML+=`<img src='slike/otvoreno.jpg'>`;
	parag.innerHTML+=`Ponedeljak-${danumesecu}.${mesec}.${godina}`;
}

else
{
	slika.innerHTML+=`<img src='slike/zatvoreno.jpg'>`;
}







let g=230;
let postarina=g*5;
let sapopustom=postarina*0.9;
console.log(sapopustom);
console.log(`postarina bez popusta je ${postarina}, a sa popustom je ${sapopustom}`);







if (sati<9)

{

	console.log(`pre radnog vreeemna`);
}


else if (sati>9 && sati<=22)

 {

 	let p=22*60-sati*60-minuti;
 	console.log(p);
 }

 else
 {

 	console.log(`nakon radnog vremena`);
 }
















































