
let canvas = document.querySelector('#home');

let context = canvas.getContext('2d');

//***CANVAS WIDTH="600" HEIGHT="800"***//

const CANVAS_WIDTH = 600
const Canvas_HEIGHT = 800

// 2/16/2022
class Projectile{
    constructor(x, y){
        this.x = x;
        this.y = y;
        // this.speed = speed;
        //  this.damage = damage;
        this.color = 'white'
        
    }

    draw(){
        context.fillStyle = this.color
        context.fillRect(this.x, this.y, 5, 5);
    }

}

// 2/14/2022 
class Paku {
    constructor(x, y, bullet) { 
      this.width = 20;
      this.height = 20;
      this.bullet = bullet;
      this.playerSpeed = 5
      this.x = x 
      this.y = y     

      addEventListener('keydown', this.keypressed)
      addEventListener('keyup', this.keyrelease)

    }
    
    draw() { // Draws everything on the canvas
        this.border()
        this.Speed()
        context.fillStyle = 'white'
        context.fillRect(this.x, this.y, this.width, this.height);
        this.pew()
     }

     pew(){
         if(this.pewpew){
             console.log('pewpew')
         }
     }
    Speed(){
        if(this.left){
            this.x  -= this.playerSpeed
        }
        if(this.right){
            this.x  += this.playerSpeed
        }
        if(this.up){
            this.y  -= this.playerSpeed
        }
        if(this.down){
            this.y  += this.playerSpeed
        }
    }   

        border(){
            if (this.x > 573){
                this.x = 573
            }
            if (this.x  < 7){
                this.x = 7
            }
            if (this.y < 7){
                this.y = 7
            }
            if (this.y > 773){
                this.y = 773
            }

        }
// // keycodes 
//     // left: 37
//     // right: 39
//     // down: 40
//     // up: 38
//     // space: 32
       // Enter: 13
    keypressed = (event) =>{
        // test
        // console.log(event)

        switch(event.keyCode){   
            case 37:
               console.log('left')
               this.left = true
            break;   
            case 39:
                this.right = true 
            break; 
            case 40:
                this.down = true
            break; 
            case 38:
                this.up = true
            break;
            case 13:
                this.pewpew = true
            break;        
        }
    }   
    keyrelease = (event) =>{
        switch(event.keyCode){   
            case 37:
               console.log('left')
               this.left = false
            break;   
            case 39:
                this.right = false
            break; 
            case 40:
                this.down = false
            break; 
            case 38:
                this.up = false
            break;  
            case 13:
                this.pewpew = false
            break;           
        }
    }   

}




class Paku2 {
    constructor(x, y) { 
      this.width = 20;
      this.height = 20;
      this.bulletSpeed = 13;
      this.playerSpeed = 5
      this.x = x 
      this.y = y     

      addEventListener('keydown', this.keypressed)
      addEventListener('keyup', this.keyrelease)

    }
    
    
    draw() {  
        // this.pew()
        this.border()
        this.Speed()
        context.fillStyle = 'white'
        context.fillRect(this.x, this.y, this.width, this.height);
        
     }

   
    Speed(){
        if(this.left){
            this.x  -= this.playerSpeed
        }
        if(this.right){
            this.x  += this.playerSpeed
        }
        if(this.up){
            this.y  -= this.playerSpeed
        }
        if(this.down){
            this.y  += this.playerSpeed
        }
    }   
     
    border(){
        if (this.x > 573){
            this.x = 573
        }
        if (this.x  < 7){
            this.x = 7
        }
        if (this.y < 7){
            this.y = 7
        }
        if (this.y > 773){
            this.y = 773
        }

    }
//  // KEYCODES
    // space: 32
    // W: 87
    // a: 65
    // s: 83
    // d: 68

    keypressed = (event) =>{

        switch(event.keyCode){   
            case 65:
               console.log('left')
               this.left = true
            break;   
            case 68:
                this.right = true 
            break; 
            case 83:
                this.down = true
            break; 
            case 87:
                this.up = true
            break;          
        }
    }   
    keyrelease = (event) =>{
        switch(event.keyCode){   
            case 65:
               console.log('left')
               this.left = false
            break;   
            case 68:
                this.right = false
            break; 
            case 83:
                this.down = false
            break; 
            case 87:
                this.up = false
            break;          
        }
    }   

}



// 2/16/2022

let player = new Paku (200,200)
let player2 = new Paku2 (300,20)

function clear(){
    context.fillStyle = 'black'; 
    context.fillRect(0,0,600,800) // clear's the game every Speedment of the charactr  
     player.draw()
     player2.draw()
}
setInterval(clear, 20)







/*************************************************************/
/************************************************************/
// ORIGINAL CODE

// class Projectile{
//     constructor(x, y){
//         this.x = x;
//         this.y = y;
//         // this.speed = speed;
//         //  this.damage = damage;
//         this.color = 'white'
        
//     }

//     draw(){
//         context.fillStyle = this.color
//         context.fillRect(this.x, this.y, 5, 5);
//     }

// }

// let posX = 300;
// let posY = 770; //Player starting Position
// let SpeedX = 0;
// let SpeedY = 0;

// let p2X = 300;
// let p2Y = 20; //Player starting Position
// let Speed2X = 0;
// let Speed2Y = 0;




// 2/15/2022
// function gameclear(){
//     context.fillStyle = 'black'; 
//     context.fillRect(0,0,600,800) // clear's the game every Speedment of the charactr  
// }

// // let posX = 300;
// // let posY = 770; //Player starting Position
// // let SpeedX = 0;
// // let SpeedY = 0;

// // let p2X = 300;
// // let p2Y = 20; //Player starting Position
// // let Speed2X = 0;
// // let Speed2Y = 0;

// let shootX = posX;
// let shootY = posY; //Player starting Position
// let SpeedBullet = 0

// function SpeedPlayer(){
//         gameclear() 

     
   
            
      
     
//     posX += SpeedX;
//     posY += SpeedY;
    
//     shootY += SpeedBullet
//     p2X += Speed2X;
//     p2Y += Speed2Y;
    
//     let player = new Paku(posX, posY);
//         player.draw(context)

//     let player2 = new Paku(p2X, p2Y);
//         player2.draw(context)
    
//     let shoot = new Projectile(posX, shootY)
//             shoot.draw()
            

//     if (posX > 573){
//         SpeedX = 0
//         posX = 573
//     }
//     if (posX < 7){
//         SpeedX = 0
//         posX = 7
//     }
//     if (posY < 7){
//         SpeedY = 0
//         posY = 7
//     }
//     if (posY > 773){
//         SpeedY = 0
//         posY = 773
//     }

//     //player 2 bounderies
//     if (p2X > 573){
//         Speed2X = 0
//         p2X = 573
//     }
//     if (p2X < 7){
//         Speed2X = 0
//         p2X = 7
//     }
//     if (p2Y < 7){
//         Speed2Y = 0
//         p2Y = 7
//     }
    
//     if (p2Y > 773){
//         Speed2Y = 0
//         p2Y = 773
//     }
// }
// setInterval(SpeedPlayer, 10)



//   

// // key events
// window.addEventListener('keydown',(event)=>{
// // console.log(event) 

//     switch(event.keyCode){
//         case 32:
//             shootX = 0
//             SpeedBullet = -13

            
//         break;    
//         case 37:
//             SpeedX = -5
//             SpeedY = 0
//         break;    
//         case 38 :
//             SpeedX = 0;
//             SpeedY = -5
//         break;
//         case 38 :
//             SpeedX = 0;
//             SpeedY = -5
//         break;
//         case 40 :
//             SpeedX = 0;
//             SpeedY = 5
//         break;
//         case 39 :
//             SpeedX = 5;
//             SpeedY = 0
//         break;

//         case 65:
//                 Speed2X = -5
//                 Speed2Y = 0
//         break;    
//         case 87 :
//                 Speed2X = 0;
//                 Speed2Y = -5
//         break;
//         case 83 :
//             Speed2X = 0;
//             Speed2Y = 5
//         break;
//         case 68 :
//              Speed2X = 5;
//             Speed2Y = 0
//         break;


//         // case 32 :
//         //  shootY = -13
//         // break;

//     }
// })

// window.addEventListener('keyup',(event)=>{
//     switch(event.keyCode){
//         case 37:
//             SpeedX = 0
//             SpeedY = 0
//         break;    
//         case 38 :
//             SpeedX = 0;
//             SpeedY = 0
//         break;
//         case 40 :
//             SpeedX = 0;
//             SpeedY = 0
//         break;
//         case 39 :
//             SpeedX = 0;
//             SpeedY = 0
//         break;
//         case 32:
//             const shoot = new Projectile(posX+7,shootY)
//             shoot.draw()
//         break; 
//         case 65:
//                 Speed2X = 0
//                 Speed2Y = 0
//         break;    
//         case 87 :
//                 Speed2X = 0;
//                 Speed2Y = 0
//         break;
//         case 83 :
//             Speed2X = 0;
//             Speed2Y = 0
//         break;
//         case 68 :
//              Speed2X = 0;
//             Speed2Y = 0
//         break;


//     }
// })





























