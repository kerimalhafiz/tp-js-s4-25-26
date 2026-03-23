import Basket from "./Basket";
import Egg from "./Egg";

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
    const x=Math.floor(Math.random()*(this.#canvas.width -50));
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
        const fromLeft=Math.random()<0.5;
    }
   animate(){
      this.#context.clearRect(0,0,this.#canvas.width,this.#canvas.height);
      this.#player.move(this.#canvas);
      this.moveAndFilterEggs();
      this.EggCollision();  
      this.#player.draw(this.#context)
      this.drawEggs();
      this.requestId=requestAnimationFrame(()=>this.animate());
   }
   start(){
    if(this.started){
        return;
    }
    this.started=true;
    this.eggTime=setInterval(()=>{
        if(Math.random()<0.75){
            this.addegg();
        }
    },1000);
    this.animate();
   }
   moveAndFilterRockets(){
    this.#rockets.forEach(rocket=>rocket.move());
    this.#rockets=this.#rockets.filter(
        rocket=rocket.x +rocket.width>0 && rocket.x < this.#canvas.width
    );
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
        case "Down":
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
    clearInterval(this.eggTime);
    this.requestId=null;
    this.eggTime=null;
  }
  startAndStop(){
    if(this.started){
        this.stop();
    }
    else{
        this.start();
    }
  }
}



