
let canvas = document.querySelector('#home');

let context = canvas.getContext('2d');

//***CANVAS WIDTH="600" HEIGHT="800"***//





class Paku {
    constructor(x, y) { 
      this.width = 20;
      this.height = 20;
      this.bulletSpeed = 13;
      this.position = {
        x: x , 
        y: y     
      };
    }
    draw(context) {  
        context.fillStyle = 'white' 
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    
    }
    
}

class Projectile{
    constructor(x, y, speed, damage){
        this.x = x;
        this.y = y;
        this.speed = speed;
         this.damage = damage;
        this.color = 'white'
        
    }

    draw(){
        context.fillStyle = this.color
        context.fillRect(this.x, this.y, 5, 5);
    }

}

let posX = 300;
let posY = 770; //Player starting Position
let moveX = 0;
let moveY = 0;

let p2X = 300;
let p2Y = 20; //Player starting Position
let move2X = 0;
let move2Y = 0;





function gameclear(){
    context.fillStyle = 'black'; 
    context.fillRect(0,0,600,800) // clear's the game every movement of the charactr  
}

// let posX = 300;
// let posY = 770; //Player starting Position
// let moveX = 0;
// let moveY = 0;

// let p2X = 300;
// let p2Y = 20; //Player starting Position
// let move2X = 0;
// let move2Y = 0;

let shootX = posX;
let shootY = posY; //Player starting Position
let moveBullet = 0

function movePlayer(){
        gameclear() 

     
   
            
      
     
    posX += moveX;
    posY += moveY;
    

    p2X += move2X;
    p2Y += move2Y;
    
    let player = new Paku(posX, posY);
        player.draw(context)

    let player2 = new Paku(p2X, p2Y);
        player2.draw(context)
    
    


    if (posX > 573){
        moveX = 0
        posX = 573
    }
    if (posX < 7){
        moveX = 0
        posX = 7
    }
    if (posY < 7){
        moveY = 0
        posY = 7
    }
    if (posY > 773){
        moveY = 0
        posY = 773
    }

    //player 2 bounderies
    if (p2X > 573){
        move2X = 0
        p2X = 573
    }
    if (p2X < 7){
        move2X = 0
        p2X = 7
    }
    if (p2Y < 7){
        move2Y = 0
        p2Y = 7
    }
    
    if (p2Y > 773){
        move2Y = 0
        p2Y = 773
    }
}
setInterval(movePlayer, 10)

// keycodes 
    // left: 37
    // right: 39
    // down: 40
    // up: 38
    // space: 32

    // W: 87
    // a: 65
    // s: 83
    // d: 68


// key events
window.addEventListener('keydown',(event)=>{
// console.log(event) 

    switch(event.keyCode){
        case 32:
            shootX = 0
            moveBullet = -13

            
        break;    
        case 37:
            moveX = -5
            moveY = 0
        break;    
        case 38 :
            moveX = 0;
            moveY = -5
        break;
        case 38 :
            moveX = 0;
            moveY = -5
        break;
        case 40 :
            moveX = 0;
            moveY = 5
        break;
        case 39 :
            moveX = 5;
            moveY = 0
        break;

        case 65:
                move2X = -5
                move2Y = 0
        break;    
        case 87 :
                move2X = 0;
                move2Y = -5
        break;
        case 83 :
            move2X = 0;
            move2Y = 5
        break;
        case 68 :
             move2X = 5;
            move2Y = 0
        break;


        // case 32 :
        //  shootY = -13
        // break;

    }
})

window.addEventListener('keyup',(event)=>{
    switch(event.keyCode){
        case 37:
            moveX = 0
            moveY = 0
        break;    
        case 38 :
            moveX = 0;
            moveY = 0
        break;
        case 40 :
            moveX = 0;
            moveY = 0
        break;
        case 39 :
            moveX = 0;
            moveY = 0
        break;
        case 32:
            const shoot = new Projectile(posX+7,shootY)
            shoot.draw()
        break; 
        case 65:
                move2X = 0
                move2Y = 0
        break;    
        case 87 :
                move2X = 0;
                move2Y = 0
        break;
        case 83 :
            move2X = 0;
            move2Y = 0
        break;
        case 68 :
             move2X = 0;
            move2Y = 0
        break;


    }
})

