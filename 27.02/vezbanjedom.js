//Query selektor po imenu taga

let paragraf=document.querySelector('p');
console.log(paragraf);
let div=document.querySelector('div');
console.log(div);


//query selektor po imenu klase

let poklasi=document.querySelector('.test');
console.log(poklasi);

let poid=document.querySelector('#treci_paragraf');
console.log(poid);

poklasi=document.querySelectorAll('.test');
console.log(poklasi);

paragrafklasa=document.querySelectorAll('p.test');
console.log(paragrafklasa);


console.log(typeof paragrafklasa);
console.log(typeof poid);



paragrafklasa.forEach(a=>{

	console.log(a);

});

for(let i=0; i<paragrafklasa.length; i++)
{

	console.log(paragrafklasa[i]);
}



let dodavanje=document.querySelector('#treci_paragraf');
dodavanje.innerText+=` je najlepsi`;



//Selektovati sve paragrafe i u svakom od njih pridodati tekst „VAŽNO!!!“

let paragrafi=document.querySelectorAll('p');


for(let i=0; i<paragrafi.length; i++)


{

	if (i!=2) 

		{
			paragrafi[i].innerText+=`  VAzNO!!!`;
		}


}


//Ispisati kvadrate brojeva od 1 do n, svaki u novom paragrafu

for(let i=0; i<paragrafi.length; i++)

{
	if (i!=2) {

	paragrafi[i].innerText+=i**2;
}

}



/*Napraviti niz od najmanje tri imena.
Proći nizom i imena ispisati:

Svako u novom paragrafu*/

paragrafi=document.querySelectorAll('p');
let imena=['Jovana','Miljana','Milena'];

paragrafi.forEach((elem,index)=>{

	


elem.innerText+=`${imena[index]}`;
if (index==2) {
elem.innerHTML+=`<br><img src='kafa.png'><br>`;
}
});



//U listi kao stavke liste
let list=document.querySelector(`ul`);
imena.forEach((a,i)=>{

list.innerHTML+=`<li>${imena[i]}</li>`
});


//U jednoj koloni tabele




let tabela=document.querySelector(`table`);

imena.forEach((a,i)=>{

	tabela.innerHTML+=`<tr><td>${imena[i]}</td></tr>`;//moze da se radi 
	//i samo sa a, bez idexa


});




//dohvatamo svu decu body taga


let deca=document.body.children;
console.log(deca);




let niz=Array.from(deca);
niz.forEach(a=>{

console.log(a);
});


let decaliste=list.children;
let niz1=Array.from(decaliste);
niz1.forEach(a=>{

console.log(a);
});






let par=document.querySelector('p');
console.log(par.parentElement);
console.log(par.parentElement.parentElement);


console.log(par.parentElement.children);



//Braca/sestre elementi

console.log(par.nextElementSibling);
console.log(par.previousElementSibling);
console.log(par.parentElement.children);


















