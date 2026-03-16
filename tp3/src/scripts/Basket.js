import Mobile from "./Mobile";
import basketImg from  './assets/images/basket.png'

export default class Basket extends Mobile{
     constructor(x,y,deltaX,deltaY,moving){
        super(x,y,deltaX,deltaY);
        this.image=this.createImage(basketImg);
        this.moving=moving;

     }
}