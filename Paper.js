class Paper{
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.body = Bodies.circle(x,y,width,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }

    display(){
        var position = this.body.position;

        ellipseMode(CENTER);
        fill("red");
        ellipse(position.x,position.y,this.width,this.height);
    }
}