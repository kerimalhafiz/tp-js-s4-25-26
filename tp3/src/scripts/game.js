import Basket from "./Basket";
import Egg from "./Egg";
import Rocket from "./Rocket";

export default class Game {

   #canvas;
   #context;
   #player;
   #eggs;
   #score;
   #rockets;
   #lives;

   constructor(canvas) {

      this.#canvas = canvas;
      this.#context=this.#canvas.getContext("2d");
       this.#player=new Basket(this.#canvas.width /2,this.#canvas.height /2);
       this.requestId=null;
       this.#eggs=[];
       this.#rockets=[];
       this.#lives=3;
       this.#score=0;
       this.scoreElement=document.getElementById("score");
       this.eggTime=null;
       this.started=false;
       this.life1=document.getElementById("life-1");
        this.life2=document.getElementById("life-2");
        this.life3=document.getElementById("life-3");
        this.gameover=false;
        this.button=document.getElementById("stopAndStartGame");


    
   }

   /** donne accès au canvas correspondant à la zone de jeu */
   get canvas() {
      return this.#canvas;
   }
   get context(){
      return this.#context;
   }
   get Player(){
      return this.#player;
   }
   get egg(){
    return this.#eggs;
   }
   get score(){
    return this.#score;
   }
   get lives(){
    return this.#lives;
   }

   addegg(){
    const x=Math.floor(Math.random()*(this.#canvas.width - 50));
    const eggimg=new Egg(x,0);
    this.#eggs.push(eggimg);
   }
   drawEggs(){
    this.#eggs.forEach(egg=>egg.draw(this.#context));
   }
   moveAndFilterEggs(){
     this.#eggs.forEach(egg =>egg.move());
     this.#eggs=this.#eggs.filter(egg =>egg.y <this.#canvas.height);
   }
    EggCollision(){
        this.#eggs=this.#eggs.filter(egg=>{
            const caught=this.#player.iscollision(egg);
            if(caught){
                this.#score+=100;
                this.updateScore();
                return false;
            }
            return true;
        });
    }
    updateScore(){
        this.scoreElement.textContent=this.#score;
    }
    addRocket(){
        const y=Math.floor(Math.random()*(this.#canvas.height -80));
        const rocket=new Rocket(0,y);
        this.#rockets.push(rocket);
    }
    drawRocket(){
        this.#rockets.forEach(rocket=> rocket.draw(this.#context));
    }
    
   animate(){
      this.#context.clearRect(0,0,this.#canvas.width,this.#canvas.height);
      this.#player.move(this.#canvas);
      this.moveAndFilterEggs();
      this.moveAndFilterRockets();
      this.EggCollision();  
      this.hadleRocketEggocollision();
      this.hadleRocketPlayercollision();
      if(this.#lives>0){
      this.#player.draw(this.#context);
      }
      this.drawEggs();
      this.drawRocket();
      this.drawGameover();
      if(this.started){
      this.requestId=requestAnimationFrame(()=>this.animate());
      }
   }
    
   start(){
    if(this.started){
        return;
    }
     if( this.gameover){
        this.reset();
    }
    this.started=true;
    this.eggTime=setInterval(()=>{
        if(Math.random()<0.75){
            this.addegg();
        }
    },1000);
    this.rocketTime=setInterval(()=>{
        if(Math.random()<0.5){
            this.addRocket();
        }
    },1000);
    this.animate();
   }
   moveAndFilterRockets(){
    this.#rockets.forEach(rocket=>rocket.move());
    this.#rockets=this.#rockets.filter(
        rocket=>rocket.x  < this.#canvas.width
    );
   }
   hadleRocketEggocollision(){
    this.#rockets.forEach(rocket=>{
        this.#eggs=this.#eggs.filter(egg=>!rocket.iscollision(egg));
    });
   }
   updateLives(){
      this.life1.style.visibility=this.#lives>=1 ?"visible ":"hidden";
      this.life2.style.visibility=this.#lives>=2 ?"visible ":"hidden";
      this.life3.style.visibility =this.#lives >= 3 ? "visible" : "hidden";

   }
   hadleRocketPlayercollision(){
    this.#rockets=this.#rockets.filter(roket=>{
        const hitPlayer=roket.iscollision(this.#player);
        if(hitPlayer){
            this.#score -=500;
            this.#lives -=1;
            this.updateScore();
            this.updateLives();
            if(this.#lives<=0){
                this.gameover=true;
                this.stop();
            }
            return false;
        }
        return true;
    });
   }
    keyUpActionHandler(event){
    switch(event.key){
        case "ArrowLeft":
        case "Left":
        case "ArrowRight":
        case "Right":
        case "ArrowUp":
        case "Up":
        case "ArrowDown":
        case "Down":
             this.#player.stopMoving();
            break;
        default: return;
    }
    event.preventDefault();
  }
    keyDownActionHandler(event){
    switch(event.key){
        case"ArrowLeft":
        case "left":
            this.#player.moveLeft();
            break;
        case "ArrowRight":
        case "Right":
            this.#player.moveRight();
                break;
        case "ArrowUp":
        case "Up":
            this.#player.moveUp();
           break;
        case "ArrowDown":
        case "Down":    clearInterval(this.eggTime);

            this.#player.moveDown();
            break;
        default:
            return;
    }
    event.preventDefault();
  }
  stop(){
    if(!this.started){
        return;
    }
    this.started=false;
    cancelAnimationFrame(this.requestId);
    clearInterval(this.rocketTime);
    this.requestId=null;
    this.eggTime=null;
    this.rocketTime=null;
    if(this.button){
        this.button.textContent="Start";
    }
  }
  startAndStop(){
    if(this.started){
        this.stop();
    }
    else{
        this.start();
    }
  }

  drawGameover(){
    if(this.gameover){
        this.#context.font="48px Arial";
        this.#context.fillStyle="red";
        this.#context.fillText("Game Over", this.#canvas.width / 2 - 130, this.#canvas.height / 2);
         return;
    }
  }
  reset(){
       this.#eggs=[];
       this.#rockets=[];
       this.#lives=3;
       this.#score=0;
       this.gameover=false;
       this.#player.x=this.#canvas.width/2;
    this.#player.y=this.#canvas.height/2;
    if(this.#player.stopMoving){
        this.#player.stopMoving();
    }
    if (this.#player.stop) {
         this.#player.stop();
      }

      this.updateScore();
      this.updateLives();
  }
}



