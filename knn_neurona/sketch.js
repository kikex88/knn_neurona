var camara;

function setup() {
  createCanvas(320,240);
  background(255,0,0);

  //accedemos a la camara por medio de la libreria de dom de p5
  camara = createCapture(VIDEO);
  camara.size(320,240);
  camara.hide();

  //vamos a crear un texto usando la libreria de dom de P5
  createP("Presiona botones para entrenar");

  //vamos a crear botones
  var botonLapiz = createButton('Lapiz');
  botonLapiz.class("BotonLapiz");

  var botonCelular = createButton('Celular');
  botonCelular.class("BotonCelular");

  var botonMouse = createButton('Mouse');
  botonMouse.class("BotonMouse");

  var botonCara = createButton('Cara');
  botonCara.class("BotonCara");

  var botonNada = createButton('Nada');
  botonNada.class("BotonNada");

}

function draw() {
  image(camara,0,0,320,240);
}
