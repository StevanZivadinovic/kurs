let forma=document.querySelector("#login-form");
let inputUsername=document.querySelector('#username');
let btnSubmit=document.querySelector('#submit');
let divGreska=document.querySelector('#greska');


let patternUsername=/^[a-zA-Z0-9]{5,15}$/;
inputUsername.addEventListener('keyup',e=>{//ovde umesto e moze i prazne zagrade. umesto inputUsername moglo
	//je da se pise form.username, ovo vazi samo za id-jeve.!!!!!!!!!!mnogo dobra caka

	if (patternUsername.test(inputUsername.value))

	 {
	 	inputUsername.setAttribute('class','success');//ovde mora da ide set atribute, nece da radi ako probas sa classList
	 	console.log(":)");
	 }

	 else


	 {
	 	inputUsername.setAttribute('class','error');
	 	console.log(":(");
	 }


});




forma.addEventListener('submit',e=>{//ovo radimo umesto btnSubmit.addEventListenr('click',())-isto je zapravo, samo
//posto pozzivas formu radis ovako. UVEK KOD FORME IDE OVA SINTAKSA , BAR ZA SAD

let username=inputUsername.value;
console.log(username);//sada kad kliknes na submit samo na trenutak se pojavi ispis u konzoli zato sto
//se forma sama osvezuje po difoltu. To sprecavaamo na sledeci nacin:
e.preventDefault();

//let patternUsername=/zdravo/;  //Da li sadrzi rec zdravo.Ako stavim slovo i odmah iza /zdravo/, ovako
// /zdravo/i onda vise nije osetljivo na velika i mala slova.U ovom redu mozes da unes bilo koji izraz
//u kosim zagradama da bi proverio tacnost


if (patternUsername.test(username))
 {

 	divGreska.textContent=`Podaci ispravno uneti. Vas username je ${username}`;
 	//ovo proveravaj u Regex101, pravila koja ovde vaze su ista kao tamo


 }

 else
 {

 	divGreska.textContent='Username sme sadrzati samo slova ili brojeve'
 }

 //console.log(username);
});



























