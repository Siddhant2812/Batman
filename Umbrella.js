/*class Umbrella{
    constructor(x,y){
        var options={
          'restitution':0.5,
          'friction':1.0,
          'density':1.5,
        }
        this.x = x
        this.y = y
        this.diamter = 20;
        this.body = Bodies.circle(this.x,this.y,this.diameter,options);
    }
    display(){
        var pos = this.body.position;
        push();
        fill(255,0,0);
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(4);
        circle(0, 0, this.diameter);
        pop();
      }
}*/

class Paper2 {
    constructor(x, y,diameter) {
      var options = {
          'restitution':0.5,
          'friction':1.0,
          'density':1.5,
          'isStatic':true
      }
      this.diameter = diameter;
      this.x = x;
      this.y = y;
      this.body = Bodies.circle(x,y,diameter,options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      fill(0,0,0);
      translate(pos.x,pos.y);
      rectMode(CENTER);
      strokeWeight(4);
      circle(0, 0, this.diameter);
      pop();
    }
  };