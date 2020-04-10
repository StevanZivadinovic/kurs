export class ChatUI{
    //konstruktor
    constructor(l){
        this.list = l;
    }

    //geter i seter
    set list(l){
        this._list = l;
    }

    get list(){
        return this._list;
    }

    dateToday(date){
        let today = new Date();
        let todayD = today.getDate();
        let todayM = today.getMonth() + 1;
        let todayY = today.getFullYear();

        let d = date.getDate();
        let m = date.getMonth() + 1;
        let y = date.getFullYear();

        if(todayD==d && todayM==m && todayY==y){
            return true; //ako je današnji datum
        } else {
            return false; //ako nije današnji datum
        }
    }

    formatDate(date){  
        this.dateToday(date);   
        let d = date.getDate();
        let m = date.getMonth() + 1;
        let y = date.getFullYear();
        let h = date.getHours();
        let min = date.getMinutes();

        //Dodavanje 0 ispred jednocifrenih vrednosti
        d = String(d).padStart(2,"0");
        m = String(m).padStart(2,"0");
        h = String(h).padStart(2,"0");
        min = String(min).padStart(2, "0");

        let strDate = ``;
        if(this.dateToday(date)){
            strDate = h + ":" + min;
        } else {
            strDate = d + "." + m + "." + y + ". - " + h + ":" + min;
        }
        
        return strDate;
    }

    //Metod koji pravi osnovu za prikaz list item-a
    //data koji prosleđujemo je objekat tj. dokument iz baze
    templateLI(data){
        let dataId = data.id;
        data = data.data();
        let date = data.created_at.toDate();
        let strDate = this.formatDate(date);
        
        let htmlLI = `<li id="${dataId}" `;
        if(data.username == localStorage.usernameLS){
            htmlLI += `class="me">`;
        } else {
            htmlLI += `class="not-me">`;
        }

        htmlLI +=
        `   <span class="username">${data.username} : </span>
            <span class="message">${data.message}</span>
            <div class="date">${strDate}</div>
            <img src="images/delete.png" class="img-delete" align="right">
        </li>`;
        this.list.innerHTML += htmlLI;

        //Uvek skroluj na poslednji element <ul>
        this.list.scrollTop = this.list.scrollHeight;
    }

    clear(){
        this.list.innerHTML = ``;
    }

}