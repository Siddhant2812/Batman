/*class Drop{
    constructor(){
        var options={
            'density':0,
            'friction':0.1,
            'restitution':0
        }

        this.x = random(0,400);
        this.y = 200;
        this.radius = 5;

        this.body = Bodies.circle(this.x,this.y,this.radius,options);
        World.add(world,this.body);
    }

    display(){
        push();
        fill(255,255,255);
        circle(this.x,this.y,this.radius);
        pop();
    }
}*/

class Paper {
    constructor() {
      var options = {
          'restitution':0.5,
          'friction':1.0,
          'density':1.5,
          'isStatic': false
      }
      this.diameter = 10;
      this.x = random(0,400);
      this.y = -40;
      this.body = Bodies.circle(this.x,this.y,this.diameter,options);
      
      World.add(world, this.body);
    }

    reset(){
        if(this.body.position.y>400){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:-10});
        }
    }

    display(){
      var pos =this.body.position;
  
      push();
      fill(0,0,255);
      translate(pos.x,pos.y);
      rectMode(CENTER);
      strokeWeight(4);
      circle(0, 0, this.diameter);
      pop();
    }
  };