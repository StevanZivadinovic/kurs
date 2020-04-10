//roditelj element

let dete=document.querySelector('p');
let roditelj=dete.parentElement;
console.log(roditelj.parentElement);
console.log(roditelj.nextElementSibling.nextElementSibling);

let up=roditelj.nextElementSibling.children;
let niz=Array.from(up);
niz.forEach(a => {
    console.log(a);
});
let niz1=['https://www.youtube.com/watch?v=Sg4nFSYIw28','https://www.youtube.com/watch?v=wEo_E6DnXMs','https://outlook.live.com/mail/0/junkemail/id/AQQkADAwATNiZmYAZC0wZDYwLWIzNmQtMDACLTAwCgAQANpkpkXo3y5FmrSP8dKPk%2Fw%3D'];

let link=document.querySelectorAll('a');
link.forEach((a,index)=>{
    a.setAttribute('href', niz1[index]);
    a.innerText=`linkovi do pesama`;

});

//1.Svim linkovima na stranici postaviti da se otvaraju u novom tabu.



for(let i=0; i<link.length; i++)
{

    link[i].setAttribute('target','_blank');
}


//2.Svim slikama dodati alternativni tekst.



let slike=document.querySelectorAll('img');
slike.forEach(a=>{

    a.setAttribute('alt','slika nije ucitana');
    console.log(a);
});



//3.Svim paragrafima postaviti atribut style tako da budu obojeni ljubičastom bojom.



let paragrafi=document.querySelectorAll('p');
paragrafi.forEach(a=>{

a.style.color='red';

});


//Sve parne paragrafe na stranici obojiti zelenom bojom,
// a sve neparne paragrafe obojiti crvenom bojom.


paragrafi.forEach((a,index)=>{

        if(index%2==0){


        
    a.style.color='green';
        }

        else{

            a.style.color='blue';
        }
    });


/*Svim linkovima na stranici postaviti padding na
5px, font size na 18px i text-decoration na none.
Parnim linkovima staviti zelenu pozadinsku boju i
ljubicastu boju teksta, a neparnim linkovima plavu
pozadinsku boju i belu boju teksta.*/


paragrafi.forEach((a,index)=>{

    a.style.padding='5px';
    a.style.fontSize='18px';
    a.style.textDecoration='none';

    if(index%2==0)
    {
        a.style.backgroundColor='green';
        a.style.color='purple';

    }

    else{
        a.style.backgroundColor='blue';
        a.style.color='white';

    }




 });


//DODAVANJE I BRISANJE KLASA

dete.classList.add('parag');
console.log(dete);
dete.classList.remove('parag');
console.log(dete);





/*Svim paragrafima čiji tekst sadrži reč error,
postaviti klasu na error, svim paragrafima čiji tekst
sadrži reč success, postaviti klasu na success. Ostale
kalse paragrafa ne modifikovati.

if(p.textContent.includes(’success’))*/


paragrafi.forEach((a,index)=>{


    if(a.textContent.includes('Error'))
    {

        a.classList.add('error');
    }

    if(a.textContent.includes('Success'))
    {

        a.classList.add('success');
    }
});


paragrafi.forEach(a=>{

    console.log(a);

});






//DODAVNJE I BRISANJE HTML TAGOVA





//dodati nov div tag dokumentu

let div=document.createElement('div');
document.body.appendChild(div);
div.innerHTML+=`neki tekst`;

//Formirati ul listu sa stavkama čiji je sadržaj proizvoljan
//tekst, i dodati je div elementu.

    let ul=document.createElement('ul');
    document.body.appendChild(ul);


    let li=document.createElement('li');

    let niz11=['milka','sneska','dragica'];
    let la="";
    niz11.forEach((a,index)=>{

        la+=`<li>${niz11[index]}</li>`;

    });

    ul.innerHTML+=`${la}`;
    console.log(ul);


    //Iz ul liste izbaciti prvu stavku.

    ul.removeChild(ul.children[2]);

    let noviLiItem=document.createElement('li');
    noviLiItem.innerHTML=`***`;
    ul.replaceChild(noviLiItem,ul.children[1]);
    
    
































