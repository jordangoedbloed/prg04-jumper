import { Actor, CollisionType, GraphicsGroup, Vector } from "excalibur"
import { Resources } from "./resources"

export class Tiles extends Actor {

  offset

  constructor(){
    super({
      width: 384,
      height: 10,
      pos: new Vector(0, 500),
      anchor: new Vector(0,0),
    })


  }


  onInitialize(engine) {
    const tile = Resources.Tiles.toSprite()
    this.offset = tile.width

    const leftTile = Resources.LeftTile.toSprite()
    const rightTile = Resources.RightTile.toSprite()
    this.offset = leftTile.width

 
    this.body.collisionType = CollisionType.Fixed


    // make var for members array 
    let x = []
    x.push(
      {
        graphic: leftTile,
        pos: new Vector(0, 0)
      })
    // loop for the members
    for (let i = 1; i <= 10; i++) {
      // add object to members array, x pos based on i
      x.push(
        {
          graphic: tile,
          pos: new Vector(0 + tile.width * i, 0),
        })

    }
    x.push(
      {
        graphic: rightTile,
        pos: new Vector(0 + tile.width * 11, 0)
      })
    const group = new GraphicsGroup({

      members: x


    })

    this.graphics.anchor = new Vector(0, 0)
    this.graphics.add(group)
    // this.graphics.offset = new Vector(0, -30)
    this.pos = new Vector(180, 430)
    // this.vel = new Vector(-110, 0)

  }

  // onPostUpdate(engine, delta) {
  //     if (this.pos.x < -this.offset) {
  //         this.pos = new Vector(0, 0)
  //     }
  // }


}