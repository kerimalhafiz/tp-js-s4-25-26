
import Ball from './ball';           // peut être commenté après la Ex1 Q2 faite
import Animation from './animation';
import Obstacle from './Obstacle';

import './assets/style/style-balles.css';
import AnimationWithobstacle from './AnimationWithobstacle';


/* setup */
const init = () => {
  const canvas = document.getElementById("terrain");

  // commenter les 2 lignes suivantes après la Ex1 Q2
  //const ball = new Ball(50,50);
  //document.getElementById("stopStartBall").addEventListener("click", () => ball.draw(canvas.getContext('2d'))  );

  // décommenter les deux lignes suivantes à partir la question Ex1 Q4
  const obstacle=new Obstacle(200,150,120,40);
  const animationWith = new AnimationWithobstacle(canvas,obstacle);
  document.getElementById("stopStartBall").addEventListener("click", () => animationWith.startAndStop()  );
  document.getElementById("addBall").addEventListener("click",()=>animationWith.addBall());
  
}

window.addEventListener("DOMContentLoaded",init);


//
console.log('le bundle a été généré');
