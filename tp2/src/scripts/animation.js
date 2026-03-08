import Ball from './ball';

/* TYPE Animation */
export default class Animation {

  constructor(canvas){
    this.canvas=canvas
    this.context=canvas.getContext('2d');
    this.ball=[]
    this.requestId=null
  }
  animate(){
    this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
    this.ball.forEach(balls=>{
        balls.move(this.canvas);
        balls.draw(this.context);
    })
   
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
  alea(n){
    return Math.floor(Math.random()*n);
  }
  addBall(){
    const x=this.alea(this.canvas.width-Ball.BALL_WIDTH);
    const y=this.alea(this.canvas.height -Ball.BALL_WIDTH);

    let deltaX=this.alea(11)-5;
    let deltaY=this.alea(11)-5;
    while(deltaX===0 && deltaY===0){
      deltaX=this.alea(11)-5;
      deltaY=this.alea(11)-5;
    }
    this.ball.push(new Ball(x,y,deltaX,deltaY));
  }
}
