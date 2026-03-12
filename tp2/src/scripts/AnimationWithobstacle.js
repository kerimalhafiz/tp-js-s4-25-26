
import Animation from "./animation";



export default class AnimationWithobstacle extends Animation{

    constructor(obstacle,canvas){
        super(canvas);
        this.obstacle=obstacle;


    }
     animate(){
    this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
    this.ball.forEach(balls=>{
        balls.move(this.canvas);
    })
    this.ball=this.ball.filter(balls=>!balls.collisionWith(this.obstacle));
    this.ball.forEach(balls => balls.draw(this.context));
    this.obstacle.draw(this.context);
   
    this.requestId=requestAnimationFrame(()=>this.animate());
  }

}