


let wer=document.getElementById('ono');
function paragraf5(n,m)

{	let res="";

	for(i=n; i<=m; i++)

	{

		res+= `<p style='font-size:${i}px'>Pet puta</p>`;
	}
	return res;
}

wer.innerHTML+=paragraf5(10,15);










/ 6. odrediti sumu brojeva od 1 do 100;
// let i = 1;
// let s = 0;
// while (i <= 100){
//     s += i;
//     i++;
// }
// console.log(s)
8:11
a ovo je sa bojama iz funkcija:
function paragraf(boja){
    return `<p style='color: ${boja}'> Tekst ....</p>`;
}
elem.innerHTML += paragraf('red');
elem.innerHTML += paragraf('blue');
function paragraf2(boja, tekst){
    return `<p style='color: ${boja}'>${tekst}</p>`;
}
elem.innerHTML += paragraf2('green', 'lorem ipsum...');
elem.innerHTML += paragraf2('yellow', 'pera peric');




















