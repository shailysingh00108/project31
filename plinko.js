class plinko{
    constructor(x,y)
    {
        var options = {
            isStatic:true,
            restitution:1
        }
        this.body = Bodies.circle(x,y,this.radius,options);
        this.radius = 10;
        World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("white");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}