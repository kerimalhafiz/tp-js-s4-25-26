

export default class Mobile{

    constructor(x,y,MobilImg,deltaX=0,deltaY=0){
        this.x=x;
        this.y=y;
        this.deltaX=deltaX;
        this.deltaY=deltaY;
        this.image=this.#createImage(MobilImg);
    }
    draw(context){
        context.drawImage(this.image,this.x,this.y);
    }
    #createImage(imgsource){
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

        this.x+=this.deltaX;
        this.y+=this.deltaY;

    }
   iscollision(other){
    return !(this.x+this.width<other.x || this.x>other.x+other.width||this.y+this.height<other.y||this.y>other.y+other.height);

   }
}