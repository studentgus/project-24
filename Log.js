
  class Log {
    constructor(x, y, width, height,angle) {
      var options = {
          ' isStatic': false,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
    Matter.Body.setAngle(this.body, angle);          
     World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
     
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("Red");
      fill(255);
      rect(pos.x, pos.y, 20, this.height);
    }
  };
  