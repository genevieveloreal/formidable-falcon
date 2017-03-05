let underlay = document.querySelector('#underlay');
let r , g, b;

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomColour(){
    r = getRandomNum(245, 250);
    g = getRandomNum(245, 250);
    b = getRandomNum(245, 255);

    underlay.style.backgroundColor = 'rgba(' + r +',' + g +',' + b +',0.8)';

}

setInterval(randomColour, 2000);