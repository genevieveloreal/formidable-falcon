let underlay = document.querySelector('#underlay');
//let r , g, b;

let bgColours = [
    'rgba(253, 222, 153',
    'rgba(252, 224, 179',
    'rgba(250, 233, 178'

]

//generating numbers within range
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// generating and applying random colour values for red, green and blue.
function randomColour(){
    let colourPos = getRandomNum(0, 2);
    underlay.style.backgroundColor = bgColours[colourPos] + ',0.7)';

}

setInterval(randomColour, 6000);