class Block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution:0.4
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.visibility=255
      this.image=loadImage("can.png")
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
};