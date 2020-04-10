let form = document.querySelector('form');
let poruka = document.querySelector('#poruka');
let list = document.querySelector('ul');
/*
db.collection('tasks')
.orderBy('start_date', 'desc')
.get()
.then(snapshot => {
    snapshot.docs.forEach(doc => {
        let obj = doc.data();
        let li = document.createElement('li');
        li.innerText = `${obj.title} (${obj.start_date}) [${obj.description}]`;
        if(obj.priority == true) {
            li.style.color = "red";
        }
        list.appendChild(li);
        let button = document.createElement('button');
        button.innerText = "delete";
        li.appendChild(button);
    });
})
.catch(error => {
    poruka.innerHTML += `Nemoguce dohvatiti zadatke: ${error}`;
});
*/

db.collection('tasks')
.onSnapshot(snapshot => {//onSnapshot je metod koji slusa da li je doslo do neke promene u bazi
    snapshot.docChanges().forEach(change => {//kolko kapiram ovo docChanges() je niz svih promena
        //koje se dese u dokumentu(brisanje, dodavanje, izmene itd). Ovde se forEach petljom prolazi 
        //kroz taj niz. Parametar change je u stvari pojedinacni clan ovog niza za koji mozemo
        // da dobijemo kog je tipa preko change.type i na kom se dokumentu desio change.doc
        //console.log(change);
        let type = change.type; // tip promene dokumenta - "added" ili "removed"
        let doc = change.doc; // dokument na koji se odnosi promena (snapshot)
        let id = doc.id;



        if(type == "added") {
            let obj = doc.data();
            let li = document.createElement('li');
            li.innerText = `${obj.title} (${obj.start_date}) [${obj.description}]`;
            if(obj.priority == true) {
                li.style.color = "red";
            }
            li.setAttribute('data-id', id);//moze i data-datum ili neko drugo polje kolko razumem
            list.appendChild(li);
            let button = document.createElement('button');
            button.innerText = "delete";
            li.appendChild(button);
        }




        else if(type == "removed") {//izgleda da je svejedno dal su dva ili tri znaka jednakosti
            let lis = document.querySelectorAll('li');
            lis.forEach(li => {
                if(li.getAttribute('data-id') == id) {
                    li.remove();
                }
            });
        }
    });
});


form.addEventListener('submit', event => {
    event.preventDefault();
    let title = form.title.value;
    let datum1 = new Date();//ovde treba ubaciti vreme koje je uneseno u input polje za vreeme
    let datum2 = new Date();//ovde treba ubaciti vreme koje je uneseno u input polje za vreeme, 
    //nesto zajebava ovo vreme, ne mogu da unesem zeljeni datum, nego samo trenutno vreme
    let startDate = firebase.firestore.Timestamp.fromDate(datum1);
    let dueDate = firebase.firestore.Timestamp.fromDate(datum2);
    let description = form.description.value;
    let priority;
    if(form.priority.checked) {
        priority = true;
    }
    else {
        priority = false;
    }
    
    //console.log(title, startDate, dueDate, description, priority);
    db.collection('tasks').doc().set({
        title: title,
        start_date: startDate,
        due_date: dueDate,
        description: description,
        priority: priority
    })
    .then(() => {
        poruka.innerHTML += `Task sa naslovom ${title} je dodat u bazu!`;
    })
    .catch(error => {
        poruka.innerHTML += `Greska prilikom dodavanja taska sa naslovom ${title}: ${error}`;
    });
    form.reset();
});



list.addEventListener('click', e => {
    if(e.target.tagName === "BUTTON") {//ovo BUTTON mora velikim slovima, jer se u inspekt element
        //zove isto tako, pogledaj tamo
        let id = e.target.parentElement.getAttribute('data-id');
        //console.log(id);
        db.collection('tasks')
        .doc(id)
        .delete()
        .then(() => {
            console.log("Zadatak izbrisan");
            poruka.innerHTML += 'Zadatak izbrisan';
        })
        .catch(error => {
            console.log(`Nemoguce obrisati dokument: ${error}`);
            poruka.innerHTML += `Nemoguce obrisati dokument: ${error}`;
        });
    }
});
