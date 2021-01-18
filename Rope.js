class Rope{
    constructor(body1,body2,x,y){
        var options = {
            bodyA : body1,
            bodyB : body2,
            
        }
        this.x=x
        this.y=y
       this.chain = Constraint.create(options);
        World.add(world,this.chain)
    
    }
    display(){
        if(this.chain.bodyA){
        var posA = this.chain.bodyA.position;
        var posB = this.chain.bodyB.position;
        strokeWeight(3)
    line(posA.x,posA.y,posB.x+this.x,posB.y+this.y);
    }
}
    fly(){
        this.chain.bodyA=null
    }
}