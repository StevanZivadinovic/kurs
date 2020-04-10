//klikom na posalji preuzimamo sta je cekirano

let form=document.querySelector('form');
let tacniOdgovori=["B","A","B","B"];//ovo kucamo tek kad dodjemo do nivoa da mozemo da preuzmemo odgovore
//od korisnika
let div=document.createElement('div');
div.classList.add('intro');
let text=document.createElement('div');
text.classList.add('text');
let h2=document.createElement('h2');
text.appendChild(h2);
div.appendChild(text);

let whereChild=document.body.children[1];
document.body.insertBefore(div,whereChild);//ubacuje div pre whereChild promenljive koju smo definisali u redu iznad
div.style.display='none';

form.addEventListener('submit', event=>{//kad je kliknuto na submit pokupili smo odgovore odg1modg2...


	event.preventDefault();//nemoj da radis ono sto je difoltno, to znaci ovo napisano. Ono sto je difoltno 
	//za formu jeste da se
	//nakon submita prikupljaju podaci sa forme i salju na server. 
	//sad to sprecavamo, nego ostajemo na stranici




	//sad je potrebno odrediti koji radio je selektovan
	//Generalni nacin, kada smo u formi:
/*

	let radios=document.querySelectorAll('.q1');
	radios.forEach(radio=>{

		if (radio.checked) {

			console.log(radio.value);
		}
	});
*/

	//Za forme:
	//1) U JS kodu -objekat forme (proemenljiva form)
	//2) Svi elementi forme u HTML-u moraju da imaju name atribut

	let odg1=form.q1.value;//ovde imamo bas vrednost onog buttona koji smo cekirali,kod forme ovako uzimaj uvek vrednost za
	//radio button-e;
	let odg2=form.q2.value;
	let odg3=form.q3.value;
	let odg4=form.q4.value;
	

	
	let odgovori=[odg1,odg2,odg3,odg4];
	let score=0;
	odgovori.forEach((odgovor,index)=>{

		if (odgovor==tacniOdgovori[index]) 

		{
			score+=20;
		}


	});
	let nadimak=document.querySelector('#nadimak').value;

	if (nadimak.length>6) 

	{

		score+=20;
	}

	
	div.style.display='block';//vise nije sakriven vec se vidi
	scrollTo(0,0);//ovo sluzi da te baci na deo ekrana koji hoces. U zagradama su x i y koordinata ekrana
	//ovo sto smo bas uneli je sam pocetak stranice
	//h2.textContent=`vas odgovor je ${score}%`;
	let broj=0;
	let clock=setInterval(()=>{
		h2.textContent=`vas odgovor je ${broj}%`;

		if (broj<score)
		 {
		 	broj++;
		 }

		 else
		 {
		 	clearInterval(clock);
		 }
	}, 10);


});

























