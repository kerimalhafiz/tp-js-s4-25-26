
// importation de la classe Game.js
import Game from './game.js';


// mise en place de l'action des clics sur les boutons + les gestionnaires du clavier pour contrôler Greedy
const init = () => {
   const canvas = document.getElementById("playfield");
   const button=document.getElementById("stopAndStartGame");
   const game = new Game(canvas);
  
   window.addEventListener("keyup",game.keyUpActionHandler.bind(game));
   window.addEventListener("keydown",game.keyDownActionHandler.bind(game));
     button.addEventListener("click",()=>{
        game.startAndStop();
        button.textContent=game.started ? "Stop":"Start";
     });

}
init();
console.log('le bundle a été généré');
