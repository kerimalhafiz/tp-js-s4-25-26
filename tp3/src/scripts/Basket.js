import Mobile from "./Mobile";
import basketImg from  './assets/images/basket.png'

export default class Basket extends Mobile{
     constructor(x,y){
        super(x,y,basketImg);
        this.moving="";

     }
     moveLeft(){
      this.moving="left";
      this.deltaX=-10;
     }
     moveRight(){
      this.moving="Right";
      this.deltaX=+10;
     }
     moveUp(){
      this.moving="Up";
      this.deltaY -=10;
     }
     moveDown(){
      this.moving="Down";
      this.deltaY+=10;
     }
     stopMoving(){
      this.moving="";
      this.deltaX=0;
      this.deltaY=0;
     }
     move(canvas){
        this.x=Math.max(0,Math.min(canvas.width -this.width,this.x+this.deltaX));
        this.y=Math.max(0,Math.min(canvas.height -this.height,this.y+this.deltaY));

      
      
     }
      handleMovekeys(keyManager){
        this.stopMoving();
        if(keyManager.left){
            this.moveLeft();
        }
        if(keyManager.right){
            this.moveRight()
        }
        if(keyManager.up){
            this.moveUp();
        }
        if(keyManager.down){
            this.moveDown();
        }
    }

}