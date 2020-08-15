class Tree{
    constructor(x, y, width, height) {
        var options = 
        {
            'isStatic':true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Sprites/tree.png")
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        stroke("white")
        fill("white")
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        imageMode(CENTER)
        image(this.image,0,0,300,this.height)
        pop();
      }
}