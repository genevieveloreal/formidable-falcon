let logo = document.querySelector('#logo');
let images = [
    'resources/img/css3.png',
    'resources/img/javascript.png',
    'resources/img/html.png'];
let imageCounter = 0;
let degrees = 0;


function rotate(){
    // rotating the logo;
    logo.style.transform = 'rotateY(' + degrees +'deg)';
    degrees++;
    if (degrees > 359){
        degrees = 1;
    }

    if(degrees ===  270){
        if(imageCounter <= images.length - 1){
            logo.src = images[imageCounter];
            imageCounter++;
        }else{
            imageCounter = 0;
            logo.src = images[imageCounter];
            imageCounter++;
        }
    }
}
 setInterval(rotate, 10);