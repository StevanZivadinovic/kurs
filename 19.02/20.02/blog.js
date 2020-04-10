let blog={

	title:'moj prvi blog', 
	content:'Neki tekst',
	author:'JM'//ovde se ne stavlja ;(tacka zarez)
};

console.log(blog);
console.log(typeof 5);
console.log(typeof 'jelena');
console.log(typeof true);
console.log(typeof blog);



//pristupanje osobini

//1. nacin 
console.log(blog.title);

//2.drugi nacin

console.log(blog['title']);





//izmena neke osobine 1.nacin

blog.title='moj drugi blog';
console.log(blog.title);



// 2. nacin

blog['title']='moj drugi omoiljeni blog';
console.log(blog.title);




//predavanje 21.02.

let blog1={
	title:'Blog1!',
	content:'Tekst 1',
	likes:0,
	dislikes:50


};

console.log(blog1);


let blog2={

	title:'Blog2!',
	content:'Tekst 2',
	likes:20,
	dislikes:20
};


let blog3={


	title:'Blog3?',
	content:'Tekst 3',
	likes:5,
	dislikes:50


};



let user={

	username:'JohnDoe',
	age:30,
	blogs:['Title1','Title2','Title3']

}



console.log(user.username);


//ako hocu da ispisem svaki deo niza 'blogs', radim sledece:
let arrBlogs=user.blogs;//moras ovo da uradis da bi kasnije mogo da uzmes neki element iz niza npr za prvi 
//eleement da ispise arrBlogs[i]; ne mozes da napises user.blogs[i];
//ispis prethodnog niza

for(let i=0; i<arrBlogs.length; i++)

{

	console.log(`Naslov bloga je ${arrBlogs[i]}`);
}




//ispis niza koriscenjem metoda `forEach` petljom (cita se forič);


//1) sintaksa:
// "nazivNiza".forEach("arrow funkcija");






arrBlogs.forEach(blog=>{


	console.log(`Naslov bloga je ${blog}`);
});




//kreiranje metoda unutar objekta





 user={

	username:'JohnDoe',//ovo je jedan properti unutar objekta
	age:30,
	blogs:['Title1','Title2','Title3'],
	login:function(){//ovaj red i ovo ispod je metod, koji se nalazi unutar objekta,
	// to je ustvari funkcija unutar objekta
		//rec function() se uvek koristi za formiranje funkcije unutar objekta

		console.log('ulogovani ste')
	},
	logBlogs:function(){
		console.log(this.blogs);//ako zelimo da pristupimo u okviru objekta njegovim propertijima
	
	}
};



user.login();




//Poziv unutar metoda
user.logBlogs();
console.log(this);





//foreach petlja unutar objekta

user={

	username:'JohnDoe',//ovo je jedan properti unutar objekta
	age:30,
	blogs:['Title1','Title2','Title3'],
	login:function(){//ovaj red i ovo ispod je metod, koji se nalazi unutar objekta, to je ustvari funkcija unutar objekta

		console.log('ulogovani ste')
	},
	logBlogs:function(){
		this.blogs.forEach(b=>
		{
			console.log(b);

		});//ako zelimo da pristupimo u okviru objekta njegovim propertijima
	
	}
};




user.logBlogs();




//objekti u nizu ili niz objekata

let blogs=[blog1, blog2, blog3];

//Iteracija forEach petljom

blogs.forEach(n=>
	{
	console.log(n);



});



//iteracija foreach nizom objekata-ispisivanje naslova


console.log(blog1.title);//ispisivanje naslova za blog1



blogs.forEach(blog=>{//ovde smo umesto promenljive blog mogli da stavimo bilo koji drugi naziv. Promenljiva
	//je nebitna, tj nebitan je naziv promenljive, cim stavis forEach, 
	//i bilo kakvu promenljivu uvedes u arrow funkciju
	//ti ustvari prolazis kroz ceo niz i uzimas sta je u njemu.

	console.log(blog.title);//dopisano je ovde .title da bi pristupio samo naslovima u objektima



});



//iteracija for petljom, isti zadatak kao ovaj prethodni


for(let i=0; i<blogs.length; i++)

{



	//console.log(blogs[i]);
	console.log(blogs[i]['title']);//moze i ovako
}





//Napraviti arrow funkciju kojoj se prosleđuje niz
//objekata, a ona vraća ukupan broj lajkova

let ukupnolajkova=blogs=>{
let ukupno=0;
blogs.forEach(elem=>{//samo sa ovim ovo nije arrow funkcija nego 
	//samo forEach petlja, koja tek treba da se stavi u arrow funkciju



	ukupno+=elem.likes;

});

//console.log(ukupno); umesto ovoga posto je funkcija stavljas:
return ukupno;
}

console.log(ukupnolajkova(blogs));//ovde je blogs ustvari niz objekata





//Napraviti arrow funkciju kojoj se prosleđuje niz
//objekata, a ona vraća prosečan broj lajkova



let prosecnoLajkova=niz=>

{
	let ukupno=ukupnolajkova(niz);
	let broj=niz.length;
	let prosek=ukupno/broj;
return prosek;

}

console.log(prosecnoLajkova(blogs));



/*Napraviti arrow funkciju kojoj se prosleđuje niz
objekata, a ona ispisuje sve one naslove blogova koji
imaju više pozitivnih nego negativnih ocena*/




let visePozitivnih=niz=>

{
	niz.forEach(elem=>
	{
		let poz=elem.likes;
		let neg=elem.dislikes;
		if (poz>neg) 

		{

			console.log(elem.title);
		}



	});


}
visePozitivnih(blogs);




//Napisati arrow funkciju kojoj se prosleđuje niz objekata
//a ona ispisuje sve naslove koji se završavaju uzvičnikom



let uzvicnik=niz=>

{
	niz.forEach(el=>

	{
		let naslov=el.title;

			if(naslov.endsWith('!'))

			{
				console.log(naslov);
			}



	});

}
uzvicnik(blogs);




//OBJEKAT U OBJEKTU



let user1={
	username:`JelenaMatejic`,
	age: 25,
	blogs:[blog1,blog2,blog3],


	logBlogs:function(){

		this.blogs.forEach(b=>{    //ovde mora da stoji i this zato sto 
			//se nalazimo u objektu;
			console.log(b);//bez title bi mi ispisao svaki
			// deo blogs-a, odnosno sve podatke o svakom blogu u nizu	
		});//ovako mora se se zavrsi forEach petlja
	},

	logTitleBlogs:function(){


		this.blogs.forEach(b=>{
			console.log(b.title);
		});
	}

};

//console.log(user1);
user1.logBlogs();
user1.logTitleBlogs();




//Napraviti niz korisnika gde svaki od korisnika sadrži niz
//blogova. Svaki blog u ovom nizu je objekat.




let user2={

	username:`PeraPeric`,
	age: 16,
	blogs:[blog1,blog2,],

};


let user3={

	username:`AnaAntic`,
	age: 29,
	blogs:[blog1,blog3,],

};

console.log(user3);


//niz korisnika

let users=[user1, user2, user3];//ovim je resen ovaj deo zadatka gore navedenih




//Ispisati imena onih autora koji imaju ispod 18 godina
let mladjiod18=niz=>{
niz.forEach(elem =>{

	let godine=elem.age;

	if (godine<18)
	 {

	 	console.log(elem.username);
	 }

});

}

mladjiod18(users);




//moze i bez arrow funkcije


users.forEach(elem =>{

	let godine=elem.age;

	if (godine<18)
	 {

	 	console.log(elem.username);
	 }

});



//Ispisati naslove onih blogova koji imaju više od 50
//lajkova


let popularniBlogovi=korisnici=>
{
	korisnici.forEach(k=>{

		let nizblogova=k.blogs;//uzimas za svakog korisnika sve njegove blogove(niz blogova);

			nizblogova.forEach(b=>{

				let lajkovi=b.likes;//uzimas lajkove iz svakog pojedinacnog bloga jendog korisnika(valjda);
				if (lajkovi>50) 
				{

					console.log(b.title);
				}





									});



						});


}
popularniBlogovi(users);






//Ispisati sve blogove autora čiji je username ’JelenaMatejic’

let blogoviAutora=korisnici=>{

	korisnici.forEach(k=>{
		//ako je korisnik JelenaMatejic teko onda ispisati njegove blogove
		if (k.username=="JelenaMatejic") 
		{
			let nizBlogova=k.blogs;
			nizBlogova.forEach(b=>{

				console.log(b.title);


			});
		}

	});

}

blogoviAutora(users);




//slicno kao prethodno nego se unosi i ime i korisniici

 blogoviAutora=(korisnici,ime)=>{

	korisnici.forEach(k=>{
		//ako je korisnik JelenaMatejic teko onda ispisati njegove blogove
		if (k.username==ime) 
		{
			let nizBlogova=k.blogs;
			nizBlogova.forEach(b=>{

				console.log(b.title);


			});
		}

	});

}

blogoviAutora(users, 'JelenaMatejic');







//Ispisati imena onih autora koji imaju ukupno više od 100
//lajkova za blogove koje su napisali


let popularniAutori=autori=>{

	autori.forEach(a=>{
		//ako ovde stavimo sumLikes=0//dobicemo sumu za sve korisnike ukupno
		let nizBlogova=a.blogs;
		let sumLikes=0;//za svakog pojedinacnog autora a, je pocetna vrednost lajkova 0, kad hocemo po autorima sumu;
		nizBlogova.forEach(b=>{
			sumLikes+=b.likes;//ovo nece da vrati sumu svih lajkova svih autora, vec samo sume lajkova po autorima
			//(za svakog autora pojdinacna suma)

		});

		if (sumLikes>100)

		 {

		 	console.log(a.username);
		 }
	});

}

popularniAutori(users);



//isti zadatak odozgo samo je u okviru funkcije pozvana jedna funkcija od
// ranije da bi se skratio postupak malo



 popularniAutori=autori=>{

	autori.forEach(a=>{
		//ako ovde stavimo sumLikes=0//dobicemo sumu za sve korisnike ukupno
		let nizBlogova=a.blogs;
		let sumLikes=ukupnolajkova(nizBlogova);

		if (sumLikes>100)

		 {

		 	console.log(a.username);
		 }
	});

}

popularniAutori(users);




//Ispisati naslove onih blogova koji imaju natprosečan broj
//pozitivnih ocena i ispodprosečan broj negativnih ocena


let superBlog=niz=>{
	let sumlikes=0;//suma svih lajkova svih blogova
	let sumdislikes=0;
	let br=0;//broj svih blogova

	//ukupno lajkova, dislajkova i blogova
	niz.forEach(a=>{

		let nizBlogova=a.blogs;
		nizBlogova.forEach(b=>{
			br++;
			sumlikes+=b.likes;
			sumdislikes+=b.dislikes;



		});

	});
	//prosek lajkova i dislajkova

	let avgLikes=sumlikes/br;
	let avgDislikes=sumdislikes/br;
	

	//prolazimo svim blogovima(od autora do autora), pa prolazis po blogovima pojedinacnih autora
	niz.forEach(a=>{
let nizBlogova=a.blogs;
nizBlogova.forEach(b=>{
	if (avgLikes<b.likes && avgDislikes>b.dislikes)//ispitujemo po zeljenim parametrima
	 {

	 		console.log(b.title);

	 }

				});



	});
}


superBlog(users);




/*Napraviti objekat dan koji sadrži atribute:
Datum
Kiša (true/false)
Sunce (true/false)
Oblačno (true/false)
Vrednosti temperature (niz izmerenih temperatura tog dana)*/


//Napraviti metod prosecnaTemperatura koji računa i vraća
// prosečnu temperaturu za niz tempetarura (koji je dat u objektu)

let dan={

	Datum: '23.02.2020',
	Kisa: true,
	Sunce: false,
	Oblacno: true,
	Vrednostitemperature: [4,10, 14, 12,7,3],
	prosecnaTemperatura:function(){

		let sum=0;
		let br=0
		this.Vrednostitemperature.forEach(b=>{
			sum+=b;
			br++;

		});
		let prosek=sum/br;
		return prosek;
	},

};

console.log(dan.prosecnaTemperatura());



//Napraviti niz dana dani koji sadrži nekoliko dan objekata
	let dan1={
		Datum: '24.02.2020',
		Kisa: true,
		Sunce: true,
		Oblacno: true,
		Vrednostitemperature: [9,10, 19, 12,10,5]

	};
	let dan2={

	Datum: '25.02.2020',
		Kisa: false,
		Sunce: true,
		Oblacno: false,
		Vrednostitemperature: [4,15, 25, 14,13,5]
	};
	let dan3={

	Datum: '26.02.2020',
		Kisa: false,
		Sunce: true,
		Oblacno: true,
		Vrednostitemperature: [9,10, 20, 12,11,5]
	}

	let dani=[dan1,dan2,dan3];

	console.log(dani);



//Napraviti arrow funkciju maksTemperatura kojoj se prosleđuje 
//niz dana a ona vraća maksimalnu temperaturu koja je izmerena u tim danima.



let maksTemperatura=niz=>{
let max=-1000;

	niz.forEach(a=>{
		a.Vrednostitemperature.forEach(b=>{
			if(b>max)
			{

				max=b;
			}

		});
			
			

	});
	return max;

}

console.log(maksTemperatura(dani));
