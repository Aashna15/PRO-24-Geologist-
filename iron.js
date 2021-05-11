class Iron{
    constructor(x,y){
    var options = {
        restitution:0.8 , 
	    friction:3,
		density:30
    }

    this.x = x;
    this.y=y;
    this.width=20;
    this.height=40;
    this.body = Bodies.rectangle(this.x,this.y,this.width , this.height)
    World.add(world,this.body);
}

display(){
    var stonepos=this.body.position;
    push ()
    translate (stonepos.x,stonepos.y)
    rectMode(CENTER)
    fill ("red")
    rect(0,0,30,60)
}
}