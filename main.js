
let canvas = document.querySelector('#home');

let context = canvas.getContext('2d');

//***CANVAS WIDTH="600" HEIGHT="800"***//

const CANVAS_WIDTH = 600
const CANVAS_HEIGHT = 800
const playerWidth = 100
const playerHeight =10

// 2/16/2022
class Text{
    constructor(str, x, y){
      this.str = str;
      this.x = x ;
      this.y = y ;  

    }
    draw(){

    }
}





class Ball{  // You're a ball now
    constructor(x, y, radius){
        this.x = x;
        this.y = y;
        this.radius = radius
        this.color = 'white'
        // this.speed = 10
        this.xVelocity = 2
        this.yVelocity = 2

    // player One
      this.width = 100;
      this.height = 10;
      this.playerSpeed = 5
      this.paddlex = CANVAS_WIDTH/2 - 100/2 
      this.paddley =  783    
      this.score = 0
      addEventListener('keydown', this.keypressed)
      addEventListener('keyup', this.keyrelease)

    //player Two
        this.p2Width = 100;
        this.p2Height = 10;
        //   this.bullet = bullet;
        this.playerSpeed = 5
        this.p2x = CANVAS_WIDTH/2 - 100/2 
        this.p2y =  783    
        this.p2score = 0



    }

    draw(){
        context.beginPath()
        context.arc(this.x,this.y, this.radius, 0 ,360, false)
        context.fillStyle = this.color
        context.fill()
        context.closePath()
        this.border()
        this.Speed()
        context.fillStyle = 'white'
        context.fillRect(this.paddlex, this.paddley, this.width, this.height);
        // console.log(this.player.width)
      
       
    }

    bounce(){ 
        this.x += this.xVelocity;
        this.y += this.yVelocity

        if (this.x + this.radius > CANVAS_WIDTH || this.x - this.radius < 0 ){
            this.xVelocity = -this.xVelocity 
        }
        if (/*this.y + this.radius > CANVAS_HEIGHT ||*/ this.y - this.radius < 0 ){
            this.yVelocity = -this.yVelocity 
        }
        //stop ball if hit right side
        if (this.y > CANVAS_HEIGHT){
                this.xVelocity = 0;
                this.yVelocity = 0;
       
        }
        
        let ballBottom = this.y + this.radius 
        let paddle = this.paddley
        let lPaddle = this.paddlex
        let rPaddle = this.paddlex + this.width

    if(ballBottom >= paddle && this.x >= lPaddle && this.x  <= rPaddle){//   
        this.yVelocity = - this.yVelocity;
        this.y = this.paddley - this.radius
        
       }
        // if (this.y > this.player.y && (this.x > this.player.x && this.x < (this.player.y + this.player.width) ) ){
        //     console.log(this.player.y)
        // this.yVelocity = - this.yVelocity;
        
        // }
         
        // //stop ball if hit left side
        //  if (this.yPos >cHeight){
        //         this.speedX =0;
        //         this.speedY =0;
                
        //         }
        //         //bounce off player 2 paddle
        //    else if (this.yPos >player1.yPosPaddle && (this.yPos > player1.yPosPaddle && this.yPos< (player1.yPosPaddle+player1.paddleWidth) ) ){
        // this.speedY = - this.speedY;
               
               
        //    }
    
    
    }

    Speed(){
        if(this.left){
            this.paddlex  -= this.playerSpeed
        }
        if(this.right){
            this.paddlex  += this.playerSpeed
        }
        if(this.up){
            this.paddley  -= this.playerSpeed
        }
        if(this.down){
            this.paddley  += this.playerSpeed
        }
    }   

        border(){
            if (this.paddlex > 495){
                this.paddlex = 495
            }
            if (this.paddlex  < 7){
                this.paddlex = 7
            }
            if (this.paddley < 7){
                this.paddley = 7
            }
            if (this.paddley > 800){
                this.paddley = 800
            }
            if (this.paddley < 416)
                this.paddley = 416
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
            //    console.log('left')
               this.left = true
            break;   
            case 39:
                this.right = true 
            break; 
            // case 40:
            //     this.down = true
            // break; 
            // case 38:
            //     this.up = true
            // break;
            // case 13:
            //     this.pewpew = true
            // break;        
        }
    }   
    keyrelease = (event) =>{
        switch(event.keyCode){   
            case 37:
            //    console.log('left')
               this.left = false
            break;   
            case 39:
                this.right = false
            break; 
            // case 40:
            //     this.down = false
            // break; 
            // case 38:
            //     this.up = false
            // break;  
            // case 13:
            //     this.pewpew = false
            // break;           
        }
    }   
    

   

    resetBall(){
        // then increment score
        this.y = CANVAS_HEIGHT/2 - 7/2
    }



    


  
}

// 2/14/2022 
// class Paku {
//     constructor() { 
//       this.width = 100;
//       this.height = 10;
//     //   this.bullet = bullet;
//       this.playerSpeed = 5
//       this.x = CANVAS_WIDTH/2 - 100/2 
//       this.y =  783    
//       this.score = 0

//       addEventListener('keydown', this.keypressed)
//       addEventListener('keyup', this.keyrelease)

//     }
    
//     draw() { // Draws everything on the canvas
//         this.border()
//         this.Speed()
//         context.fillStyle = 'white'
//         context.fillRect(this.x, this.y, this.width, this.height);
       
//      }

  
//     Speed(){
//         if(this.left){
//             this.x  -= this.playerSpeed
//         }
//         if(this.right){
//             this.x  += this.playerSpeed
//         }
//         if(this.up){
//             this.y  -= this.playerSpeed
//         }
//         if(this.down){
//             this.y  += this.playerSpeed
//         }
//     }   

//         border(){
//             if (this.x > 495){
//                 this.x = 495
//             }
//             if (this.x  < 7){
//                 this.x = 7
//             }
//             if (this.y < 7){
//                 this.y = 7
//             }
//             if (this.y > 800){
//                 this.y = 800
//             }
//             if (this.y < 416)
//                 this.y = 416
//         }
// // // keycodes 
// //     // left: 37
// //     // right: 39
// //     // down: 40
// //     // up: 38
// //     // space: 32
//        // Enter: 13
//     keypressed = (event) =>{
//         // test
//         // console.log(event)

//         switch(event.keyCode){   
//             case 37:
//             //    console.log('left')
//                this.left = true
//             break;   
//             case 39:
//                 this.right = true 
//             break; 
//             // case 40:
//             //     this.down = true
//             // break; 
//             // case 38:
//             //     this.up = true
//             // break;
//             // case 13:
//             //     this.pewpew = true
//             // break;        
//         }
//     }   
//     keyrelease = (event) =>{
//         switch(event.keyCode){   
//             case 37:
//             //    console.log('left')
//                this.left = false
//             break;   
//             case 39:
//                 this.right = false
//             break; 
//             // case 40:
//             //     this.down = false
//             // break; 
//             // case 38:
//             //     this.up = false
//             // break;  
//             // case 13:
//             //     this.pewpew = false
//             // break;           
//         }
//     }   

// }
// class Paku2 {
//     constructor(x, y) { 
//       this.width = 100;
//       this.height = 10;
//     //   this.bulletSpeed = 13;
//       this.playerSpeed = 5
//       this.x = x 
//       this.y = y   
//       this.score = 0  

//       addEventListener('keydown', this.keypressed)
//       addEventListener('keyup', this.keyrelease)

//     }
    
    
//     draw() {  
//         // this.pew()
//         this.border()
//         this.Speed()
//         context.fillStyle = 'white'
//         context.fillRect(this.x, this.y, this.width, this.height);
        
//      }

   
//     Speed(){
//         if(this.left){
//             this.x  -= this.playerSpeed
//         }
//         if(this.right){
//             this.x  += this.playerSpeed
//         }
//         if(this.up){
//             this.y  -= this.playerSpeed
//         }
//         if(this.down){
//             this.y  += this.playerSpeed
//         }
//     }   
     
//     border(){
//         if (this.x > 495){
//             this.x = 495
//         }
//         if (this.x  < 7){
//             this.x = 7
//         }
//         if (this.y < 7){
//             this.y = 7
//         }
//         if (this.y > 773){
//             this.y = 773
//         }
//         if (this.y > 388){
//             this.y = 388
//         }

//     }
// //  // KEYCODES
//     // space: 32
//     // W: 87
//     // a: 65
//     // s: 83
//     // d: 68

//     keypressed = (event) =>{

//         switch(event.keyCode){   
//             case 65:
//             //    console.log('left')
//                this.left = true
//             break;   
//             case 68:
//                 this.right = true 
//             break; 
//             // case 83:
//             //     this.down = true
//             // break; 
//             // case 87:
//             //     this.up = true
//             // break;          
//         }
//     }   
//     keyrelease = (event) =>{
//         switch(event.keyCode){   
//             case 65:
//             //    console.log('left')
//                this.left = false
//             break;   
//             case 68:
//                 this.right = false
//             break; 
//             // case 83:
//             //     this.down = false
//             // break; 
//             // case 87:
//             //     this.up = false
//             // break;          
//         }
//     }   

// }



// 2/16/2022

// let player = new Paku ()
// let player2 = new Paku2 (CANVAS_WIDTH/2 - 100/2, 7)
let projectile = new Ball(CANVAS_WIDTH/2 - 7/2,CANVAS_HEIGHT/2 -7/2,7)

function clear(){ 
    
    context.fillStyle = 'black'; 
    context.fillRect(0,0,600,800) // clear's the game every Speedment of the charactr 
    projectile.draw()
    context.fillStyle = 'grey'; 
    context.fillRect(0,CANVAS_HEIGHT/2 - 4/2,600,4)
    //  player.draw()
     projectile.bounce()
    //  player2.draw()
     
}
setInterval(clear, 11) // GAME SPEED

/*************************************************************/
//      HERE LIES MY HOPES AND DREAMS
/************************************************************/
// ORIGINAL CODE/LOGIC 
//THE NEW CODE STILL USES THE SAME LOGIC  BUT IT HAS IMPROVED MOBILITY AND FUNCTIONALITY.

//TECHNICALLY I CAN STILL MAKE A TANK GAME IF I CAN FIGURE OUT THOSE BLOODY PROJECTILES.

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





























