
import Mobile from './Mobile';
import blue_egg from './assets/images/blue-egg.png'
import green_egg from './assets/images/green-egg.png'
import yellow_egg from './assets/images/yellow-egg.png'


export default class Egg extends Mobile{
    constructor(x,y,deltaX=0,deltaY=4){
        super(x,y,Egg.aleaIMG(),deltaX,deltaY);
    }

 static aleaIMG(){
    const EggIMG=[blue_egg,green_egg,yellow_egg];
    const indexe=Math.floor(Math.random()*EggIMG.length);
    return EggIMG[indexe];
  }

}