


export default class Obstacle{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width
        this.height=height
    }
    draw(context){
        context.fillStyle="black";
        context.fillRect(this.x,this.y,this.width,this.height);
    }
    moveLeft(){
        this.deltaX=-10;
    }
    moveRight(){
        this.deltaX =+10;
    }
    stopMoving(){
        this.deltaX=0;
    }
    move(box){
        this.x=Math.max(0,Math.min(box.width -this.width,this.x+this.deltaX));
    }
    handleMovekeys(keyManager){
        this.stopMoving();
        if(keyManager.left){
            this.moveLeft();
        }
        if(keyManager.right){
            this.moveRight()
        }
    }
}