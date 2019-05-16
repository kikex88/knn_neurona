var camara;

var BotonesEntrenar;

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
  botonLapiz.class("BotonEntrenar");

  var botonCelular = createButton('Celular');
  botonCelular.class("BotonEntrenar");

  var botonMouse = createButton('Mouse');
  botonMouse.class("BotonEntrenar");

  var botonCara = createButton('Cara');
  botonCara.class("BotonEntrenar");

  var botonNada = createButton('Nada');
  botonNada.class("BotonEntrenar");

  //agregando estilo al boton
  BotonesEntrenar = selectAll(".BotonEntrenar");

  for(var B=0; B<BotonesEntrenar.length;B++)
  {
    BotonesEntrenar[B].style("margin","5px");
    BotonesEntrenar[B].style("padding","6px");
    BotonesEntrenar[B].mousePressed(presionandoBoton);
  }

}

// función para realizar acción al presionar un botón
function presionandoBoton()
{
  var nombre = this.elt.innerHTML;
  console.log("has presionado "+nombre);
  
}

function draw() {
  image(camara,0,0,320,240);
}
