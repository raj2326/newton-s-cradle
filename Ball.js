class Ball{
    constructor(x, y,r) {
        var options = {
          isStatic:false,
            'restitution':1,
            'friction':0,
            'density':0.8,
        }
        this.x=x
        this.y=y
        this.r=r 
        this.body = Bodies.circle(this.x,this.y,this.r,options);
       
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
      fill('green')
      //stroke('black')
     // strokeWeight(4)
        ellipseMode(RADIUS);
        ellipse( this.body.position.x, this.body.position.y,20,20);
        pop();
      }
}