
let tacniOdgovori=['A','B','B'];
let submit=document.querySelector('submit');

let br=0;

let form=document.querySelector('form');
form.addEventListener('submit',e=>{

    e.preventDefault();


let odg1=form.q1.value;
let odg2=form.q2.value;
let odg3=form.q3.value;

let niz=[odg1,odg2,odg3];
let score=0;
tacniOdgovori.forEach((a,index)=>{

     if(a==niz[index])
     {

        score+=25;
     }


});




let unos=document.querySelector('#unos').value;

if(unos.length<6)
{

    score+=25;
}




let skriveni=document.querySelector('#nevidljiv');

skriveni.style.display='block';
skriveni.style.color='red';
skriveni.style.textAlign='center';
skriveni.style.fontSize='30px';
  let clock= setInterval(() => {

    if(br<score)

    {

        br++;
        skriveni.innerHTML=`Vas skor je ${br}`;
    }

    else
    {
        clearInterval(clock);
    }

            
        }, 20);
scrollTo(0,0)
});