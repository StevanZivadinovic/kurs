


let tacniOdgovori=["B","A","B","B"];

let calculateScore=(odgovori,nadimak)=>{


    let score=0;
	odgovori.forEach((odgovor,index)=>{

		if (odgovor==tacniOdgovori[index]) 

		{
			score+=20;
		}


    });
    	if (nadimak.length>6) 

		{

			score+=20;
		}
return score;
};

export default calculateScore; 


