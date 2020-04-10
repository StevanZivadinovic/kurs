let kolekcija=db.collection('posao');
console.log(kolekcija);

let prvaStavka=kolekcija.doc('Prvi dan');
console.log(prvaStavka);


/*
db.collection('posao').doc('Prvi dan').set({


    name:'Stevan',
    surname:'Zivadinovic'
})

.then(()=>{
    console.log(`customer added successfully`);

})
.catch((error)=>{

    console.error(`error adding customer `,error);//kanal na kom ispisujes greske
});






db.collection('posao').doc('Prvi dan').update({


    name:'Milan',
    surname:'Zivadinovic'
})

.then(()=>{
    console.log(`customer updated successfully`);

})
.catch((error)=>{

    console.error(`error adding customer `,error);//kanal na kom ispisujes greske
});

let s2={

    mestoRodj:'Grliste'
}
let s={
    merge:true
}

db.collection('posao').doc('Prvi dan').set(s2,s)

.then(()=>{
    console.log(`customer updated successfully`);

})
.catch((error)=>{

    console.error(`error adding customer `,error);//kanal na kom ispisujes greske
});


db.collection('posao').doc('Drugi dan').set(s2)

.then(()=>{
    console.log(`customer updated successfully`);

})
.catch((error)=>{

    console.error(`error adding customer `,error);//kanal na kom ispisujes greske
});



let datum1=new Date('2020-03-22 21:20:00');
let datum2=new Date('2020-04-05 21:20:15');

/*
db.collection('posao').doc('Treci dan').set({

    title:'Zavrsi dokumentaciju',
    pocetak:firebase.firestore.Timestamp.fromDate(datum1),
    kraj:firebase.firestore.Timestamp.fromDate(datum2),
    priority: false
})
.then(()=>{
    console.log(`customer updated successfully`);

})
.catch((error)=>{

    console.error(`error adding customer `,error);//kanal na kom ispisujes greske
});


db.collection('posao').doc('Treci dan').update({

    title:'Dokumentacija gotova'
})

*/

//drugi deo

/*
db.collection('posao').doc('Treci dan').get()

.then(doc=>{
    if(doc.exists==true){
        console.log(`dokument ${doc.id}`,doc.data());
    }
    else{
        console.log('this doc does not exist');
    }

})


let tasks=db.collection('posao');



tasks.get()
.then(snap=>{

    snap.docs.forEach(doc=>{

        console.log(doc.id,`=>=>`,doc.data());

    });


});



//prikaz svih elemenata iz kolekcije,soritirane po polju:


tasks
.orderBy('name')//mora pre get
.where('mestoRodj','in',['beograd','Nis'])
.limit(2)
.get()
.then(snap=>{

    snap.docs.forEach(doc=>{

        console.log(doc.data().mestoRodj);
        console.log(`postoji takav grad`);
    })

});

db.collection('poso')


// Prikazati sve dokumente iz kolekcije customers sortirane po imenu

db.collection('customers')
.orderBy('name','desc')
.get()
.then(snap=>{
    snap.docs.forEach(doc=>{

        console.log(doc.data().name);

    });

});


// Iz kolekcije customers, pročitati sve klijente koji imaju adresu u Nišu

db.collection('customers')
.orderBy('adresses','desc')
.get()
.then(snap=>{
    snap.docs.forEach(doc=>{

        console.log(doc.data().adresses);

    });

});


// Iz kolekcije customers, pročitati sve klijente koji imaju platu >= 500
db.collection('customers')
.where('salary','>=',100)
.where('salary','<=',600)//samo trazi index kad kombinujes orederBy i where, mozda i za dva orderBy
//index dobijas kad kliknes na link koji ti izbaci u konzoli unutar greske koju prijavi

.get()
.then(snap=>{
    snap.docs.forEach(doc=>{

        console.log(doc.data().salary);

    });

});

*/


// Poredjenje kada je polje timestamp

let datum3=new Date('2020-01-01');
let datum4=new Date('2020-12-31');

db.collection('tasks')
.where('start_date','>=', firebase.firestore.Timestamp.fromDate(datum3))//moraju polja da budu ista
//ako su im razliciti uslovi za pretragu(ako si stavio start_date u oba filtera onda moze da ti
//jedan uslov bude <= a drugi >=)
.where('start_date','<=', firebase.firestore.Timestamp.fromDate(datum4))
.get()
.then(snap=>{


        snap.docs.forEach(doc=>{

            console.log(doc.data());
        });


});

// Procitati sve klijente koji imaju 22, 25 ili 28 godina.
db.collection('customers')
.where('age', 'in', [22, 25, 28])
.get()
.then(snapshot => {
    snapshot.docs.forEach(doc => {
        let polja = doc.data();
        let id = doc.id;
        console.log(id, " => ", polja);
    });
})
.catch(error => {
    console.error("Error getting documents: ", error);
});
