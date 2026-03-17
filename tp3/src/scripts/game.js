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

   get Context(){
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
}



