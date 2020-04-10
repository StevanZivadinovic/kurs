


import createDiv from "./modules/resault_div.js"
import calculateScore from "./modules/answers.js"
import generateScore from "./modules/clock.js";


let form=document.querySelector('form');

let [div,h2]=createDiv('intro', document.body, document.body.children[1]);//naziv klase je 'intro' ovde
console.log(div);
let nadimak=document.querySelector('#nadimak').value;

form.addEventListener('submit', event=>{//kad je kliknuto na submit pokupipli smo odgovore odg1modg2...

	event.preventDefault();

	let odg1=form.q1.value;//ovde imamo bas vrednost onog buttona koji smo cekirali
	let odg2=form.q2.value;
	let odg3=form.q3.value;
	let odg4=form.q4.value;
	
	let odgovori=[odg1,odg2,odg3,odg4];
	let score=calculateScore(odgovori, nadimak);

	scroll(0, 0);
	div.style.display='block';
	
	generateScore(h2,score);

}); 

























