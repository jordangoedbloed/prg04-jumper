import '../css/style.css'
import { Actor, Color, CollisionType, DisplayMode, Engine, Physics, Scene, Tile, Vector, vec, } from "excalibur"
import { Label, FontUnit, Font } from "excalibur";
import { Resources, ResourceLoader } from './resources.js'
import { Player } from './player'
import { Tiles } from './tiles'
import { Cloud } from './cloud'
import { Background } from './background'
import { Block } from './blocks'



export class Scene2 extends Scene {

  game
  engine
  mButton

  onInitialize(engine) {
    this.game = engine

    this.mButton = new Actor({
      z: 100,
      x: 400,
      y: 300,
      width: Resources.RestartButton.width,
      height: Resources.RestartButton.height,
      collisionType: CollisionType.PreventCollision
    })
    this.mButton.graphics.use(Resources.RestartButton.toSprite())
    this.mButton.actions.scaleTo(vec(3.5, 3.5), vec(7, 7))
    this.mButton.on('pointerup', () => {
      this.game.goToScene("scene1")
      window.location.reload();
    })
    this.add(this.mButton)


    const backgroundLoop = new Background()
    this.add(backgroundLoop)


  }


  onActivate(ctx) {
    // adds data from label to restart scene
    if(ctx.data) {
        this.mylabel = new Label({
            text: `Score: ${ctx.data.score}`,
            pos: new Vector(100, 100),
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px,
                color:Color.White
            }),
        })

        this.add(this.mylabel)
    }


}

}




