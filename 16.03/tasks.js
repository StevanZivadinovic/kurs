
let form=document.querySelector('form');
let poruka=document.querySelector('#poruka');
form.addEventListener('submit',event=>{

        event.preventDefault();
        let title =form.title.value;
        let startdate=form.start_date.value;
        let dueDate=form.due_date.value;
        let description=form.description.value;
        let priority;
        if(form.priority.checked){

            priority=true;
        }
        else{
            priority=false;
        }
        //console.log(title,startdate,dueDate,description,priority);
        db.collection('tasks').doc().set({


            title:title,
            start_date:startdate,
            due_date:dueDate,
            description:description,
            priority:priority
        })
        .then(()=>{//then i catch funkcionisu kao if i else

            poruka.innerHTML=`Tasks sa naslovm ${title} je dodat u bazu`;
        })
        .catch(error=>{
            poruka.innerHTML=`Greska prilkom dodavanja taska sa naslovom ${title},${error}`;
            
        });
        form.title.value='';//ovako radis za resetovanje polja na nulu, za svako polje moras ovako
        //postoji i varijanta form='reset' ili tako nesto;
        
});