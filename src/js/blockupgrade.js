import { Actor, CollisionType, Vector, } from "excalibur";
import { Resources } from "./resources"
import { Block } from "./blocks";


export class BlockUpgrade extends Block {

  offset 
  engine

  constructor() {
    super({
      width: Resources.BlockUpgrade.width,
      height: Resources.BlockUpgrade.height
    })

  }

  onInitialize(engine) {
    this.engine = engine
    const block = Resources.BlockUpgrade.toSprite()
    this.graphics.use(Resources.BlockUpgrade.toSprite())
    this.offset = block.width
    this.body.collisionType = CollisionType.Active
    this.body.useGravity = false

    this.pos = new Vector(500, 420)
    this.vel = new Vector(-180, 0)
    this.graphics.offset = new Vector(0, 0)
    // this.scale = new Vector(1, 1)
    // this.on('collisionstart',(event) =>{this.isGrounded(event)})

  }

    onPostUpdate(engine, delta) {
      this.engine = engine
      if (this.pos.x < 200) {
          this.scene.updateScore();
          this.pos = new Vector(500, 420)
          this.vel = new Vector(-180-(this.engine.currentScene.score*5), 0)
          console.log("update score");
      }

  }
}