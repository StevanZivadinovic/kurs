
import { generateImage } from "./DrugoVezbanjeModuli.js";
import{generateList,generateListItem} from "./DrugoVezbanjeModuli2.js";
import { generateTable, generateTableItem,generateTableRow } from "./DrugoVezbanjeModuli3.js";



let tabela=generateTable(document.body);
let red=generateTableRow(tabela);
let item=generateTableItem(red,'images/photo1.jfif');
let item1=generateTableItem(red,'images/photo1.jfif');
let item2=generateTableItem(red,'images/photo1.jfif');



/*

let ul=generateList(document.body);
generateListItem(ul,"images/photo1.jfif");
generateListItem(ul,"images/photo2.jfif");
generateListItem(ul,"images/photo3.jfif");



let ul2=generateList(document.body);
generateListItem(ul2,"images/photo3.jfif");

*/