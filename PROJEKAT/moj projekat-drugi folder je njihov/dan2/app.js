
//moduli
import {Chatroom} from './chat.js';
import {ChatUI} from './UI.js';


//DOM elementi

let chatList=document.querySelector('#messages');
let formMessage=document.querySelector('#message');
let inputMessage=document.querySelector('#inputMessage');


let formUsername=document.querySelector('#username');
let inputUsername=document.querySelector('#inputUsername');

let rooms=document.querySelector('nav');
let updateUsername=document.querySelector('#divUpdatedUsername')

let buttons=document.querySelectorAll('button');

//provera username-a u lokalnoj memoriji

let checkUsername=()=>{

    if(localStorage.usernameLS){
        return localStorage.usernameLS;
    }
    else{
        return "anonymous";
    }
}

let chatroom= new Chatroom('js',checkUsername());
//console.log(chatroom);
let chatui=new ChatUI(chatList);


//provera prilikom ucitavanja stranice 
//koja je soba bila poslednja posecena nju ucitati
let checkRoom=()=>{
    if(localStorage.roomLS){
        return localStorage.roomLS
    }
    else{
        return 'general';
    }

}
chatroom.updateRoom(checkRoom());

//poslednjoj posecenoj sobi dodati klasu koja ce da oboji to dugme

buttons.forEach(b=>{

    if(b.id==checkRoom()){
        b.classList.add('btn-selected');
    }

});

//ispis poruka
chatroom.getChets(data=>{
    console.log(data);
    chatui.templateLI(data);
});

//kad je submit na dugme send posalji poruku
formMessage.addEventListener('submit',e=>{

    e.preventDefault();
    let message=inputMessage.value;
    chatroom.addChat(message);

    /* //ovo ne radi iz nekog razloga, pogledati sta kako
    .then(() => 

        formMessage.reset())
    
    .catch(error=>

        console.error(error));
        */
});

//kada je submit dugme Update izmeni korisnicko ime

formUsername.addEventListener('submit',e=>{

    e.preventDefault(); //da se ne bi po submitu automatski osvezila stranica
    let patternUsername = /\s/;
    let newUsername=inputUsername.value;
    console.log(newUsername);
    if (!patternUsername.test(newUsername)) {
        chatroom.updateUsername(newUsername);

//Kada je Update ime prikayati poruku u trajanju od 3s

    updateUsername.innerHTML=`Your username was update to ${newUsername}
    <span id='spanNewUsername'>${newUsername}</span>`;
setTimeout(()=>{
    updateUsername.innerHTML=``;
},3000);
    }
    else{
        alert("Username ne sme da sadrzi razmak");

   }
    formUsername.reset();
});

//osveziti chat prilikom promene imena tako sto ga iybrisemo i ucitamo ponovo
    chatui.clear();
    chatroom.getChets(data=>{
        chatui.templateLI(data);

    });

  
//promena sobe

rooms.addEventListener('click',e=>{
        console.log(e); // u konzoli se ispisuje gde klikcemo
        if(e.target.tagName==='BUTTON'){
            //kada je kliknuto na dugme dodeliti mu klasu da je bas ono selektovano
            //1.ocistiti dugme od btn-selected klase
            
            buttons.forEach(b=>{
                if(b.classList.contains('btn-selected')){
                    b.classList.remove('btn-selected');
                }
                
                

            });
            
            //2.selektovanom dugmetu dodati btn-klasu
            let btnId=e.target.getAttribute('id');
            let btn=document.getElementById(btnId);
            console.log(btn.classList);
            btn.classList.add('btn-selected');
            
            
            
        //1) izbrisujemo sve poruke sa stranice

        chatui.clear();//trenutno brise i za sobu na koju kliknemo, ne prukaye njene poruke nego i njih brise

        //2) promeniti sobu
        let newRoom=e.target.getAttribute('id');
       // console.log(newRoom);
            chatroom.updateRoom(newRoom);

            localStorage.setItem('roomLS',newRoom);




        //3) ucitati poruke za promenjenu sobu
            chatroom.getChets(data=>{
                console.log(data);
                chatui.templateLI(data);

            });
        

        }
});



