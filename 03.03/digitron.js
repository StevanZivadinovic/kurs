
let btn=document.querySelectorAll('.broj');
let btnOperacije=document.querySelectorAll('.operacija');
let x=0;
let y=0;
let rez=0;
let op="";



btn.forEach(elem=>{

	elem.addEventListener('click',()=>{//ovde raditi bez e

		console.log(elem.textContent);

		if (x==0)
 			{

 				x=elem.textContent
 	
			}

 		else
 				{

 				y=elem.textContent;
			}

	});

});


btnOperacije.forEach(elem=>{

	elem.addEventListener('click',()=>{

		op=elem.textContent;


	});
});






let jednako=document.getElementById('jednako');
jednako.addEventListener('click', ()=>{
		x=parseInt(x);
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
paragraf.innerText=rez;

x=0;
y=0;
rez=0;
});





















