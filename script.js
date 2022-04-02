let objCanva = document.getElementById("spaceCanva");
let lienzo = objCanva.getContext("2d");
let color = "#000";
let w = objCanva.width;
let h = objCanva.height;
document.addEventListener("mousemove", dibujarMov);
document.addEventListener("mousedown", clickStart);
var x = 0;
var y = 0;

/*
----------- Funciones ----------
*/
function dibujar(xo, yo, xf, yf) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xo, yo);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}

function clickStart(event) {
    if (event.target.id === "spaceCanva" && event.buttons === 1){
        x = event.offsetX;
        y = event.offsetY;
    }
    return x, y;
}


function dibujarMov(event) {
    if (event.target.id === "spaceCanva" && event.buttons === 1){
        let xf = event.offsetX;
        let yf = event.offsetY;
        dibujar(x, y, xf, yf);
        return x = xf, y = yf;
    }
}

/* 
----- Dibujar borde del liezo -------
*/

dibujar(0, 0, 0, h);
dibujar(0, h, w, h);
dibujar(w, h, w, 0);
dibujar(w, 0, 0, 0);