import Ball from './ball';

/* TYPE Animation */
export default class Animation {

  constructor(canvas){
    this.canvas=canvas
    this.context=canvas.getContext('2d');
    this.Ball=new Ball(50,50);
    this.requestId=null
  }
  animate(){
    this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
    this.Ball.move(this.canvas);
    this.Ball.draw(this.context);
    this.requestId=requestAnimationFrame(()=>this.animate());
  }

  /* start the animation or stop it if previously running */
  startAndStop() {
    // à définir
    if(this.requestId===null){
      this.animate();
    }else{
      cancelAnimationFrame(this.requestId);
      this.requestId=null;
    }
  }
}
