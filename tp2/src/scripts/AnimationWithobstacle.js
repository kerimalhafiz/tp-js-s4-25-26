
import Animation from "./animation";
import KeyManager from "./keyManager";



export default class AnimationWithobstacle extends Animation{

    constructor(canvas,obstacle){
        super(canvas);
        this.obstacle=obstacle;
        this.keyManager=new KeyManager();


    }
     animate(){
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.obstacle.handleMoveKeys(this.keyManager);
    this.obstacle.move(this.canvas);
    this.balls.forEach(ball => ball.move(this.canvas));
    this.balls = this.balls.filter(ball => !ball.collisionWith(this.obstacle));
    this.obstacle.draw(this.context);
    this.balls.forEach(ball => ball.draw(this.context));
    this.requestId = requestAnimationFrame(() => this.animate());
  }
  keyDownActionHandler(event){
    switch(event.key){
        case "ArrowLeft":
        case "Left":
                this.KeyManager.leftPressed();
            break;
        case "ArrowRight":
        case "Left":
            this.KeyManager.rightPressed();
            break;
        default: return;
    }
    event.preventDefault();
  }

}