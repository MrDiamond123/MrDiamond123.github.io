const canvas = document.getElementById('polygon');
const ctx = canvas.getContext('2d');

var polygonSides = document.getElementById('polygonSides');

var numberOfSides = 6,
    size = 25,
    Xcenter = 25,
    Ycenter = 25;

function makePolygon() {
    ctx.beginPath();
    ctx.moveTo (Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));          

    for (var i = 1; i <= numberOfSides;i += 1) {
    ctx.lineTo (Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
    }

    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;
    ctx.stroke();
}

function changePolygon() {
    numberOfSides = polygonSides.value;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    makePolygon();
}

polygonSides.value = numberOfSides;
makePolygon();


//Thanks stackoverflow :D
