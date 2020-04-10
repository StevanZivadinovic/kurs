let x=0;
let y=0;
let rez=0;
let op="";

let b1=document.getElementById('b1');
b1.addEventListener("click",()=>{

if (x==0)

 {

 	x=1;
 }

 else{

 	y=1;
 }

});



 b1=document.getElementById('b1');
b1.addEventListener("click",()=>{

if (x==0)

 {

 	x=2;
 }

 else{

 	y=2;
 }

});


let s=document.getElementById('plus');
s.addEventListener('click',()=>{

		op="+";

});


let jednako=document.getElementById('jednako');
jednako.addEventListener('click', ()=>{


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

});


































