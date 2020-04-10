import{Autobus} from "./autobus.js";


let a1=new Autobus('NI-111AA',64);
a1.stampaj();
let a2=new Autobus('BG-222BB',32);
let a3=new Autobus('KG-333CC',60);



let autobusi=[a1,a2,a3];
let ispisAutobusa=autobusi=>{

autobusi.forEach(a => {
    a.stampaj();
});

};


ispisAutobusa(autobusi);


/*Napraviti funkciju ukupnoSedista kojoj se prosleđuje niz autobusa a koja
određuje i vraća koliko ukupno sedišta sadrže svi autobusi koji se nalaze u
nizu autobusa. */



let ukupnoSedista=niz=>{

    let brSedista=0;
    niz.forEach(elem=>{

        brSedista+=elem.brSedista;//brSedista ovo zadnje, je property(polje, atribut);

    });

    return brSedista;

};

console.log(`Ukupan br sedista je ${ukupnoSedista(autobusi)}`);

/*Napraviti funkciju ljudi kojoj se prosleđuje broj ljudi i niz autobusa a
funkcija vraća true ukoliko je moguće toliko ljudi smestiti u autobuse, u
suprotnom vraća false.*/



let ljudi=(niz,brLjudi)=>{

let uk=ukupnoSedista(niz);
if(uk>=brLjudi){

    return true;
}

else{

    return false;
}

};

console.log(ljudi(autobusi,160));
console.log(ljudi(autobusi,156));





















