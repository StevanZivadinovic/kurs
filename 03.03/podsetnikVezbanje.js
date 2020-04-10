/* ovo je za Podsetnik1
let ul=document.querySelector('ul');
let nizLi=document.querySelectorAll('li');

let p=false;
nizLi.forEach(a=>{

a.addEventListener('click',()=>{

    if(p==false){
        
        p=true;
       a.style.textDecoration='line-through';  
    }

    else{

        a.style.textDecoration='none';
        p=false;
    }

  

});
 
});

*/
let nizUL=document.querySelector('ul');



nizUL.addEventListener('click',(e)=>{


if(e.target.tagName=='LI')

{

   e.target.remove(); 
}

});






let dodaj=document.querySelector('#submit');

let dodaj1=()=>{

let btn1=document.querySelector('#btnPre');
let btn2=document.querySelector('#btnPosle');
let li=document.createElement('li');

let vrednost=document.querySelector('#unos').value;



if(vrednost=="")

{

    alert(`unesi`);
}


else
{

    
if(btn1.checked)

{
    li.innerHTML=vrednost;
    nizUL.prepend(li);
}
else
{
    li.innerHTML=vrednost;
    nizUL.append(li);
}


}


vrednost=document.querySelector('#unos').value="";

};


dodaj.addEventListener('click',()=>{

dodaj1();

});


let vrednost1=document.querySelector('#unos');
vrednost1.addEventListener('keyup',(e)=>{


    if(e.keyCode==13)

    {
        dodaj1();

    }

});