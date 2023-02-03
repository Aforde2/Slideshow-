let i = 0 
let images= [];
let time = 3000; 

images[0] = 'poster1.png'
images[1] = 'poster2.png'
images[2] = 'poster3.png'
images[3] = 'poster4.png'
images[4] = 'poster5.png'

function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }
    setTimeout('changeImg()', time);
}

window.onload = changeImg