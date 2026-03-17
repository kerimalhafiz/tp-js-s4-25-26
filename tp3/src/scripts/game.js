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
    keyDownActionHandler(event){
    switch(event.key){
        case "ArrowLeft":
        case "Left":
                this.keyManager.leftPressed();
            break;
        case "ArrowRight":
        case "Right":
            this.keyManager.rightPressed();
            break;
        case "ArrowUp":
        case "Up":
            this.keyManager.upPressed();
           break;
        case "ArrowDown":
        case "Down":
             this.keyManager.downPressed();
            break;
        default: return;
    }
    event.preventDefault();
  }
  keyUpActionHandler(event){
    switch(event.key){
        case"ArrowLeft":
        case "Left":
            this.keyManager.leftReleased();
            break;
        case "ArrowRight":
        case "Right":
                this.keyManager.rightReleased();
                break;
        case "ArrowUp":
        case "Up":
            this.keyManager.upReleased();
           break;
        case "ArrowDown":
        case "Down":
             this.keyManager.downReleased();
            break;
        default:
            return;
    }
    event.preventDefault();
  }

}



