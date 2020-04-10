let task=db.collection('tasks').doc('task-03');//objeat dokumenta, samo po sebi nista ne znaci
//console.log(task);


//da bi uzeo ceo dokument sa sve poljima kucas sledece:

task.get()
.then(doc=>{//ovo doc je obicna promenljiva, moze i drugacije da se zove

    if(doc.exists){//ako dokument postoji onda..
        let temp=doc.data()
        console.log(doc.id,temp);
       // console.log(doc.id,doc.data()); moze i ovako
    }
    else{
        console.log('No such document');
    }

})
.catch(error=>{

    console.error('Cannot get document',error);
});



//let document=db.collection('..').doc('..');

// kod dokumenta imate sledece metode(CRUD-Create,Read,Update,Delete):
//1) document.set(..)=>postavlja polja, ili nova ili menja postojeca
//2) document.update(...)=>menja postojeca polja
//3)document.delete(..)=> brise dokument
//4)document.get(..)=> dohvata vrednosti polja dokumenta
//Nako bilo koje od ovih metoda pozivaju se potom metode

//.then() i .catch()





//dohvatamo sve dokumente iz kolekcije
let tasks=db.collection('tasks');


tasks.get()
.then(snapshot=>{//snapshot je poslednja verzija iz baze. mislim da je ovaj snapshot u stvari obican
    //parametar a onSnapshot je funkcija. Ovde smo ja mislim mogli i drugacije da nayovemo ovaj parametar
    //mozemo da ga nazovemo i recimo snap

    snapshot.docs.forEach(doc => {
        console.log(doc.id,'=>',doc.data());
    });

})
.catch(error=>{

    console.error('Cannot get documents from collection:',error);
}); 



//prikaz svih elemenata iz kolekcije,soritirane po polju:

/*
tasks.orderBy('title','desc')//asc ili desc//OrderBy metoda mora prva da se uvede. Redja polja po pocetnom slovu naziva titla,
// prepoznaje velika i mala slova. Ovde sam podesio da ih redja u opadajucem nizu
.orderBy('start_date')//moze opet da se ubaci jos jedan start date, pa onda sortira po oba kriterijuma
//tu se javlja greska.Onda kliknes a link u konzoli koji ti daje greska, to te baci na sajt firebase
//to kreiras index.Sad samo ides na refres svoje stranice i greska nestane

//ogranicenje broja podataka .limit(2), broj u zagradi odredjuje broj podataka koji ce da se prikazu
.limit(2)
.get()
.then(snapshot=>{//snapshot je poslednja verzija iz baze
    snapshot.docs.forEach(doc => {
        console.log(doc.id,'=>',doc.data());
    });

})
.catch(error=>{

    console.error('Cannot get documents from collection:',error);
    });*/

//Filtriranje dokumenata

tasks
.where('priority','==',true)
.limit(2)
//ako bi ovde ubacio i orderBy onda zato sto imamo vec where opet ce da vraca istu gresku kao
//kad imam dva orderBy
.get()
.then(snaps=>{//snapshot je poslednja verzija iz baze, mozes da nazoves kako oces ja mislim
    snaps.docs.forEach(doc => {
        console.log(doc.id,'=>',doc.data());
    });

})
.catch(error=>{

    console.error('Cannot get documents from collection:',error);
    });