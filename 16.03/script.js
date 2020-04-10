//console.log(db);// objekat konekcije
let kolekcija1=db.collection('tasks');//objekat kolekcije
console.log(kolekcija1);

let task01=kolekcija1.doc('task-01');//preuzimanje dokumenta preko objekta kolekcije
console.log(task01);

//let task02=kolekcija1.doc('task-02'); 

let task02=db.doc('tasks/task-02'); //preuzimanje dokumenta direktno iz baze
console.log(task02);


let task001=db.collection('tasks').doc('task-01');
console.log(task001);

//dodavanje novog dokumenta u kolekciju, to je ono isto sto rucno radis na sajtu firebase;

let c1={
    name:'filip filipovic',
    age:33,
    adresses:['Beograd','Pozarevac','Negotin'],
    salary: 1200
};

db.collection('customers').doc().set(c1)
.then(()=>{
    console.log(`customer added successfully`);

})
.catch((error)=>{

    console.error(`error adding customer `,error);//kanal na kom ispisujes greske
});//samo ovde ; ne treba iznad
//unutar zagrada doc-a ako stavis ime to ce da bude ime novog dokumenta
//ako nista ne stavis firebase ce sam da doda neki id */

db.collection('customers').doc('customer-01').set(c1)
.then(()=>{
    console.log(`customer added successfully`);

})
.catch((error)=>{

    console.error(`error adding customer `,error);//kanal na kom ispisujes greske
});


let c2={

    gender:'male',
    height: 180
};

let s={
   merge: true
};


db.collection('customers').doc('customer-01').set(c2,s)//kad ovako stavis onda se zadrze sva polja,
//ako stavis samo jednu vrednost ona obrise stari objekat i unese taj novi koji si uneo
//pricam o set()-u;
.then(()=>{
    console.log(`customer added successfully`);

})
.catch((error)=>{

    console.error(`error adding customer `,error);//kanal na kom ispisujes greske
});


let datum1=new Date('2020-03-17 19:00:00');
let datum2=new Date('2020-03-17 21:00:00');


let t3={
    title:'fudbal',
    start_date:firebase.firestore.Timestamp.fromDate(datum1),//fromDate je ugradjena funkcija
    //u firebase-u, tj vazi za firebase bazu, sluzi da datum koji si preuzeo prevedes u timestamp
    due_date:firebase.firestore.Timestamp.fromDate(datum2),
    priority:false,
    description: 'fudbal sa drustvom'
}

db.collection('tasks').doc('task-03').set(t3)
.then(()=>{
    console.log(`task added successfully`);

})
.catch((error)=>{

    console.error(`error adding task `,error);//kanal na kom ispisujes greske
});

//izmena pojedinih polja;

db.collection("tasks").doc("task-03").update({

    description: "Fudbalica sa drustvom ako stignem"
    
    })
    
    .then(()=> {
    
    console.log("Task successfully updated!");
    
    })
    
    .catch((error)=> {
    
    console.error("Error updating task: ", error);
    
    });

    //Podaci mogu da se: 1) upisuju u bazu
    //  2)da se menjaju u bazi
    //  3) da se citaju iz baze
