
let btn=document.querySelectorAll('.broj');
let btnOperacije=document.querySelectorAll('.operacija');
let x=0;
let y=0;
let rez=0;
let op="";




btn.forEach(elem=>{

elem.addEventListener('click',()=>{



	if (x==0)//kad kliknes na prvo dugme udje se u if, drugi put kad kliknes udje se u else,
		//tj prvo uzima vrednost x, zatim uzima vrednost y
 		{

 			x=elem.textContent
 	
 		}

	 else
		{

 	y=elem.textContent;
 }

});


});


btnOperacije.forEach(elem=>{//operacija uzima vrednost na koju smo kliknuli +,-...

	elem.addEventListener('click',()=>{

		op=elem.textContent;


	});
});



let jednako=document.getElementById('jednako');
jednako.addEventListener('click', ()=>{
		x=parseInt(x);//stringovi se pretvaraju u brojeve
		y=parseInt(y);

	console.log(x,y,op);
	 switch(op){//moze i sve preko if-ova

	 	case "+":
	 	rez=x+y;
	 	break;

	 	case "-":
	 	rez=x-y;
	 	break;

	 	case "*":
	 	rez=x*y;
	 	break;

	 	case "/":
	 	rez=x/y;
	 	break;

	 }




let paragraf=document.getElementById('rezultat');
paragraf.innerText=rez;//ispisuje rezultat

x=0;
y=0;//vraca vrednost promenljivih na pocetnu vrednost
rez=0;
});





















