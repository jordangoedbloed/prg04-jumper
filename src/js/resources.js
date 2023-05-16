import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import  jordanActor   from '../images/jordan_actor.png'

const Resources = {
     Jordan: new ImageSource(jordanActor)   
}
const ResourceLoader = new Loader([
     Resources.Jordan
])

export { Resources, ResourceLoader }