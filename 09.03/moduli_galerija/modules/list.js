/*import generateImage from "./general.js";//kad imas jednu stavku, tj samo jednu funkciju koju importujes ne mozes da stavljas viticaste
//zagrade. mora da ide bez njih

//import {generateImage} from "./general.js";



let generateList=parent=>{

    let ul=document.createElement('ul');
    ul.style.listStyleType="none";
    parent.appendChild(ul);
    return ul;

};


let generateItem=(parent,src)=>{

let li=document.createElement('li');
li.style.float="left";
let img=generateImage(src);
li.appendChild(img);
parent.appendChild(li);

};

export{generateList,generateItem}; */

//MOJE

import {generateImage} from './general.js'


let generateList=parent=>{

    let ul=document.createElement('ul');
    ul.style.listStyleType='none';
    parent.appendChild(ul);
    return ul;

};


let generateListItem=(parent,src)=>{

    let li=document.createElement('li');
    let img=generateImage(src);
    li.appendChild(img);
    parent.appendChild(li);

    return li;

    

};

export {generateList,generateListItem};














