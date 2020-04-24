let getRandomNumber = size => {
    return Math.floor(Math.random() * size)
}

let getDistance = (eventoClick, posMapa) => {

    let diffX = eventoClick.offsetX - posMapa.x;
    let diffY = eventoClick.offsetY - posMapa.y;

    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

let getDistanceHint = distance => {
    if (distance < 20)
        return "TE QUEMAS!!";
    else if (distance < 30)
        return "Muy caliente!";
    else if (distance < 80)
        return "Caliente!";
    else if (distance < 150)
        return "Tibio...";
    else if (distance < 250)
        return "Frioo";
    else if (distance < 350)
        return "Muy frio!";
    else
        return "HELADO!!";
}
