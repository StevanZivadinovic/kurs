//Query selektor po imenu taga

let paragraf=document.querySelector('p');//selektuje samo prvi element na koji naidje
console.log(paragraf);
let div=document.querySelector('div');
console.log(div);


//query selektor po imenu klase
let klasaTest=document.querySelector('.test')//stavljena je tacka posto je tacka oznaka za klasu
console.log(klasaTest)


//query selektor po imenu klase ponovo
let klasaTestParagraf=document.querySelector('p.test');
console.log(klasaTestParagraf);


//query selektor po id-u
let idParagraf=document.querySelector('#treci_paragraf');
console.log(idParagraf);



//selektovanje vise elemenata

let sviParagrafi=document.querySelectorAll('p');//node lista je objekat, 
//ovde smo formirali jednu node listu;
console.log(sviParagrafi);



console.log(typeof sviParagrafi);

//pristupanje elementu Node liste

console.log(sviParagrafi[0]);


//kretanje kroz Node listu

sviParagrafi.forEach(elem=>{

console.log(elem);

});


//
let klasaTestDoc=document.getElementsByClassName('test');
console.log(klasaTestDoc);


//neuspelo kretanje forEach petljom kroz HTML kolekcijom-ne mozes
// da se kreces kolekcijom preko petlje

/*klasaTestDoc.forEach(elem=>{

console.log(elem);
}); */


console.log(klasaTestDoc[0]); //ali mozes da pristupas 
//pojedninacnim elementima i mozes da koristis for petlju za kretanje

for(let i=0; i<klasaTestDoc.length; i++)

{

	console.log(klasaTestDoc[i]);
}


//innertext - dodavanje tekstualnog sadrzaja na stranicu
paragraf.innerText +=`zdravo`;
//inerHTML-dodavanje HTML sadrzaja
paragraf.innerHTML+=`<span>Kako si</span>`



//VEZBANJE



//Selektovati sve paragrafe i u svakom od njih pridodati tekst „VAŽNO!!!“

sviParagrafi.forEach(elem=>{

	elem.innerHTML+='<b>VAZNO!!</b>';
});



//Ispisati kvadrate brojeva od 1 do n, svaki u novom paragrafu


sviParagrafi.forEach((elem,index)=>{//kod visuelstudiokoda ovde bi sad pobeleo index a elem bi bio siv
	//posto nije koriscen

console.log(index);

});


sviParagrafi.forEach((elem,index)=>{//kod visuelstudiokoda ovde bi sad pobeleo i index i elem

elem.innerText+=`${index}`;

});

//kad hoces kvadrat indexa

sviParagrafi.forEach((elem,index)=>{
let kv=index*index;//moze i (index+1)**2
elem.innerText+=`${kv}`;

});


/*Napraviti niz od najmanje tri imena.
Proći nizom i imena ispisati:

Svako u novom paragrafu



 */





let imena=['Jovana','Miljana','Milena'];

sviParagrafi.forEach( (elem,index)=>{


elem.innerText+=`${imena[index]}`;

});


//U listi kao stavke liste
let lista=document.querySelector('ul');
imena.forEach(elem=>{

let item=`<li>${elem}</li>`;
lista.innerHTML+=item;
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
let potomci=document.body.children;//samo kod body-a izgleda da mora
//da se otkuca document, kod ostalih tagova ne, bar ja mislim
console.log(potomci);	

//selektovanje sve dece jednog roditelja

//ne mozes da se kreces kroz kolekciju
//zato radis
//HTML kolekcija je ovo, pa ne moze direktno petlja
//Za forEach petlju moramo HTML kolekciju da konvertujemo u niz
let niz=Array.from(potomci);
niz.forEach(elem=>{

console.log(elem);


});

//dohvatamo svu decu ul liste
//let lista=document.querySelector('ul'), ovako moras da radis

let decaListe=lista.children;//da bi ovde mogo da pozoves promenljivu lista,
// mi smo to vec prethodno uradili pa sad ne mora
let nizDecaListe=Array.from(decaListe);
nizDecaListe.forEach(elem=>{

console.log(elem);
});

































































