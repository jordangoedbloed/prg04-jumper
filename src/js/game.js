import '../css/style.css'
import { Actor, Color, DisplayMode, Engine, Physics, Scene, Tile, Vector, vec, Label, FontUnit, Font } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Player } from './player'
import { Tiles } from './tiles'
import { Cloud } from './cloud'
import { Background } from './background'
import { Block } from './blocks'
import { Scene0 } from './scene0'
import { Scene1 } from './scene1'
import { Scene2 } from './restartScene'


export class Game extends Engine {

    score
    mylabel

    constructor() {
        super({ 
            backgroundColor: Color.White,
            width:800, 
            height:600
        })
        Physics.useArcadePhysics()
        Physics.gravity = vec(0, 1000);
        this.start(ResourceLoader).then(() => this.startGame())
        ResourceLoader.suppressPlayButton = true


        this.showDebug(true);
        this.debug.transform.showAll = true;
    }

    

    startGame() {
        
        console.log("start de game!")
       
        this.add("scene0", new Scene0())
        this.add("scene1", new Scene1())
        this.add("scene2", new Scene2())

        this.goToScene("scene0")



            
    }

  

}


new Game();

