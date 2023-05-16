import { Actor, Vector } from "excalibur"
import { Resources } from "./resources"

export class Player extends Actor {


      constructor(){
        super()
      }

      onInitialize(engine){
        this.graphics.use(Resources.Jordan.toSprite())
        this.pos = new Vector(300, 400)
      }
      

}