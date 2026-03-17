import Mobile from "./Mobile";
import basketImg from  './assets/images/basket.png'

export default class Basket extends Mobile{
     constructor(x,y){
        super(x,y,basketImg);
        this.moving="";

     }
     moveLeft(){
      this.moving="left";
     }
     moveRight(){
      this.moving="Right";
     }
     moveUp(){
      this.moving="Up";
     }
     moveDown(){
      this.moving="Down";
     }
     moveStop(){
      this.moving="";
     }
     move(canvas){
      let step=8;
      if(this.moving==="left"&& this.x>0){
         this.x -=step;
      }
       if(this.moving==="Right"&& this.x+this.width<canvas.width){
         this.x +=step;

      }
       if(this.moving==="Up"&& this.y>0){
         this.y -=step;
      }
      
      if(this.moving==="Down"&& this.y+this.height<canvas.height){
         this.y +=step;
      }
      
      
     }
}