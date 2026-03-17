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
}