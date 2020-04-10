
let btnSubmit=document.querySelector('#submit');
let ul=document.querySelector('#lista');
let li=document.querySelectorAll('li');
let btnPre=document.querySelector('#btnPre');
let btnPosle=document.querySelector('#btnPosle');

ul.addEventListener('click',e=>{



if(e.target.tagName=='LI'){
        

    e.target.remove();

            
    
    }
});



btnSubmit.addEventListener('click',(e)=>{
    let vrednost=document.querySelector('#unos').value;
    let liN=document.createElement('li');
    liN.innerHTML=vrednost;
    console.log(liN);

    if(btnPre.checked){

    ul.prepend(liN);
    
    }
    else if(btnPosle.checked){
        ul.appendChild(liN);
        
    }
});



