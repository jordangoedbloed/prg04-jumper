import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import  jordanActor   from '../images/jordan_actor.png'
import tile from '../images/tile_loop.png'
import rightTile from '../images/right_tile.png'
import leftTile from '../images/left_tile.png'
import cloud from '../images/cloud.png'
import background from '../images/background.png'
import block from '../images/enemy_01.png'
import newgame from '../images/newgame.png'
import restartgame from '../images/restartgame.png'
import blockupgrade from '../images/upgrade.png'


const Resources = {
     Jordan: new ImageSource(jordanActor),
     Tiles: new ImageSource(tile),   
     RightTile: new ImageSource(rightTile),
     LeftTile: new ImageSource(leftTile),
     Cloud: new ImageSource(cloud),
     Background: new ImageSource(background),
     Block: new ImageSource(block),
     MenuButton: new ImageSource(newgame),
     RestartButton: new ImageSource(restartgame),
     BlockUpgrade: new ImageSource(blockupgrade)
}
const ResourceLoader = new Loader([
     Resources.Jordan,
     Resources.Tiles,
     Resources.RightTile,
     Resources.LeftTile,
     Resources.Cloud,
     Resources.Background,
     Resources.Block,
     Resources.MenuButton,
     Resources.RestartButton,
     Resources.BlockUpgrade
])

export { Resources, ResourceLoader }