class Stone{
    constructor(x,y,radius)
    {
        var options =
       {
         isStatic:false,
         restitution:0,
         friction:1.0,
         density:1.2
         
       }
 
        this.body = Bodies.circle(x, y, radius, options) 
        this.radius =radius
        this.image = loadImage("Sprites/stone.png")
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
      stroke ("black")
      fill("white");
      ellipse(0,0,10,10)
      imageMode(CENTER)
      image(this.image,0,0,50,50)
      pop();
    }
}