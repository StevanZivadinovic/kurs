
/*
import generateImage from "./general.js";

//import{generateImage} from "./general.js";



let generateTable=parent=>{

let table=document.createElement('table');
table.style.border='1px solid black';
parent.appendChild(table);
return table;

};

let generateTableRow=parent=>{

let tr=document.createElement('tr');
tr.style.padding="10px";
parent.appendChild(tr);
return tr;

};

let generateItem=(parent,src)=>{

let td=document.createElement('td');
let img=generateImage(src);
td.appendChild(img);
parent.appendChild(td);
return td;

};
export {generateTable,generateTableRow,generateItem};//sad ovde i u list.js imamo dve funkcije koje se isto zovu generateItem
*/

import { generateImage } from "./general.js";



let generateTable=parent=>{

    let tabela=document.createElement('table');
    tabela.style.border='1px solid black';
    parent.appendChild(tabela);
    return tabela;

};

let generateTableRow=parent=>{
    let red=document.createElement('tr');
    red.style.padding='10px';
    parent.appendChild(red);
    return red;

};

let generateTableItem=(parent, src)=>{
    let item=document.createElement('td');
    let img=generateImage(src);
    item.appendChild(img);
    parent.appendChild(item);
    return item;
};


export {generateTable,generateTableRow,generateTableItem};










