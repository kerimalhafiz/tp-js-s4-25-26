import RocketIMg from './assets/images/rocket.png'
import Rocketvertical from './assets/images/rocket128-vertical.png'
import Mobile from './Mobile'
export default class Rocket extends Mobile{
    constructor(x,y){
        super(x,y,RocketIMg,6,0);
    }
}