class Cannon{
    constructor(x,y,w,h){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;

        this.base = loadImage("./assets/cannonBase.png");
        this.cannon = loadImage("./assets/canon.png");
    }
    display(){
        //cannon shooting
        push ();
        imageMode(CENTER);
        image(this.cannon,this.x,this.y,this.w,this.h);
        pop ();

        //cannon basement(semi circle)
        image(this.base,70,20,200,200);
        //transparent
        noFill();
    }
}