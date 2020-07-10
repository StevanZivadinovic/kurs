let a=5;
let b=8;
let c=a;
a=b;
b=c;
console.log(a,b);




let broj=11;
if (broj<=10)
 {

 	console.log("prva desetica");
 }

 else if (broj<=20)
  {

  	console.log("druga desetica");
  }

  else
  {
  	console.log("veci od 20");	
  }

/*Na osnovu unetog broja poena ispitati koju ocenu profesor treba
da upiše učeniku. Učenik je položio ispit ukoliko ima više od 50
poena, u suprotnom je pao ispit.
Za više od 50 poena učenik dobija ocenu 6,
za više od 60 poena učenik dobija ocenu 7,
za više od 70 poena učenik dobija ocenu 8,
za više od 80 poena učenik dobija ocenu 9 i
za više od 90 poena učenik dobija ocenu 10.*/



let poeni=81;
if (poeni<=50) 
{
	console.log("student nije polozio ispit");

}

else if (poeni<=60) 
{

	console.log("student je dobio 6");
}

else if (poeni <=70)
{

	console.log("student je dobio 7");
}

else if (poeni <= 80)
{

	console.log("student je dobio 8");
}

else if (poeni<=90)
{
	console.log("student je dobio 9");
}

else
{
	console.log("student je dobio 10")
}




/*Preuzeti koji je dan u nedelji sa računara i ispitati
da li je to radni dan ili je u pitanju vikend.*/

let datum = new Date();
let dan=datum.getDay();//0-nedelja, 1-ponedeljak...
if (dan==0)
{

	console.log("vikend");

}


else if (dan==6)
 {

 	console.log("vikend");
 }

 else{

 	console.log("radni dan");
 }



/*Za vreme preuzeto sa računara ispisati
dobro jutro za vreme manje od 12 sati ujutru,
dobar dan za vreme manje od 18 sati
popodne i u ostalim slučajevima ispisati dobro
veče.*/




let vreme=datum.getHours();
if (vreme>=18) 
{

	console.log("dobro vece");
}

else if (vreme>=12) 

{

	console.log("dobar dan");

}


else {
	console.log("dobro jutro")
}


/*Uporediti dva uneta datuma i ispisati koji od
njih je raniji.*/



let dan1=7;
let mesec1=2;
let godina1=2020;

let dan2=5;
let mesec2=4;
let godina2=2020;


if (godina1<godina2)

 {

 	console.log("prvi datum je raniji");
 }

 else if (godina1 >godina2) 

 {

 	console.log("drugi datum je raniji");
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



/*if ((p1<=p2)&&(p2<=k1))
 {

 	console.log("preklapaju se");
 }

else if ((p2<=p1)&&(p1<=k2))


 {

 	console.log("preklapaju se");
 }

 else
 {

 	console.log("ne preklapaju se");
 }*/


if ((p1<=p2 && p2<=k1) || (p2<=p1 && p1<=k2))

{

	console.log("smene se preklapaju");
}


else

{          
console.log("smene se ne preklapaju");

}



/*Učitati dva cela broja i ispitati da li je veći od
njih paran.*/


/*broj=7;


if (broj%2==0) 

{
	 var paran=10;
	console.log("paran broj");
}


else
{
	 var paran=10;
	console.log("neparan broj");
}

console.log(paran);*/


/*let x=6;
broj=8;
let paran;


if (broj%2==0) 

{
	 var paran=10;
	 var x=paran;//ovako ne moze posto je promnljiva vec uvedena preko let, ali
	 //moze da unesemo umesto let x da uvedemo var x na pocetku, a u bloku let=x, odnosno
	 //zamenimo im mesta  :)
	console.log("paran broj");
}


else
{
	 var paran=10;
	console.log("neparan broj");
}

console.log(paran);*/




//Switch primer


let boja="crna";
switch(boja){

	case "plava":
	console.log("odabrali ste plavu boju");
	break;

	case "zelena": case "tirkizna":
	console.log("odabrali ste jednu od nijanski zelene boje");
	break;


	case "crvena":
	console.log("odabrali ste crvenu boju");
	break;



	default:
	console.log("Nije dobra boja");
}






/*Za uneti redni broj dana ispisati koji je to dan u nedelji (1. dan je
ponedeljak).*/



datum=new Date();
dan=datum.getDay();
switch(dan)

{	case 0:
	console.log("danas je nedelja");
	break;



			
	case 1:
	console.log("danas je ponedeljak");
	break;


	case 2:
	console.log("danas je utorak");
	break;


	case 3:
	console.log("danas je sreda");
	break;


	case 4:
	console.log("danas je cetvrtak");
	break;


	case 5:
	console.log("danas je petak");
	break;


	case 6:
	console.log("danas je subota");
	break;
}




/*Za unetu ocenu učenika (ceo broj od 1 do 5) ispisati njegov
uspeh te školske godine (nedovoljan, …, odličan).*/


let ocena=5;
switch(ocena)

{
	case 1:
	console.log("nedovoljan");
	break;



	case 2:
	console.log("dovoljan");
	break;


	case 3:
	console.log("dobar");
	break;


	case 4:
	console.log("vrlo dobar");
	break;


	case 5:
	console.log("odlican");
	break;



}



/*Za uneti paran broj manji od 10 ispitati da li je uneti broj nula,
dvojka, četvorka, šestica, osmica ili je unos pogrešan.*/


broj=9;
switch(broj)

{

	case 0:
	console.log("uneta cifra je 0");
	break;


	case 2:
	console.log("uneta cifra je 2");
	break;


	case 4:
	console.log("uneta cifra je 4");
	break;


	case 6:
	console.log("uneta cifra je 4");
	break;


	case 8:
	console.log("uneta cifra je 8");
	break;

	default:
        console.log(`unos je pogresan`);

}































