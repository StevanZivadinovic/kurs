

let brojevi = document.querySelectorAll('.broj');
let operacije= document.querySelectorAll('.operacija');
let x=0;
let y=0;
let op="";

brojevi.forEach(a => {
	a.addEventListener('click',()=>{

	if(x==0)
	{		

		x=a.textContent;
	}

	else
	{

		y=a.textContent;
	}

});
});


operacije.forEach(a => {
	a.addEventListener('click',()=>{

		op=a.textContent;

	});
});



let paragraf=document.querySelector('#rezultat');
let jednako=document.querySelector('#jednako');
jednako.addEventListener('click',()=>{
x=parseInt(x);
y=parseInt(y);

if(op=='+')

{
	let rez=x+y;
	paragraf.innerHTML+=`${rez}`;
}

if(op=='-')

{
	let rez=x-y;
	paragraf.innerHTML+=`${rez}`;
}


if(op=='*')

{
	let rez=x*y;
	paragraf.innerHTML+=`${rez}`;
}

if(op=='/')

{
	let rez=x/y;
	paragraf.innerHTML+=`${rez}`;
}

x=0;
y=0;
rez=0;
});











