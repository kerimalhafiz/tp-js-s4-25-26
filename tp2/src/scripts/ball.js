
// la source de l'image à utiliser pour la balle
import ballImgSrc from './assets/images/ball.png';

/* TYPE Ball */
export default class Ball {

	static BALL_WIDTH = 48;

  constructor( x,y,deltaX=3,deltaY=-2) {

    // A COMPLETER...
    this.y=y
    this.x=x
    this.deltaX=deltaX
    this.deltaY=deltaY
    this.image = this.#createImage(ballImgSrc);
  }

  /* draw this ball, using the given drawing 2d context */
  /** c'est a dire on dessine l image au point (x,y)avec une taille 48*48  */
  draw(context) {
    context.drawImage(this.image,this.x,this.y,Ball.BALL_WIDTH,Ball.BALL_WIDTH);
  }


  /* crée l'objet Image à utiliser pour dessiner cette balle */
  #createImage(imageSource) {
	  const newImg = new Image();
  	newImg.src = imageSource;
  	return newImg;
  }
  get width() {
    return this.image.width;
  }
  get height() {
    return this.image.height;
  }
  /** deplacement avec repond avant de bouger on regarde si 
   * le prochain deplacement ferait sortir la balle
   * à gauche  ou à droite
   * en bas ou en haut 
   * l inversion deltax pour le rebond horizontal
   * l inversion de deltay pour un rebond vertical
  */
  move(canvas){
    if(this.x+this.deltaX <0 || this.x+this.deltaX+Ball.BALL_WIDTH>canvas.width){
      this.deltaX=-this.deltaX;
    }
    if(this.y+this.deltaY<0 || this.y+this.deltaY+Ball.BALL_WIDTH>canvas.height){
      this.deltaY=-this.deltaY;
    }
    this.x+=this.deltaX;
    this.y+=this.deltaY;
  }
  collisionWith(Obstacle){
    let [x,y]=[Obstacle.x,Obstacle.y];
    let [xB,yB]=[this.x,this.y]
  
  }

}
