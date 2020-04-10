/*Uvesti globalnu promenljivu prosek koja predstavlja niz od 12 brojeva, 
u kojoj su smeštene prosečne temperature za svaki mesec u godini.
 U objektu dan napisati metodu koja ispituje da li je prosečna 
 temperatura iznad proseka za taj mesec ili ne.*/


let prosek=[0.4, 3.9, 5.6, 11, 18.1, 20.1, 22.1, 21.4,18.5, 11.4, 4.5, 2.4];




let dan={

	datum: '2020/02/24',//ovako se obicno unosi datum u bazi podataka
	Kisa: false,
	sunce: true,
	oblacno: true,
	temperature:[-2,3,7,12,12,6,2,-1],
	//prosecna temperatura na dan
	prosek:function() {
		let temp=this.temperature;
		let suma=0;
		temp.forEach(t=>{
			suma+=t;

		});
		let p=suma/temp.length;
		return p;
	},
	//koliko je bilo merenja sa natprosecnom temperaturom
	brojNatprosek:function(){

		let p=this.prosek();
		let temp=this.temperature;
		let broj=0;
		temp.forEach(t=>{
			if (t>p)

			 {

			 	broj++;
			 }

		});

		return broj;
	},
	//prebrojava koliko je bilo merenja sa maksimalnom temperaturom
	brojMaksimalnih:function(){

		let temp=this.temperature;
		let max=temp[0];
		for(let i=1; i<temp.length; i++)
		{
			if (temp[i]>max)
			 {

			 	max=temp[i];
			 }
		}
		let broj=0;

		temp.forEach(t=>{

			if(t==max){

				broj++;
			}


		});
		return broj;
	},

	//prima dva parametra koji predstavljaju dve temperature
	// a koji broji koliko je merenja bilo izmedju ove dve temperature
	brojIzmedju: function(t1,t2){
		if (t1>t2) //ovo radimo ako je t1 vece od t2
		{

			let t=t1;
			t1=t2;
			t2=t;
		}
		let broj=0;
		let temp=this.temperature;
		temp.forEach(t=>{
			if (t1<=t && t<=t2)
			 {

			 	broj++;
			 }

		});
		return broj;//uvek posle forEach petlje ide return, bar ja mislim :);
	},

	//Proverava da li je u većini dana temperatura bila iznad proseka ili ne.
	iznadProsek:function(){


		let p=this.prosek();
		let temp=this.temperature;
		let brojIznad=0;
		let brojIspod=0;
		temp.forEach(t=>{

			if (t>=p) 
			{

				brojIznad++;
			}

			else
			{

				brojIspod++;
			}
			});
			if (brojIznad>brojIspod)
			 {

			 	return true;
			 }

			 else
			 {

			 	return false;
			 }

		
	},

	//Proverava da li je dan bio leden. Za dan se smatra da je leden ukoliko nijedna
	// temperatura izmerena tog dana nije iznosila iznad 0 stepeni.
	//ovo pazi, bitno je dosta, objasnjava kako se prekida niz kad se pojavi prva zeljena vrenost


	ledeniDan:function(){

		let temp=this.temperature;
		/*temp.forEach(t=>{
			if (t>=0)//cim je jedna temperatura iznad 0 ulazi se u petlju
			 {
			 	return false;//return vraca false i prekida funkciju, 
			 	//tj ne dozvoljava dalje ispitivanje,
			 	// prekida petlju!!!
			 }  //ovo moze ako je for petlja, ne radi ovde, probali smo ali ne radi za forEach

		});*/

		for(let i=0; i<temp.length; i++)
		{

			if (temp[i]>=0)
			 {

			 	console.log(temp[i]);
			 	return false;
			 }
		}
		return true;//ako se nijednom ne udje u petlju vratice se samo vrednost true; tj dan je leden
	},

//Proverava da li je dan bio tropski. Za dan se smatra da je tropski ukoliko
// nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena.
	tropskiDan:function(){

		let temp=this.temperature;
		let tropski=true;//pretpostavljamo na pocetku da je dan tropski;
		temp.forEach(t=>{

			if (t<24)
			 {
			 	tropski=false;
			 }
		});
		return tropski;
	},

	//Proverava da li je dan bio nepovoljan za meteropate. 
	//Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni.
	//ovde u svakom trenutku posmatramo dva elementa istovremeno, npr 1. i 2. element pa 2. i 3. itd.


	nepovoljan: function()
	{
		let temp=this.temperature;
		for(let i=0; i<temp.length-1; i++)//ovde mora da se ide do pretposlednjeg elementa zato sto poslednji element
			//nema sledbenika
		{

			if (Math.abs(temp[i+1]-temp[i])>8)//ovde moramo da koristimo apsolutnu vrednost, "Math.abs"
			 {
			 	return true;
			 }

			 //ako bi ovde stavio else i u njemu return true, to ne bi bilo dobro, jer bi mi ono izbacilo true ili false
			 //ali ne bi ispitivalo dalje, posto je petlja stopirana return-om.
		}

		return false;


	},

	/*Proverava da li je dan bio neuobičajen. Za dan se kaže da je neuobičajen 
	ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, 
	ili je bilo i kišovito i oblačno i sunčano.*/

	neuobicajen1:function()
	{
		let tempispodminuspet=false;
		let temp=this.temperature;
		temp.forEach(t=>{


		

			if (this.kisa==true && t<-5)

			{

				tempispodminuspet=true;
			}

			if (this.oblacno && t>25)

			 {

			 	tempispodminuspet=true;
			 }

		});

		if (this.kisa && this.oblacno && this.sunce)

		 {

		 	tempispodminuspet=true;
		 }

		 return tempispodminuspet;
	},
	//Drugi deo zadatka, vezano za globalnu promenljivu prosek.
	//U objektu dan napisati metodu koja ispituje da li
	// je prosečna temperatura iznad proseka za taj mesec ili ne.
	iznadProsekZaMesec: function()
	{

		let mesecString=this.datum.substr(5,2)
		//console.log(mesecString);
		let mesecCeoBroj=parseInt(mesecString);//prebacuje string u ceo broj;
		//console.log(mesecCeoBroj);// 2 sam dobio u konzoli
		let p= prosek[mesecCeoBroj-1];//prosecna temperatura za mesec
		let p1=this.prosek();//prosecna temperatura za dan. pozvana funkcija prosek koju smo prethodno gore
		// koristili
		if (p1>p)
		 {

		 	return true;

		 }

		 else
		 {
		 	return false;//ovakvo if-else grananje u metodama u forEach petljama ne treba koristiti, valjda
		 }
	}



};
console.log(dan.temperature);
console.log(dan.prosek());
console.log(dan.brojNatprosek());
console.log(dan.brojMaksimalnih());
console.log(dan.brojIzmedju(4,9));
console.log(dan.brojIzmedju(-3,5));
console.log(dan.iznadProsek());
console.log(dan.ledeniDan());
console.log(dan.tropskiDan());
console.log(dan.nepovoljan());
console.log(dan.neuobicajen1());
console.log(dan.iznadProsekZaMesec());





//Formirati niz objekata tipa dan.

let dan1={

datum:'2020/02/20',
kisa: false,
oblacno:true,
sunce: true,
temperature:[-2,1,3,7,11,11,5]




};

let dan2={

datum:'2020/03/20',
kisa: true,
oblacno:true,
sunce: true,
temperature:[2,7,8,11,11,13,5,4]




};




let dan3={

datum:'2020/02/22',
kisa: true,
oblacno:false,
sunce: false,
temperature:[-7,-4,2,0,-2,-3]




};



let merenjaDani=[dan1,dan2,dan3];



/*Napisati arrow funkciju koja ispisuje datum u kome je naviše puta izmerena temperatura. 
Ukoliko ima više takvih datuma, ispisati:
prvi takav,
poslednji takav.*/



let prviNajviseMerenja=niz=>

{

	let max=niz[0].temperature.length;
	let index=0;
	niz.forEach((dan,i)=>{//ovo zapravo znaci dani[i]=dan;

		if (dan.temperature.length>max)

		 {

		 	max=dan.temperature.length;
		 	index=i;
		 }



	});

	console.log(niz[index].datum);//izbacuje prvi dan kad se javilo najvise merenja;
}

prviNajviseMerenja(merenjaDani);




//poslednji takav

let poslednjiNajviseMerenja=dani=>

{

	let max=dani[0].temperature.length;
	let index=0;
	dani.forEach((dan,i)=>{//ovo zapravo znaci dani[i]=dan;

		if (dan.temperature.length>=max)//samo je ovde razlika nego kod prethodne funkcije, stavljeno je >=

		 {

		 	max=dan.temperature.length;
		 	index=i;
		 }



	});

	console.log(dani[index].datum);//izbacuje prvi dan kad se javilo najvise merenja;
}

poslednjiNajviseMerenja(merenjaDani);














