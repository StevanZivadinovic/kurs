let unos=document.querySelector('#username');
let submit=document.querySelector('#submit');
let forma=document.querySelector("#login-form");
let text=document.querySelector('#greska');
let vr=unos.value;
let paterrnUsername=/^[a-zA-Z0-9]{5,15}$/;


unos.addEventListener('keyup',()=>{


        if(paterrnUsername.test(vr))

        {

            unos.setAttribute('class','dobro');//ovde mora da ide set atribute, nece da radi ako probas sa classList
	 	    console.log(":)");
        }

        else{

            unos.setAttribute('class','lose');
            console.log(':(');
        }


});




forma.addEventListener('submit',e=>{

    e.preventDefault();
    if(paterrnUsername.test(vr))

    {
        text.innerHTML=`Vas username je ${vr}`;
        console.log(`Vas username je ${vr}`);

    }

    else{
        text.innerHTML=`ne valja unos`;
        console.log(`ne valja unos`)
    }
});


