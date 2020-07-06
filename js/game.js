const WIDTH = 450;
const HEIGHT = 450;


let posMapa = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGHT)
};

let $map = document.getElementById('mapa');
let $distance = document.getElementById('distance');
let clicks = 0;

$map.addEventListener('click', function (eventoClick) {
    clicks++;
    let distance = getDistance(eventoClick, posMapa);
    let distanceHint = getDistanceHint(distance);
    $distance.innerHTML = `<h1>${distanceHint}</h1>`;

    if (distance < 10) {
        alert(`**GANASTE** Encontraste el tesoro en ${clicks} intentos.`)
        location.reload();
    }
})

