import '../css/style.css'
import { Actor, Color, DisplayMode, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Player } from './player'


export class Game extends Engine {

    constructor() {
        super({ 
            backgroundColor: Color.Gray,
            displayMode: DisplayMode.FillScreen
            // width: 800, height: 600 
        })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")

        const player = new Player
        this.add(player)

    }
}

new Game()
