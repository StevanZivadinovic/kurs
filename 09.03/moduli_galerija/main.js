/*import{generateList,generateItem as generateListItem} from "./modules/list.js";//ovo as je ako 

import{generateTable, generateTableRow, generateItem as generateTableItem} from "./modules/table.js";

//import generateTable from "./modules/table.js" //mozes i ovo da uneses tako da sada sa ovim gornjim redom imas dva kanala preko kojih
//importujes generateTable. Ovaj red je u stvari difoltni nacin importovanja
 //IZRADA LISTE
let ul=generateList(document.body);
generateListItem(ul,"images/img1.jpg");
generateListItem(ul,"images/img2.jpg");
generateListItem(ul,"images/img3.jpg");



let ul2=generateList(document.body);
generateListItem(ul2,"images/img3.jpg"); */




//IZRADA TABELE 
/*
let table=generateTable(document.body);
let tr1=generateTableRow(table);
generateTableItem(tr1,"images/img1.jpg");
generateTableItem(tr1,"images/img2.jpg");
let tr2=generateTableRow(table);
generateTableItem(tr2,"images/img3.jpg");
generateTableItem(tr2,"images/img3.jpg");
*/

/*
import * as List from "./modules/list.js";
import * as Table from "./modules/table.js";


let ul=List.generateList(document.body);
List.generateItem(ul,"images/img1.jpg");
List.generateItem(ul,"images/img2.jpg");
List.generateItem(ul,"images/img3.jpg");

let table=Table.generateTable(document.body);
let tr=Table.generateTableRow(table);
Table.generateItem(tr,"images/img1.jpg");
Table.generateItem(tr,"images/img2.jpg");
Table.generateItem(tr,"images/img3.jpg");
*/
//Moje 

import * as General from './modules/general.js';
import * as List from './modules/list.js';
import * as Table from './modules/table.js';

/*
let ul=List.generateList(document.body);
List.generateListItem(ul,'images/img1.jpg');
List.generateListItem(ul,'images/img3.jpg');
List.generateListItem(ul,'images/img1.jpg'); */

let table=Table.generateTable(document.body);
let red=Table.generateTableRow(table);
Table.generateTableItem(red,'images/img1.jpg');
Table.generateTableItem(red,'images/img3.jpg');
Table.generateTableItem(red,'images/img1.jpg');

















