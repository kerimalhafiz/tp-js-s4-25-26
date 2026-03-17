import RocketIMg from './assets/images/rocket.png'

import Mobile from './Mobile'
export default class Rocket extends Mobile{
    constructor(x,y,deltaX=6,deltaY=0){
        super(x,y,deltaX,deltaY,RocketIMg);
    }
}