let objCanva = document.getElementById("spaceCanva");
let objColor = document.getElementById("colorInput");
let objLineWidth = document.getElementById("lineWidthInput");
let objCleanButton = document.getElementById("cleanButtonInput");
let lienzo = objCanva.getContext("2d");
let color = "#000";
let w = objCanva.width;
let h = objCanva.height;
var x = 0;
var y = 0;

document.addEventListener("mousemove", dibujarMov);
document.addEventListener("mousedown", clickStart);
objCleanButton.addEventListener("click", cleanCanva)


/*
----------- Funciones ----------
*/
function dibujar(xo, yo, xf, yf, color, tamañoLinea) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = tamañoLinea;
    lienzo.moveTo(xo, yo);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}

function clickStart(event) {
    if (event.target.id === "spaceCanva" && event.buttons === 1){
        x = event.offsetX;
        y = event.offsetY;
        color = objColor.value;
        lineWidth = objLineWidth.value;
        return x, y, color, lineWidth;
    }
}

function dibujarMov(event) {
    console.log(event);
    if (event.target.id === "spaceCanva" && event.buttons === 1){
        let xf = event.offsetX;
        let yf = event.offsetY;
        dibujar(x, y, xf, yf, color, lineWidth);
        return x = xf, y = yf;
    }
}

function cleanCanva() {
    lienzo.clearRect(0, 0, w, h);
}