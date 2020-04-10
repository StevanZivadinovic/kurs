//Moduli
import {Chatroom} from "./chat.js"
import {ChatUI} from "./ui.js"

//DOM elementi
let chatList = document.querySelector('#ulMessages');

let formMessage = document.querySelector('#formMessage');
let inputMessage = document.querySelector('#inputMessage');

let formUsername = document.querySelector('#formUsername');
let inputUsername = document.querySelector('#inputUsername');

let rooms = document.querySelector('nav');
let updatedUsername = document.querySelector('#divUpdatedUsername');

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

//Ispisi poruka
chatroom.getChets( data => {
    console.log(data); //u konzoli
    chatui.templateLI(data);
});

//Kada je submit dugme Send pošalji poruku
formMessage.addEventListener('submit' , e => {
    e.preventDefault();
    let message = inputMessage.value;
    chatroom.addChat(message)
        .then( () => formMessage.reset())
        .catch( error => console.log(error));

});

//Kada je submit dugme Update izmeni korisničko ime
formUsername.addEventListener('submit' , e => {
    e.preventDefault();
    let newUsername = inputUsername.value;
    chatroom.updateUsername(newUsername);
    formUsername.reset();

    //Kada je Update ime prikazati poruku u trajanju od 3s
    updatedUsername.innerHTML = `Your username was updated to ${newUsername}`;
    setTimeout(()=>{
        updatedUsername.innerHTML = ``;
    } , 3000);
});




//Promena soba
rooms.addEventListener('click' , e => {
    if(e.target.tagName == "BUTTON"){
        //Izbrisati sve poruke sa stanice
        chatui.clear();

        //Promeniti sobu
        let newRoom = e.target.getAttribute('id');
        chatroom.updateRoom(newRoom);

        //Učitati poruke za promenjenu sobu
        chatroom.getChets( data => {
            console.log(data); //u konzoli
            chatui.templateLI(data);
        });
    }
});