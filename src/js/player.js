import { Actor, Vector, Physics, CollisionType, Input } from "excalibur"
import { Resources } from "./resources"
import { Tiles } from "./tiles"
import { Block } from "./blocks"
// import { Restart } from "./restartScene"

export class Player extends Actor {

  grounded
  engine

  constructor() {
    super({
      width: Resources.Jordan.width,
      height: Resources.Jordan.height
    })

  }

  onInitialize(engine) {

    this.engine = engine
    this.on("exitviewport", ()=>this.resetPosition())

    this.graphics.use(Resources.Jordan.toSprite())
    this.pos = new Vector(280, 300)
    this.body.collisionType = CollisionType.Active
    this.body.useGravity = true

    this.on('collisionstart',(event) =>{this.isGrounded(event)})

    this.on('collisionstart', (event) =>{
      if (event.other instanceof Block  ) {
        this.kill()
        // this.add("restartscene", new Restart(this.engine))
        this.engine.currentScene.remove("scene1")
        this.engine.goToScene("scene2",{score: this.engine.currentScene.score}
    )}
      
    })

  }

  resetPosition(){
        this.engine.updateScore()
    }

  isGrounded(event){
    if(event.other instanceof Tiles){
      this.grounded = true;
    }
  }


  
  onPostUpdate(engine) {
    let ymove = 0;


    if(this.grounded){
        if (engine.input.keyboard.wasPressed(Input.Keys.Space)){
        ymove = -500;
        this.grounded = false;
    }
  }

    this.vel = new Vector(0, this.vel.y + ymove)

 
  }
  

}

