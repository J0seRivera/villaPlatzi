var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var cantidadVacas = aleatorio(1,10);
var cantidadCerdos = aleatorio(1,10);

var teclas = 
{
    UP: 38,
    DOWN: 40,
    RIGTH: 39,
    LEFTH: 37
};
document.addEventListener("keydown", dibujar);
var X = 300;
var Y = 420;

var fondo =
{
    url: "tile.png",
    cargaOk: false
}
var vaca = 
{
    url : "vaca.png",
    cargaOk: false
}
var pollo = 
{
    url : "pollo.png",
    cargaOk: false
}
var cerdo =
{
    url: "cerdo.png",
    cargaOk: false
}

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

function cargarFondo()
{
    fondo.cargaOk = true;
    dibujar();   
}
function cargarVacas()
{
    vaca.cargaOk = true;
    dibujar();
}
function cargarCerdos()
{
    cerdo.cargaOk = true;
    dibujar();
}
function cargarPollo()
{
    pollo.cargaOk = true;
    dibujar();
}

function dibujar(evento)
{
    if (fondo.cargaOk) 
    {
        papel.drawImage(fondo.imagen, 0, 0);
        for (i = 0; i < cantidadVacas; i++)
        {
            var x = (aleatorio(0, 7) * 60);
            var y = (aleatorio(0, 7) * 60);
            papel.drawImage(vaca.imagen, x, y);
        }
        for (i = 0 ; i < cantidadCerdos; i ++)
        {
            var x = (aleatorio(0, 7) * 60);
            var y = (aleatorio(0, 7) * 60);
            papel.drawImage(cerdo.imagen, x, y);
        }
        var movimiento = 20;
        switch (evento.keyCode) {
        case teclas.UP: papel.drawImage(pollo.imagen, X, Y - movimiento); Y = Y - movimiento; break;
        case teclas.DOWN: papel.drawImage(pollo.imagen, X, Y + movimiento); Y = Y+ movimiento; break;
        case teclas.RIGTH: papel.drawImage(pollo.imagen, X + movimiento, Y); X = X + movimiento; break; 
        case teclas.LEFTH: papel.drawImage(pollo.imagen, X - movimiento, Y); X = X - movimiento; break;
        }
    }
}
function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1 )) + min;
    return resultado;
}
