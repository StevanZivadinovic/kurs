//Klikom na dugme, prikazati poruku u konzoli nakon 2
//sekunde, i nakon pola sekunde.

/*

let ispis=document.querySelector('#btn1');
let zaustav=document.querySelector('#btn2')
let a;
let b;
ispis.addEventListener('click',()=>{

    a= setTimeout(()=>{

            console.log(`ispis2`);

    }, 1000*2);

    




   b= setTimeout(()=>{

        console.log(`ispis1`);

}, 3000);



});



zaustav.addEventListener('click',()=>{

        clearTimeout(a);//za svaki pojedinacni setTimeout mora da stavis clearTimeout sa nazivom setTimeout-a
    });

    zaustav.addEventListener('click',()=>{

        clearTimeout();
    });



let btn3=document.querySelector('#btn3');
let btn4=document.querySelector('#btn4');
let p=document.querySelector('#odbrojavanje');

let br=0;
let c;
let po=false;

btn3.addEventListener('click',()=>{


        if(po==false)
        {
                po=true;
                c=setInterval(() => {

                      br++;
                          p.innerHTML=`${br}`;

        
                 }, 1000);


        }
   

});


btn4.addEventListener('click',()=>{

    clearInterval(c);
 
 });



let sat=document.querySelector('#sat');

setInterval(function(){//mislim da moze i bez function


    let datum=new Date();
    let sati=datum.getHours();
    let minuti=datum.getMinutes();
    let sekunde=datum.getSeconds();

    if(sati<10)
    {

        sati="0"+sati;

    }

    if(minuti<10)
    {

         minuti="0"+minuti;

    }

    if(sekunde<10)
    {

         sekunde="0"+sekunde;

    }

sat.innerHTML=`${sati}:${minuti}:${sekunde}`;
    
}, 1000);



*/


let ispis=document.querySelector('#btn1');
let prekid=document.querySelector('#btn2');


ispis.addEventListener('click',()=>{

    a=setTimeout(() => {
            console.log(`Zdravo!!!`);
        }, 2000);


        b=setTimeout(() => {
            console.log(`Zdravo po drugi put!!!`);
        }, 6000);    

});

    
prekid.addEventListener('click',()=>{

    clearTimeout(a);


        clearTimeout(b); 

});






let sat=document.querySelector('#sat');

setInterval(function(){


    let datum=new Date();
    let sati=datum.getHours();
    let minuti=datum.getMinutes();
    let sekunde=datum.getSeconds();

    if(sati<10)
    {

        sati="0"+sati;

    }

    if(minuti<10)
    {

         minuti="0"+minuti;

    }

    if(sekunde<10)
    {

         sekunde="0"+sekunde;

    }

sat.innerHTML=`${sati}:${minuti}:${sekunde}`;
    
}, 1000);