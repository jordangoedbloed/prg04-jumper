import '../css/style.css'
import { Actor, Color, CollisionType, DisplayMode, Engine, Physics, Scene, Tile, Vector, vec, } from "excalibur"
import { Label, FontUnit, Font } from "excalibur";
import { Resources, ResourceLoader } from './resources.js'
import {  Player } from './player'
import { Tiles } from './tiles'
import { Cloud } from './cloud'
import { Background } from './background'
import { Block } from './blocks'
import { BlockUpgrade } from './blockupgrade';



export class Scene1 extends Scene {

  game
  engine
  mButton
  score = 0;


  constructor() {
    super({

    })

  }



  onInitialize(engine) {
    this.game = engine



    const backgroundLoop = new Background()
    this.add(backgroundLoop)

    for (let i = 0; i < 12; i++) {
      const cloud = new Cloud()
      this.add(cloud)
    }
    const player = new Player()
    this.add(player)

    const tiles = new Tiles()
    this.add(tiles)

    const block = new Block()
    this.add(block)

    const blockUpgrade = new BlockUpgrade()
    this.add(blockUpgrade)





  }


  onActivate(ctx) {

    this.score = 0
    this.mylabel = new Label({
      text: `Score: ${this.score}`,
      pos: new Vector(100, 100),
      font: new Font({
        family: 'impact',
        size: 40,
        unit: FontUnit.Px,
        color: Color.White
      })
    })
    this.add(this.mylabel)


  }



  updateScore() {
    this.score++
    this.mylabel.text = `Score: ${this.score}`
  }

}




