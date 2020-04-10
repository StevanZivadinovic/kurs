/*import {Knjiga} from "./knjiga.js";


let k1=new Knjiga('Na drini cuprija','Ivo Andric', 2003, 1300, 8230);

k1.stampaj();
console.log(k1.obimna());

if(k1.obimna()){

    console.log('knjiga je obimna');
}

else{
    console.log('knjiga nije obimna');
}

console.log(k1.skupa());
k1.dugackoIme();

let k2=new Knjiga('Orlovi rano lete','Branko Copic', 2006,-185,-340);

    k2.stampaj();

let k3=new Knjiga('Ana Karenjina','Tolstoj',1996,1200,8300);




let nizKnjiga=[k1,k2,k3];
nizKnjiga.forEach(elem=>{

    elem.stampaj();

});

//Kad kaze napraviti funkciju, tu funkciju pravis van klase u glavnom js fajlu. Kad kaze ispisati metodu onda pravis
//pravis metodu(funkciju) unutar klase!!!

console.log(`skupe i obimne knjige`);
nizKnjiga.forEach(elem=>{

    if(elem.skupa() && elem.obimna()){//isto kao da smo zapisali if(elem.skupa()==true && elem.skupa()==true);

        elem.stampaj();
    }



});

/*Napraviti funkicju kojoj se prosleđuje niz knjiga a ona određuje:
ukupnaCena - Koliko ukupno koštaju sve knjge u nizu knjiga
prosecnaCena - Kolika je prosečna cena knjige
prosecnaStranica - Kolika je prosečna cena stranice knjige */


/*
let ukupnaCena=(niz)=>{

    let ukupno=0;
    niz.forEach(elem=>{

        ukupno+=elem.cena;//ovde je elem geter, ali ga ovako pozivamo bez zagrada zato sto se tako pozivaju geeteri valjda

    });
    return ukupno;

};


console.log(`Ukupna cena knjiga je: ${ukupnaCena(nizKnjiga)}`);


let prosecnaCena=(niz)=>{

    let prosek=ukupnaCena(niz) / niz.length;

    return prosek;
};


console.log(`prosecna cena knjiga je: ${prosecnaCena(nizKnjiga)}`);




//ukupno stranica

let ukupnoStranica=niz=>{

    let ukupno=0;
    niz.forEach(elem=>{

        ukupno+=elem.brojStrana;


    });
    return ukupno;
};


let prosecnaStranica=niz=>{

    let cena=ukupnaCena(niz);
    let str=ukupnoStranica(niz);
    let rez=cena/str;
    return rez;


};
console.log(`prosecna cena stranice svih knjiga je: ${prosecnaStranica(nizKnjiga)}`);

*/
