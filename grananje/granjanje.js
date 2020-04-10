let a=5;
let b=3;
if (a>b)
 {
	console.log(`${a} je vece od ${b}`);
}

console.log("komanda posle if");



 a=5;
 b=8;
if (a>b)
 {
	console.log(`${a} je vece od ${b}`);
}


a=5;
 b=8;
if (a>b); //dodat znak ;
	 {
	console.log(`${a} je vece od ${b}`);
}


a=6;
b=6;
if(a==b)
	{

	console.log(`${a} je jednako ${b}`);
}



a=6;
b='6';//moze i ovako
if(a==b)
	{

	console.log(`${a} je jednako ${b}`); 
}

a=6;
b='6';
if(a===b)//jednako po tipu i vrednosti
	{

	console.log(`${a} je jednako ${b} po tipu i vrednosti`); 
}



a=6;
b='6';
if(a!=b)//nije jednako
	{

	console.log(`${a} nije jednako ${b}`); 
}


a=6;
b='6';
if(a!==b)//nije jednako po tipu i vrednosti
	{

	console.log(`${a} nije jednako ${b} po tipu i vrednosti`); 
}



a=5;
 b=8;
if (a>b) //dodat znak ;
	 {
	console.log(`${a} je vece od ${b}`);
}

else
{
	console.log(`${a} je manje od ${b}`);
}




a=6;
b='6';//moze i ovako
if(a==b)
	{

	console.log(`${a} je jednako ${b}`); 
}


else{
	console.log(`${a} nije jednako ${b}`); 
}

a=6;
b='6';
if(a===b)//jednako po tipu i vrednosti
	{

	console.log(`${a} je jednako ${b} po tipu i vrednosti`); 
}
else
	{

	console.log(`${a} nije jednako ${b} po tipu i vrednosti`); 
}


a=6;
b='6';
if(a!==b)//nije jednako po tipu i vrednosti
	{

	console.log(`${a} nije jednako ${b} po tipu i vrednosti`); 
}


else

{

	console.log(`${a} je jednako ${b} po tipu i vrednosti`); 
}


/*Ispitati da li je uneta temperatura u plusu ili je u
minusu. Ukoliko je temperatura nula, računati da je u
plusu.*/

let t=-10;
if (t>-1) 
{


	console.log('temperatura je u plusu')
}

else
{
	console.log('temperatura je u minusu')
}







/*U odnosu na pol (muški/ženski) koji je korisnik uneo
prikazati odgovarajući avatar.*/

let pol='Z';
let div=document.getElementById('blabla');
if (pol=='M')
{


	console.log('muski pol');
	div.innerHTML ="<img src='male.png' alt='muski'>";//menjas sadrzaj html taga
} 

else
{
	console.log('zenski pol');
	div.innerHTML ="<img src='female.png' alt='zenski'>";//menjas sadrzaj html taga
}





/*U odnosu na preuzeto trenutno vreme sa računara,
ispisati da li je trenutno jutro ili popodne.*/






let datum=new Date();
let sati=datum.getHours(); //trenutno sati
let minuti=datum.getMinutes();//trenutno minuta


if (sati>=12 ) 

{

	console.log('trenutno je popodne');
}

else
{
	console.log('trenutno je jutro')
}




//Za preuzetu godinu sa računara i unetu godinu rođenja
//izračunati da li je osoba punoletna ili maloletna.

let godina=datum.getFullYear();

let rodjenje=1990;
let godinezivota=godina-rodjenje;
if (godinezivota>=18)

 {
 	console.log('Osoba je punoletna');

 }


else
{

	console.log('odoba nije punoletna');
}

/*Odrediti najveći od tri uneta broja.*/

/*a=20;
b=30;
c=40;
let max=a;

if (b>max) {


	console.log('b je najveci broj');
	b=max;
}

 if (c>max) 
{

	console.log('c je najveci broj');
	c=max;
}*/






let x =90;
let y = 80;
let z = 70;
let max = x; 
if(y > max) {
	
    max = y;
}
if(z > max) {
	
    max = z;
}
console.log(max);



if ("M"   !=false) {


	console.log("ispunjen uslov")
}









