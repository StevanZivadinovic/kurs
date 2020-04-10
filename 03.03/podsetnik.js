
//uvek na vrhu JavaScripta da budu preuzeti elementi a dole da se radi s njima


let ulZadaci=document.querySelector('ul');
let liZadaci=document.querySelectorAll('li');


//da ne bi za svaki list item postavljali eventListenery mi cemo 
//da prodjemo forEach petljom kroz list iteme;


liZadaci.forEach(elem=>{


	elem.addEventListener('dblclick',()=>{//dblcklick - neophodno je da se dva puta klilkne za akciju. 
		//ako se umesto ovi praznih zagrada stavi promenljiva
		// ne moramo izand da koristimo forEach petlju!!!!!!!

		if (elem.style.textDecoration=='line-through') 

		{
			elem.style.textDecoration='none';
			elem.style.opacity='1';
		}

		else
		{



		elem.style.textDecoration='line-through';//precrta se stavka liste kad se klikne na nju
		elem.style.opacity='0.7';
		}


	});
});




































