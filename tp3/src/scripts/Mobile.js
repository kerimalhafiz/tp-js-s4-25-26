
import MobilImg from './assets/images'

export default class Mobile{

    constructor(x,y,deltaX=0,deltaY=0){
        this.x=x;
        this.y=y;
        this.deltaX=deltaX;
        this.deltaY=deltaY;
        this.image=this.createImage(MobilImg);
    }
    draw(context){
        context.drawImage(this.image,this.x,this.y,this.width,this.height)
    }
    createImage(imgsource){
        const newImg=new Image();
        newImg.src=imgsource;
        return newImg;
    }
    get width(){
        return this.image.width;
    }
    get height(){
     return this.image.height;
    }
    move(canvas){
        if(this.x+this.deltaX <0 || this.x+this.deltaX+this.width  >canvas.width){
         
            this.deltaX=-this.deltaX;
        }
         if(this.y+this.deltaY <0 || this.y+this.deltaY+this.height  >canvas.height){
         
            this.deltaY=-this.deltaY;
        }
        this.x+=this.deltaX;
        this.y+=this.deltaY;

    }
}