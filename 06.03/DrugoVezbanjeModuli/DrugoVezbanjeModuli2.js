
import {generateImage} from "./DrugoVezbanjeModuli.js"

let generateList=parent=>{


    let ul=document.createElement('ul');
    ul.style.listStyleType="none";
    parent.appendChild(ul);
    return ul;


};


let generateListItem=(parent,src)=>{

    let li=document.createElement('li');
    li.style.listStyleType='none';

    let img=generateImage(src);
    li.appendChild(img);
    parent.appendChild(li);

    return li;


};
export{generateList,generateListItem};
