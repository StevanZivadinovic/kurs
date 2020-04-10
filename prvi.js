//window.alert("Hello world");//poruka u alert box-u
//document.write("Hello world");//dodavanje sadrzaja
console.log("Hello world");//poruka u konzoli browsera
document.getElementById("par1").innerHTML = "Hello world";
console.log(55);
console.log(-3.996);
console.log("zika09zikic");
console.log('zika09zikic');

console.log(true);
console.log(false);
let x = 3;// promenljiva x, vrednost joj je 3; odmah je zadata vrednost
console.log(x);





let y; //uvodjenje promenjive bez vrednosti na samom startu
y=-9;//ovde smo joj zadali vrednost tek
x=5;
console.log(y);

let $p, _p, p1, p2;
console.log(x,y); //kad hoces da pozoves dve promenljive.

const z = 8.04;
console.log(z);
/*
z=5;
console.log(z);*/

x="utorak";
console.log(x,y);

x="volvo11";
y="volvo12";
console.log(x,y);


x="It's alright";
y='He is call "Johny"';
console.log(x,y);

x='It\'s alright "Johny"'; 
x="It\"s alright 'Johny'";   

x=true;
y=false;
console.log(x,y);


/*ovako ne moze
console.log(m);
let m;*/


/* ovo je undefined*/
let m;
console.log(m);


let age;
console.log(age, age+3);


let n=null;
console.log(n,n+3);

let firstName = 'Pera';
let lastName = 'Peric';
let fullName = firstName + lastName;

console.log(firstName, lastName, fullName);


firstName = 'Pera';
lastName = 'Peric';

fullName = firstName + " " + lastName;//kad hoces da dodas razmak*/

console.log(firstName, lastName, fullName);

//console.log(fullname);-nepostojeca promenljiva, iz razloga sto je jedno slovo promenjeno

console.log(fullName.length);//ocitava broj karaktera u stringu


x=6.7;
y=9;
let t=x*y;
console.log(x,y,t);




x=5;
y=2;
t=x/y;
console.log(x,y,t);




x=5;
y=2;


console.log(x,y);

x=x+y;
console.log(x,y);



x=8;
y=4;
x*=y;
console.log(x,y);


x=3;
y=4;
x++;
y--;
console.log(x,y);



x=4;
y=9;

console.log(y%x);


x=3;
y=9;
console.log(y**x);	


let sati=14;
let minuti=36;
let vreme=sati*60 + minuti;
console.log(vreme);	


let cena=3600;
let novcanica=5000;
console.log(novcanica-cena);


let kurs=117.64;
let eur=240;
let konverzija=kurs*eur;

console.log(konverzija);


eur=240;
let kurseu=120;
let din=eur*kurseu;
let kursdol=110;
let dol=din/kursdol;
console.log(din, dol);


dol=100;
din=dol*kursdol;
eur=din/kurseu;
console.log(eur);


let c=100;
let f=c*1.8+32;
console.log(f);



f=100;
c=(f-32)/1.8;
console.log(c);

 c=100;
let k=c+273.15;
console.log(k);


k=100;
c=k-273.15;
console.log(c);



x=5;
y=3;
x=x**y;
console.log(x);



x=10;
y=32;

console.log(y%x);


