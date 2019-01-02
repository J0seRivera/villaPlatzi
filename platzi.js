var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var cantidad = aleatorio(1,50);

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

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

//var pollo = new Image();
//pollo.src = "pollo.png";
//pollo.addEventListener("load", dcargarPollo);
//var cerdo = new Image();
//cerdo.src = "cerdo.png";
//cerdo.addEventListener("load", dcargarCerdo);

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

//function dibujarpollo()
//{
//    papel.drawImage(pollo,200,200);
//}
//function dibujarcerdo()
//{
 //   papel.drawImage(cerdo, 350,200);
//}
function dibujar()
{
    if (fondo.cargaOk) {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (fondo.cargaOk) 
    {
        for (i = 0; i < cantidad; i++)
        {
            var x = (aleatorio(0, 7) * 60);
            var y = (aleatorio(0, 7) * 60);
            papel.drawImage(vaca.imagen, x, y);
        }   
    }
}
function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1 )) + min;
    return resultado;
}
var z = aleatorio(10, 20);

