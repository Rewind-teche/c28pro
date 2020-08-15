class Mango{
    constructor(x,y,radius)
    {
        var options =
       {
        'isStatic':true,
        'restitution':0.8,
        'friction':1.0
       }
 
        this.body = Bodies.circle(x, y, radius, options) 
        this.radius =radius
        this.image = loadImage("Sprites/mango.png")
        World.add(world,this.body);
    }

display()
{
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS)
      strokeWeight (2)
      stroke ("white")
      fill("white")
      ellipse(0,0,6,6)
      imageMode(CENTER)
      image(this.image,0,0,40,40)
      pop();
    }
}