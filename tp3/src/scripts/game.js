import Basket from "./Basket";

export default class Game {

   #canvas;
   #context;
   #player;
   // à compléter

   constructor(canvas) {
      this.#canvas = canvas;
      this.#context=this.#canvas.getContext("2d");

       this.#player=new Basket(this.#canvas.width /2,this.#canvas.height /2);
       this.requestId=null;
       
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
   animate(){
      this.#context.clearRect(0,0,this.#canvas.width,this.#canvas.height);
      this.#player.move(this.#canvas);
      this.#player.draw(this.#context)
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



