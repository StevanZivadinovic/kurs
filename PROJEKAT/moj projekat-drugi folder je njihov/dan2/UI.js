//User Interface (UI)


export class ChatUI{
    constructor(l){
        this.list=l;

    }

    set list(l){
        this._list=l;
    }
    get list(){
        return this._list;
    }



    formatDate(date){
      
        let d = date.getDate();
        let m = date.getMonth() + 1;//dodajemo 1 zato sto mesece racuna od nula ova funkcija
        let y = date.getFullYear();
        let h = date.getHours();
        let min = date.getMinutes();

        //Dodavanje 0 ispred jednocifrenih vrednosti
        d = String(d).padStart(2,"0");
        m = String(m).padStart(2,"0");
        h = String(h).padStart(2,"0");
        min = String(min).padStart(2, "0");// prvi broj oynacava koliko dugu rec hoces da imas, a 
        //drugi string(ynak), je znak koji ce da se dodaje reci kao prefiks sve dok rec ne bude imao
        //duzinu 2, ako je rec vec duga 2 ynaka nece nista da se doda

        let strDate = d + "." + m + "." + y + ". - " + h + ":" + min;

        return strDate;
    }

    templateLI(data){ //metod koji pravi osnovu za prikaz list item-a
        //data je objekat(dokument) iz baze

          let date=data.created_at.toDate();//promena formata vremena u razumljiv oblik
        let strDate=this.formatDate(date);

        
        let htmlLI = `<li `;
        if(data.username == localStorage.usernameLS){
            htmlLI += `class="me">`;
        } else {
            htmlLI += `class="not-me">`;
        }

        htmlLI +=
        `   <span class="username">${data.username} : </span>
            <span class="message">${data.message}</span>
            <div class="date">${strDate}</div>
        </li>`;
        this.list.innerHTML+=htmlLI;
        //dodavnje skrola, baca ti skrol na poslednju poruku, da moyes da vidis kad stigne nova poruka
        this.list.scrollTop=this.list.scrollHeight;
    }

    clear(){
        this.list.innerHTML=``;//na ovaj nacin brismo listu poruka
    }
}


