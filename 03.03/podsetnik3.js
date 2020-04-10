
//uvek na vrhu JavaScripta da budu preuzeti elementi a dole da se radi s njima


let ulZadaci=document.querySelector('ul');
let liZadaci=document.querySelectorAll('li');
let btnDodaj=document.querySelector('button');
let inputUnos=document.querySelector('#unesi');

//da ne bi za svaki list item postavljali eventListenery mi cemo 
//da prodjemo forEach petljom kroz list iteme;


/*liZadaci.forEach(elem=>{  ovo ovde je objasnjeno u primeru posle ovog odmah


	elem.addEventListener('click',(e)=>{

		//dblcklick - neophodno je da se dva puta klilkne za akciju. 
		//console.log(e.target);//ovo target je jedna od stavki koja se nalazi u okviru e elementa
		//e.remove(); 
		e.target.remove(); //isto je  kao u liniji iznad
		console.log(`kliknuto na li`);
		//e.stopPropagation();//ovo kad uneses program ne konsultuje dalje roditeljski element, 
		da li i on ima
		//neki event da se aktivira!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	});

}); */


//ovo je za brisanje kad se klikne

//liZadaci.forEach(a=>{

	ulZadaci.addEventListener('click',(e)=>{//e posmatra celu ul listu i sve li u njemu i posmatra ih
		//kao zasebne celine. Tako da ako kliknes sad na medju prostor izmedju dva li-a on ce da
		//obrise celu listu. Ako kliknes samo na li item izbrisace samo jedan li item, bas taj na koji
		//si kliknuo. Znaci e hvata kliknuti element nezavisno dal se on nalazi u nekom vecem roditeljskom\
		//elementu. e se ne krece kroz nizove ili slicno vec samo hvata jedan element i onda mozes da radis
		//s tim elementom neke dalje stvari. ovde si mogo da radis i sa li elementima, da ubacis
		//promenljivu liZadaci, s tim sto bi ona morala da ide u jos jednu dodatnu for Eachpetlju
		//a ovde gde je sad ulZadaci bila bi stavljena promenljiva definisana 
		//u toj petlji, npr a promenljiva. Vidi red iznad 

	//console.log(e);
	//console.log(e.target);
	console.log(e.target.tagName);

	if (e.target.tagName=='LI')

	 {

	 	e.target.remove();
	 }

//console.log('kliknuto na ul');//ovo se ispisuje ako u prethodnoj 
//petlji nije isposano e.stopPropagation
	});
//});



/*li.forEach(a=>{



a.addEventListener('click',()=>{
   a.remove();

});
}); moze i ovako da se brisu stavke liste */






let dodavanjeItema=()=>{


	let noviItem=document.createElement('li');
	let noviZadatak=document.querySelector('input').value;
	let rbDodajNaPoc=document.querySelector('#dodajNaPocetak');
	let rbDodajNaKraj=document.querySelector('#rbDodajNaKraj');
	//console.log(rbDodajNaPoc.checked);


	//console.log(noviZadatak);

	if (noviZadatak=="")
		
	{//izbaci alert
	 	alert('Morate uneti neki tekst');

	}

	 else
	{	//kreiranje novog zadatka
	 	//noviItem.textContent='Nova obaveza';
		noviItem.textContent=noviZadatak;

		//ulZadaci.appendChild(noviItem); //dodaje na kraj liste
		ulZadaci.prepend(noviItem);//dodaje na pocetak liste. 
	//java realizuje poslednju komandu od ove prethodne dve, tj ako ih uneses obe zadnja ce da radi




		//da li dodati na pocetak ili na kraj liste
		if (rbDodajNaPoc.checked)
		 {
		 	ulZadaci.prepend(noviItem);
		 }

		 else
		 {

		 	ulZadaci.append(noviItem);
		 }
	}


	//BRISANJE IZ INPUT POLJA
	document.querySelector('input').value="";//brise vec uneti sadzaj iz input polja!!!! moras ovako celu sintaksu, nece samo naziv
	//promenljive jednako ""


};

//dodaje se i kad se klikne na dugme "dodaj" i kad se udari enter

btnDodaj.addEventListener('click',()=>{
dodavanjeItema();
});

inputUnos.addEventListener('keyup',(e)=>{

//Za enter je "kljuc" broj 13

if (e.keyCode==13)
 {

 	dodavanjeItema();
 }


});

























