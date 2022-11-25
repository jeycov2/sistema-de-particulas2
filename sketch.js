//  ________  ___  ________  _________  _______   _____ ______   ________                               
// |\   ____\|\  \|\   ____\|\___   ___\\  ___ \ |\   _ \  _   \|\   __  \                              
// \ \  \___|\ \  \ \  \___|\|___ \  \_\ \   __/|\ \  \\\__\ \  \ \  \|\  \                             
//  \ \_____  \ \  \ \_____  \   \ \  \ \ \  \_|/_\ \  \\|__| \  \ \   __  \                            
//   \|____|\  \ \  \|____|\  \   \ \  \ \ \  \_|\ \ \  \    \ \  \ \  \ \  \                           
//     ____\_\  \ \__\____\_\  \   \ \__\ \ \_______\ \__\    \ \__\ \__\ \__\                          
//    |\_________\|__|\_________\   \|__|  \|_______|\|__|     \|__|\|__|\|__|                          
//    \|_________|   \|_________|                                                                       


//  ________  _______                                                                                   
// |\   ___ \|\  ___ \                                                                                  
// \ \  \_|\ \ \   __/|                                                                                 
//  \ \  \ \\ \ \  \_|/__                                                                               
//   \ \  \_\\ \ \  \_|\ \                                                                              
//    \ \_______\ \_______\                                                                             
//     \|_______|\|_______|                                                                             


//  ________  ________  ________  _________  ___  ________  ___  ___  ___       ________  ________      
// |\   __  \|\   __  \|\   __  \|\___   ___\\  \|\   ____\|\  \|\  \|\  \     |\   __  \|\   ____\     
// \ \  \|\  \ \  \|\  \ \  \|\  \|___ \  \_\ \  \ \  \___|\ \  \\\  \ \  \    \ \  \|\  \ \  \___|_    
//  \ \   ____\ \   __  \ \   _  _\   \ \  \ \ \  \ \  \    \ \  \\\  \ \  \    \ \   __  \ \_____  \   
//   \ \  \___|\ \  \ \  \ \  \\  \|   \ \  \ \ \  \ \  \____\ \  \\\  \ \  \____\ \  \ \  \|____|\  \  
//    \ \__\    \ \__\ \__\ \__\\ _\    \ \__\ \ \__\ \_______\ \_______\ \_______\ \__\ \__\____\_\  \ 
//     \|__|     \|__|\|__|\|__|\|__|    \|__|  \|__|\|_______|\|_______|\|_______|\|__|\|__|\_________\
//                                                                                          \|_________|




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


//               ,--,                                                   
//            ,---.'|                                                   
//   ,----..  |   | :      ,---,       .--.--.       ,---,.  .--.--.    
//  /   /   \ :   : |     '  .' \     /  /    '.   ,'  .' | /  /    '.  
// |   :     :|   ' :    /  ;    '.  |  :  /`. / ,---.'   ||  :  /`. /  
// .   |  ;. /;   ; '   :  :       \ ;  |  |--`  |   |   .';  |  |--`   
// .   ; /--` '   | |__ :  |   /\   \|  :  ;_    :   :  |-,|  :  ;_     
// ;   | ;    |   | :.'||  :  ' ;.   :\  \    `. :   |  ;/| \  \    `.  
// |   : |    '   :    ;|  |  ;/  \   \`----.   \|   :   .'  `----.   \ 
// .   | '___ |   |  ./ '  :  | \  \ ,'__ \  \  ||   |  |-,  __ \  \  | 
// '   ; : .'|;   : ;   |  |  '  '--' /  /`--'  /'   :  ;/| /  /`--'  / 
// '   | '/  :|   ,/    |  :  :      '--'.     / |   |    \'--'.     /  
// |   :    / '---'     |  | ,'        `--'---'  |   :   .'  `--'---'   
//  \   \ .'            `--''                    |   | ,'               
//   `---`                                       `----'                 




//random walker//

class RandomWalker {
  constructor(_nombre) {
    // para el color
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

