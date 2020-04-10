export class Chatroom{

    //Konstruktor
    constructor(r,u){//prosledjujemo koji korisnik caska i u kojoj sobi
        this.room=r;
        this.username=u;
        this.chats=db.collection('chats');//u zagradi je naziv kolekcije(baze)
        this.unsub;//sluzi nam da proverimo da li smo prijavljeni ili nismo u prijavljeni u novu sobu
    }
    //Seteri
    set username(u){
        this._username=u;
    }
    set room(r){
        this._room=r;
    }
    //Geteri
    get username(){
        return this._username;
    }
    get room(){
        return this._room;
    }
    async addChat(mess){//asinhroni metod, on radi nezavisno i paralelno u odnosu na ostatak koda.
        //Ova metoda prima kao parametar poruku i tu poruku smesta u bazu. Mess je u stvari poruka.
        //ovo mess unosimo kad poyivamo funkciju addChat. Ovde smo je pozvali u drugom modulu pa se
        //ne vidi odmah odakle nam mess. Tamo se vidi, u tom modulu.

        
        //Dohvatanje tekuceg datuma koji je potreban za timestamp
        let date=new Date();


        //kreiranje objekta/dokumenta koji prosledjujemo bazi podataka
        let docChat={
            message: mess,
            username:this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(date)//u ovoj zagradi je gore formiran datum
        };

        //da sacuvamo dokument u bazi
        let response=await this.chats.add(docChat); //await se koristi samo kod asinhronih funkcija(metoda) 
        //await kaze cekaj dok se ne izvrsi funkcija. Na postojecu listu cetova this.chats dodajemo
        //docChat dokumenta preko add();
        return response;

    }


    getChets(callback){//funkcija koja ispisuje chat
       this.unsub= this.chats//ovde je this.unsub postalo funkcija pa ga zato dole u updateroom pozivamo
       //sa zagradama
        .where('room','==',this.room)//ispitaj samo one sobe koje s jednake this.room
        .orderBy('created_at')//poredjaj po datumu kreiranja
        .onSnapshot(snapshot=>{//onSnapshot je metod. 
            snapshot.docChanges().forEach(change=>{//docChanges je niz promena, change je tekuca promena
                //ako je poruka dodata u bazu onda raditi update
                if(change.type==='added'){
                    //uraditi update
                    callback(change.doc.data());//sa callback funkcijom cuvamo podatke o promeni 
                    //pravimo da svaka poruka u cetu bude dokument za sebe
                    //ovde pretpostavljamo da imamo dovoljno memorije da pamtimo sve poruke pa ih zato i cuvamo
                    //callback su zasebne funkcije(tip funkcije), pogledati na netu, i jelena
                    //ce da posalje jos neke materijale za callback funkcije
                }

            });
        });
    }


    updateUsername(uu){
        //sustinski menja samo vrednost lokalne promenljive, ne menja vrednost username u bazi 
        //podatak. Ako se osoba nprzvala sanja a sad se zove mila, onda ce svuda ona i dalje
        //se zove sanja a samo na zadnjem mestu ce se zvati mila, tj samo na zadnjem mestu
        //ce ime biti postavljeno na mila.
        this.username=uu;
        localStorage.setItem('usernameLS',uu);//prvo je ime promenljive drugo je njena vrednost.
        //ovde smo uradili sledece: Kad u polju username uneses ime koje hoces, vise nikad ne moras
        //da kucas ime nego samo saljes poruke. U okviru svake poruke koju posaljes nakon unosa imena
        //pisace ti da je poruku poslao taj cije je ime napisano u username. Ukoliko u nekom trenutku
        //promenis ime u username, poruke ce se onda slati sa tim imenom.

    }



    updateRoom(ur){
        this.room=ur;
        //console.log('Update room');
        if(this.unsub==true){

            this.unsub();
        }

    }

}


/*
//Nova instanca klase(novi objekat)
let chatroom=new Chatroom('general','PeraPeric');
//console.log(chatroom);
/*
chatroom.addChat('Zdravo!')
    .then(()=>{

        console.log('Cet je dodat');
    })
    .catch(err=>{

        console.error(err);
    });
    */
   /*
chatroom.updateRoom('general');//moze u zagradi i js da pise

    //snapsshot omogucava da ispitamo 
    //kada je doslo do promene npr, ili nesto dodato ili nesto izbrisano
    //sada kreiram oobican metod, ne asinhron
chatroom.getChets(data=>{ //ovo je slicno addListeneru zato sto smo gore postavili callback
    console.log(data);



});

chatroom.updateRoom('js');
chatroom.getChets(data=>{

console.log(data);
});
    


setTimeout(()=>{

chatroom.updateRoom('js'); //u objektu je pocetna vrednost postavljena na js, ovde je
//updatuemo u general ili opet u js.U ovim redovima u zagradaama mozemo da menjamo vrednosti
chatroom.updateUsername('Tina'); //u objektu je pocetna vrednost postavljena na js, ovde je
chatroom.getChets(data=>{

    console.log(data);
});
chatroom.addChat('kako si Milice?')
},3000);

*/


