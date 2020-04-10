//Moduli
import {Chatroom} from "./chat.js"
import {ChatUI} from "./ui.js"

//DOM elementi
let chatList = document.querySelector('#ulMessages');

let formMessage = document.querySelector('#formMessage');
let inputMessage = document.querySelector('#inputMessage');

let formUsername = document.querySelector('#formUsername');
let inputUsername = document.querySelector('#inputUsername');

let formColor = document.querySelector('#formColor');
let inputColor = document.querySelector('#inputColor');

let formDate = document.querySelector('#formDate');
let dateStart = document.querySelector('#dateStart');
let dateEnd = document.querySelector('#dateEnd');

let rooms = document.querySelector('nav');
let updatedUsername = document.querySelector('#divUpdatedUsername');

let buttons = document.querySelectorAll('button');

//Provera pozadinske boje u lokalnoj memoriji
let checkColor = () => {
    if(localStorage.colorLS){
        return localStorage.colorLS;
    } else {
        return "#ffffff";
    }
}
//Postavljanje pozadinske boje stranice
document.body.style.backgroundColor = checkColor();

//Provera username u lokalnoj memoriji
let checkUsername = () => {
    if(localStorage.usernameLS){
        return localStorage.usernameLS;
    } else {
        return "anonymous";
    }
}

//Kreiranje instanci klasa
let chatroom = new Chatroom('js', checkUsername());
let chatui = new ChatUI(chatList);

//Provera prilikom učitanja stranice
//Koja soba je bila poslednja posećena, nju učitati 
let checkRoom = () => {
    if(localStorage.roomLS){
        return localStorage.roomLS;
    } else {
        return "general";
    }
}
chatroom.updateRoom(checkRoom());

//Poslednjoj posećenoj sobi dodati klasu koja će da oboji to dugme
buttons.forEach( b => {
    if(b.id == checkRoom()){
        b.classList.add('btn-selected');
    }
});

//Ispisi poruke
chatroom.getChets( data => {
    //console.log(data); //u konzoli
    chatui.templateLI(data);
});

//Kada je submit dugme Send pošalji poruku
formMessage.addEventListener('submit' , e => {
    e.preventDefault();
    let message = inputMessage.value;
    chatroom.addChat(message)
        .then()
        .catch( error => console.log(error));
        
    //Izbrisati sve poruke sa stanice
    chatui.clear();
    //Učitati poruke za promenjenu sobu
    chatroom.getChets( data => {
        //console.log(data); //u konzoli
        chatui.templateLI(data);
    });

});

//Kada je submit dugme Update izmeni korisničko ime
formUsername.addEventListener('submit' , e => {
    e.preventDefault();
    let newUsername = inputUsername.value;
    chatroom.updateUsername(newUsername);
    formUsername.reset();

    //Osvežiti čet prilikom promene korisničkog imena tako što ga izbrišemo i učitamo ponovo
    chatui.clear();
    chatroom.getChets(data => {
        chatui.templateLI(data);
    });

    //Kada je Update ime prikazati poruku u trajanju od 3s
    updatedUsername.innerHTML = `Your username was updated to 
    <span id="spanNewUsername">${newUsername}</span>`;
    setTimeout(()=>{
        updatedUsername.innerHTML = ``;
    } , 3000);
});

//Promena soba
rooms.addEventListener('click' , e => {
    if(e.target.tagName == "BUTTON"){
        //Kada je kliknuto na dugme, dodeliti mu klasu da je baš ono selektovano
        
        buttons.forEach( b => {
            //"Očistiti" dugme od btn-selected klase
            if(b.classList.contains('btn-selected')){
                b.classList.remove('btn-selected');
            }            
        });
        let btnId = e.target.getAttribute('id');
        let btn = document.getElementById(btnId);

        btn.classList.add('btn-selected');

        //Izbrisati sve poruke sa stanice
        chatui.clear();

        //Promeniti sobu
        let newRoom = e.target.getAttribute('id');
        chatroom.updateRoom(newRoom);
        localStorage.setItem('roomLS' , newRoom);

        //Učitati poruke za promenjenu sobu
        chatroom.getChets( data => {
            //console.log(data); //u konzoli
            chatui.templateLI(data);
        });
    }
});

//Event listener za boju
formColor.addEventListener('submit', e => {
    e.preventDefault();
    let hexColor = inputColor.value;
    localStorage.setItem('colorLS' , hexColor);
    setTimeout(()=>{
        document.body.style.backgroundColor = hexColor;
    } , 500);
});

//Event listener za datum
formDate.addEventListener('submit', e => {
    e.preventDefault();
    chatui.clear();
    chatroom.getChetsByDate((data) => {
        chatui.templateLI(data);
    });

    formDate.reset();
});

chatList.addEventListener('click', e => {
    if(e.target.tagName === "IMG") {
        let liElement = e.target.parentElement;

        if(liElement.classList.contains('not-me')){
            liElement.remove();
        } else if(liElement.classList.contains('me')){
            let liId = liElement.id;
            if(chatroom.deleteChat(liId) == true){
                liElement.remove();
            }            
        }
    }
});