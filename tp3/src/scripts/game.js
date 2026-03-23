import Basket from "./Basket";
import Egg from "./Egg";

export default class Game {

   #canvas;
   #context;
   #player;
   #eggs;
   #eggcompteur;
   #score;

   constructor(canvas) {
      this.#canvas = canvas;
      this.#context=this.#canvas.getContext("2d");

       this.#player=new Basket(this.#canvas.width /2,this.#canvas.height /2);
       this.requestId=null;
       this.#eggs=[];
       this.#score=0;
        this.eggTime= setInterval(() => {
            if(Math.random() <0.75){
               this.addegg();
            }
   }, 1000);
    
       
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
   animate(){
      this.#context.clearRect(0,0,this.#canvas.width,this.#canvas.height);
      this.#player.move(this.#canvas);
      this.moveAndFilterEggs();
      this.#player.draw(this.#context)
      this.drawEggs();
      this.requestId=requestAnimationFrame(()=>this.animate());
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
  
}



