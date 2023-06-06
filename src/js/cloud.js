import { Actor, Vector, Physics, CollisionType, Input } from "excalibur"
import { Resources } from "./resources"

export class Cloud extends Actor {

 

  constructor() {
    super({

    })

  }

  onInitialize(engine) {
  
      this.graphics.use(Resources.Cloud.toSprite())
      this.pos = new Vector(Math.random() * 800, Math.random() * 800)
      this.vel = new Vector(-60, 0)
    

      this.on("exitviewport", (event) => {
        this.pos = new Vector(800, Math.random() * 300 + 200)
      })



  }




}