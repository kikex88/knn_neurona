var camara;
var BotonesEntrenar;
var knn;
var modelo;
var Texto;
var clasificando = false;

function setup() {
  createCanvas(320,240);
  background(255,0,0);

  //accedemos a la camara por medio de la libreria de dom de p5
  camara = createCapture(VIDEO);
  camara.size(320,240);
  camara.hide();

  modelo=ml5.featureExtractor('MobileNet',ModeloListo);
  knn=ml5.KNNClassifier();

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

  Texto = createP("Modelo no listo, esperando");

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
  var nombreBoton = this.elt.innerHTML;
  console.log("Entrenando a "+nombreBoton);
  EntrenarKnn(nombreBoton);
  
}

function EntrenarKnn(ObjetoEntrenar){
  const Imagen = modelo.infer(camara);
  knn.addExample(Imagen, ObjetoEntrenar);
}

function draw() {
  image(camara,0,0,320,240);
  if(knn.getNumLabels()>0 && !clasificando){
    clasificar();
    clasificando=true;
  }
}

function ModeloListo(){
  console.log("modelo listo");  
  Texto.html("Modelo listo, empieza a entrenar");
}

function clasificar(){
  const Imagen = modelo.infer(camara);
  knn.classify(Imagen, function(error,result){
    if(error){
      console.error();
      
    }else{
      Texto.html("Es un "+ result.label);
      clasificar();
    }
  })
}
