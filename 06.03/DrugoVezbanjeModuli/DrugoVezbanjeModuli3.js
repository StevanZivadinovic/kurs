import {generateImage} from "./DrugoVezbanjeModuli.js";

let generateTable=parent=>{
let tabela=document.createElement('table');
parent.appendChild(tabela);

return tabela;


};

let generateTableRow=parent=>{
let tr=document.createElement('tr');
parent.appendChild(tr);

return tr;

};

let generateTableItem=(parent,src)=>{
let td=document.createElement('td');
let img=generateImage(src);
td.appendChild(img);
parent.appendChild(td);


};

export{generateTable,generateTableRow,generateTableItem};