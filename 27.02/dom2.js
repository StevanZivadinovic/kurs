//roditelj element

let par=document.querySelector('p');
console.log(par.parentElement); //div
console.log(par.parentElement.parentElement);//body


console.log(par.parentElement.children);//kolekcija sve dece 
//roditelja paragrafa(svih deteta lol)



//Braca/sestre elementi

console.log(par.nextElementSibling);
console.log(par.previousElementSibling);
console.log(par.parentElement.nextElementSibling.children);//ovo zadnje (children) 
//e kolekcija html tagova, ako
//bi hteli samo drugi clan kolekcije mozemo da napisemo children[1]; 
//sa kolekcijama ne mozemo jedino da koristimo
//forEach petlju, mozemo da pozivamo pojedine clanove i for petlju da koristimo.

//par.children- ovo je kolekcija tagova
//par.childern[0]-jedan tag-prvo dete HTML taaga(paragrafa u ovom slucaju)
//par.children[1]-jedan tag-drugo dete. znaci ovo 
//mozes da koristis dalje da dobijes
// roditeljski ili dete element od ovog elementa

console.log(par.parentElement.parentElement.previousElementSibling);

let div=par.parentElement;
let decaDiva=div.children;//ovo je kolekcija
for(let i=0; i<decaDiva.length; i++)
{

	console.log(decaDiva[i]);
}

//isto ovo samo bez uvodjenja dodatnih elemenata
for(let i=0; i<par.parentElement.children.length; i++)

{


	console.log(par.parentElement.children[i]);
}


/*par.parentElement.children.forEach(d=>{

	console.log(d);
}); */  //KOD HTML KOLEKCIJA NE RADI FOREACH PETLJA




//ukoliko zelimo foreach petlju kod kolekcija moramo kolekciju
// da konvertujemo u niz



let niz=Array.from(par.parentElement.children);//Array.from koristimo da prebacimo kolekciju u niz!!!!

niz.forEach(elem=>{

	console.log(elem);

});



//dodavanje atributa


let link=document.querySelector('a');
console.log(link.getAttribute('href'));

//ako vrednost atributa vec postoji ona se menja
link.setAttribute('href', 'http://wikipedia.org');




//ako ne postoji onda se postavlja
link.setAttribute('id','link1');
link.innerText="Wikipedia";
console.log(link);




//1.Svim linkovima na stranici postaviti da se otvaraju u novom tabu.
let linkovi=document.querySelectorAll('a');
let niz1=Array.from(linkovi);

for(let i=0; i<linkovi.length; i++)
{

	linkovi[i].setAttribute('target', '_blank');
}



//2.Svim slikama dodati alternativni tekst.
let slike=document.querySelectorAll('img');//ovde ne moras da konverujes u niz preko array, da je u pitanju 
//kolekcija onda bi morao

for(let i=0; i<slike.length; i++)

{

	slike[i].setAttribute('alt','slika kafe');
}

console.log(slike[0]);




//3.Svim paragrafima postaviti atribut style
// tako da budu obojeni ljubičastom bojom.



let paragrafi=document.querySelectorAll('p');//ne moras da konvertujes u niz preko array-a
paragrafi.forEach(a=>{

a.setAttribute('style','color:purple');
});




//Sve parne paragrafe na stranici obojiti zelenom bojom,
// a sve neparne paragrafe obojiti crvenom bojom.
paragrafi.forEach((par,i)=>{

	if (i%2==0)
	 {
	 	//par.setAttribute('style', 'color:green');
	 	//par.setAttribute('style', 'color:green; background-color:blue');//ovim ponistavas prethodni stil, prethodni red
		par.style.color='green';
		par.style.padding='15px';
		par.style.backgroundColor='blue'; //ovde ne pisemo kao u css backgeound-color nego backgroundColor
		console.log(par.style);//ovo je ustvari neki objekat koji sadrzi sve stilove koje pozivas sa .color,
		// .padding itd
		//par.style=link.style  //ceo stil jednog elementa se primenjuje na drugi
		//par.style.fontSize=link.style.fontSize;   //pojedinacni stil jednog elementa 
		//se primenjuje na drugi
		//par.style.fontSize=""; //kad hoces da obrises zadatu vrednost za neki stil
	 }

	 else
	 {

	 	par.setAttribute('style', 'color:red');
	 }

});



/*Svim linkovima na stranici postaviti padding na
5px, font size na 18px i text-decoration na none.
Parnim linkovima staviti zelenu pozadinsku boju i
ljubicastu boju teksta, a neparnim linkovima plavu
pozadinsku boju i belu boju teksta.*/






linkovi=document.querySelectorAll('a');


/*for(let i=0; i<linkovi.length; i++)
{

	linkovi[i].style.padding='5px';
	linkovi[i].style.fontSize='18px';
	linkovi[i].style.textDecoration='none';

	if (i%2==0)
	 {

	 	linkovi[i].style.backgroundColor='green';
	 	linkovi[i].style.color='purple';
	 }

	 else
	 {
	 	linkovi[i].style.backgroundColor='blue';
	 	linkovi[i].style.color='white';

	 }
}

*/

//moze i ovako


linkovi.forEach((link,i)=>{//u zagradi su dve
 //pormnljive, prva oznacava link druga poziciju

link.style.padding='5px';
link.style.fontSize='18px';
link.style.textDecoration='none';

if (i%2==0)

 {

 	link.style.backgroundColor='green';
 	link.style.color='purple';

 }

 else
 {
 	link.style.backgroundColor='blue';
 	link.style.color='white';

 }

});  


//DODAVANJE I BRISANJE KLASA

par.classList.add('error'); //dodavanje klase elementu
console.log(par.classList); //ovde ne bi mogo da koristis 
//includes ja bar mislim posto nije klasican niz
par.classList.remove('error');






















































































