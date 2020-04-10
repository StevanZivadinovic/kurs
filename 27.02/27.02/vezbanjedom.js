//Query selektor po imenu taga

let a=document.querySelector('p');
console.log(a);

//query selektor po imenu klase
let b=document.querySelector('p.test');
console.log(b);


let sviParagrafi=document.querySelectorAll('p');
console.log(sviParagrafi[2]);
console.log(typeof sviParagrafi)



sviParagrafi.forEach(a=>{

console.log(a);

});


//VEZBANJE



//Selektovati sve paragrafe i u svakom od njih pridodati tekst „VAŽNO!!!“


sviParagrafi.forEach(a=>{
	a.innerText=`VAZNO!!!`;

});

//Ispisati kvadrate brojeva od 1 do n, svaki u novom paragrafu

sviParagrafi.forEach((a,index)=>{
let kv=index*index;
console.log(kv);
a.innerText+=`Neki broj ${kv}`;

});



/*Napraviti niz od najmanje tri imena.
Proći nizom i imena ispisati:

Svako u novom paragrafu

 */

let imena=['Jovana','Miljana','Milena'];
sviParagrafi.forEach((a,index)=>{


a.innerText+=`  ${imena[index]}`;

});
	

//U listi kao stavke liste

let ul=document.querySelector('ul');
imena.forEach((a,index)=>{

ul.innerHTML+=`<li>${imena[index]}</li>`;

});

//U jednoj koloni tabele


let tabela=document.querySelector('table');
let sadrzaj="";
imena.forEach(ime=>{

	let item=`<tr><td>${ime}</td></tr>`;
	sadrzaj+=item;
	
});
tabela.innerHTML+=sadrzaj;





//dohvatamo svu decu body taga

let deca=document.body.children;
console.log(deca);


let niz=Array.from(deca);
niz.forEach(a=>{

	console.log(a);

});










