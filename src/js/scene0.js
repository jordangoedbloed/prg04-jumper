import '../css/style.css'
import { Actor, Color, CollisionType, DisplayMode, Engine, Physics, Scene, Tile, Vector, vec, } from "excalibur"
import { Label, FontUnit, Font } from "excalibur";
import { Resources, ResourceLoader } from './resources.js'
import { Player } from './player'
import { Tiles } from './tiles'
import { Cloud } from './cloud'
import { Background } from './background'
import { Block } from './blocks'



export class Scene0 extends Scene {

  game
  engine
  mButton

  onInitialize(engine) {
    this.game = engine

    this.mButton = new Actor({
      z: 100,
      x: 400,
      y: 300,
      width: Resources.MenuButton.width,
      height: Resources.MenuButton.height,
      collisionType: CollisionType.PreventCollision
    })
    this.mButton.graphics.use(Resources.MenuButton.toSprite())
    this.mButton.actions.scaleTo(vec(3.5, 3.5), vec(7, 7))
    this.mButton.on('pointerup', () => {
      this.game.goToScene("scene1")
    })
    this.add(this.mButton)


    const backgroundLoop = new Background()
    this.add(backgroundLoop)


  }



}




