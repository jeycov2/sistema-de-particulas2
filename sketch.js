let nlineas = 100
let lineas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < nlineas; i++) {
    lineas[i] = new RandomWalker();
  }

}

function draw() {
  background('rgba(0, 0, 0, 0.1)');

  for (let i = 1; i < nlineas; i++) {
    lineas[i].update();
    lineas[i].display();
  }
  // entre mayor el numero mas rapido será la rotación

}




//______Clases_______//
//___________________//
//___________________//

//random walker//

class RandomWalker {
  constructor(_nombre) {
    this.red = random(0, 200);
    this.green = random(0, 2);
    this.blue = random(0, 190);

    this.t = 0;
    this.tspeed = random(3);

    this.noiseShift = random(1, 100);


    // acá mod la posicion
    this.pos1 = createVector(width / 2, height / 2);
    this.pos2 = createVector(width / 2, height / 2);





    // acá mod la velocidad
    this.speed = createVector(random(-5, 10), random(-5, 10));


  }
  update(_t) {

    this.speed.rotate(map(noise(this.t + this.noiseShift), 0, 1, -0.5, 0.5));
    this.pos1.add(this.speed);

    this.t += this.tspeed;

  }
  display() {
    stroke(this.red, this.green, this.blue, 200);
    strokeWeight(2);

    line(this.pos1.x, this.pos1.y, this.pos2.x, this.pos2.y);

    noStroke();
    fill(255, 237, 0);
    ellipse(this.pos1.x, this.pos1.y, 10);


  }
}

