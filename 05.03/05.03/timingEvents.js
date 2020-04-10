//Klikom na dugme, prikazati poruku u konzoli nakon 2
//sekunde, i nakon pola sekunde.



let btn1=document.querySelector('#btn1');

btn1.addEventListener('click',()=>{


	window.setTimeout(()=>{//ovo window inace ne moramo da pisemo


		console.log("zdravo!");

}, 1000*2);

setTimeout(()=>{
		console.log("zdravo ranije");

},500);


});






//Prekidamo rad tajmera
let btn2=document.querySelector('#btn2');
let timer;

btn1.addEventListener('click',()=>{


	timer = window.setTimeout(()=>{//ovo window. inace ne moramo da pisemo, 
		//ovde je to samo skolski odradjeno


		console.log("zdravo!");

}, 1000*2);




});



btn2.addEventListener('click',()=>{
	clearTimeout(timer);//za svaki pojedinacni setTimeout mora da stavis clearTimeout sa nazivom setTimeout-a
});






let div=document.querySelector('#result');
let btn3=document.querySelector('#btn3');
let brojac=0;//ako nakon ovoga nista vise ne radis i ne uvodis jos neke promene, ako kliknes vise puta na
//dugme brojac ce da radi mnogo brzo
let clock;//ovo je tajmer
let clockIsSet=false;//ovo znaci da tajmer nije pokrenut

btn3.addEventListener('click',()=>{

	if (clockIsSet==false) {//ovo znaci, ako tajmer nije pokrenut onda udji u petlju

		clockIsSet=true;//odmah nakoon ulaska u petlju postavljas true sto znaci da je tajmer(clock) pokrenut
		clock=setInterval(()=>{

		brojac++;
		div.innerHTML=brojac;

	}, 1000);
	}
	

});

let btn4=document.querySelector('#btn4');
btn4.addEventListener('click',()=>{
	clearInterval(clock);//ovim zaustavljas tajmer
	clockIsSet=false;//ovim ponovo oznacavas da je tajmer stao, odnosno vracas mu vrednost koju je imao
	//na samom pocetku

});








let sat=document.querySelector('#sat');
setInterval(function(){

	let datum=new Date();
	let sati=datum.getHours();
	let minuti=datum.getMinutes();
	let sekunde=datum.getSeconds();

	if (sati<10) {

		sati='0'+sati;//sati posatju string ovde
	}

	if (minuti<10) {

		minuti='0'+minuti;//minuti postaju sttring ovde
	}

	if (sekunde<10) {

		sekunde='0'+sekunde;//sve ovo u ifovima smo radili da bi i minuti i sati i sekunde u svakom
		//trenutku bili dovcifreni
	}
	sat.innerHTML=`${sati}:${minuti}:${sekunde}`;

}, 1000);












