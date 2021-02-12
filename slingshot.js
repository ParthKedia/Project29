class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    reAttach(){
        this.sling.bodyA = bird.body;
    }

    first(){
        image(this.sling1,190,60,40,160);
    }

    display(){
        //image(this.sling1,190,22);
      //  image(this.sling2,161,22);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(10);
            stroke("#311708");
            line(pointA.x-20, pointA.y, pointB.x-15, pointB.y+17);
           // line(pointA.x-20, pointA.y, pointB.x+20, pointB.y-3);
            pop();
        }
        //image(this.sling1,190,22);
       
    }
    over(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(10);
            stroke("#311708"); 
            line(pointA.x-20, pointA.y, pointB.x+20, pointB.y+15);
        pop();
        }
        //image(this.sling2,161,22);
    }
    over2(){
        image(this.sling2,161,60,40,90);
    }
}