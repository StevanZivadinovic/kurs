
let brojevi=document.querySelectorAll('.broj');
let operacije=document.querySelectorAll('operacija');
let x=0;
let y=0;
let op="";
let rez=0;

brojevi.forEach(a=>{

a.addEventListener('click',()=>{

	if(x==0)
	{

		x=a.textContent;
	}

	else{

		y=a.textContent;
	}

});

});





operacije.forEach(a=>{

	a.addEventListener('click',()=>{

		op=a.textContent;
		console.log(op);

	});

});

let jednako=document.getElementById('jednako');
jednako.addEventListener('click', ()=>{
let para=document.querySelector('#rez');
	
	
	x=parseInt(x);
	y=parseInt(y);
	

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

		
		para.innerText=rez;
		

	   });



