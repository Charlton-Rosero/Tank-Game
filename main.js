let canvas = document.querySelector('canvas');

let context = canvas.getContext('2d');



//***CANVAS WIDTH="600" HEIGHT="800"***//

class Paku {
    constructor(x, y) { 
      this.width = 20;
      this.height = 20;
      this.position = {
        x: x , 
        y: y 
      };
    }
  draw() {
    context.fillStyle = 'white' 
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
 
}



let posX = 300;
let posY = 400; //Starting Position
let dx = 0;
let dy = 0;

function movePlayer(){
    context.fillStyle = 'black';
    context.fillRect(0,0,600,800) //clears out every movement

    posX += dx;
    posY += dy;

    let player = new Paku(posX, posY);
        player.draw(context)
    if (posX > 573){
        dx = 0
        posX = 573
    }
    if (posX < 7){
        dx = 0
        posX = 7
    }
    if (posY < 7){
        dy = 0
        posY = 7
    }
    if (posY > 773){
        dy = 0
        posY = 773
    }
}

setInterval(movePlayer, 20)

// keycodes 
    // left: 37
    // right: 39
    // down: 40
    // up: 38
    // space: 32


window.addEventListener('keydown',(event)=>{
    switch(event.keyCode){
        case 37:
            dx = -5
            dy = 0
        break;    
        case 38 :
            dx = 0;
            dy = -5
        break;
        case 38 :
            dx = 0;
            dy = -5
        break;
        case 40 :
            dx = 0;
            dy = 5
        break;
        case 39 :
            dx = 5;
            dy = 0
        break;

    }
})
window.addEventListener('keyup',(event)=>{
    switch(event.keyCode){
        case 37:
            dx = 0
            dy = 0
        break;    
        case 38 :
            dx = 0;
            dy = 0
        break;
        case 38 :
            dx = 0;
            dy = 0
        break;
        case 40 :
            dx = 0;
            dy = 0
        break;
        case 39 :
            dx = 0;
            dy = 0
        break;

    }
})