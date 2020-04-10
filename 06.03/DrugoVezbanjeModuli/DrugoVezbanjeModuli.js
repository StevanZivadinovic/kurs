let generateImage=src=>{
let img=document.createElement('img');
img.setAttribute('src',src);
img.setAttribute('alt','slika se nije ucitala');

return img;



};

export{generateImage};