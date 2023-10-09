import brain from '../assets/Icons/brain.svg'
import camera from '../assets/Icons/camera.svg'
import cameraShutter from '../assets/Icons/camera-shutter.svg'


export default function Background() {
    return (
        <div  className="gameBackground">
            <div className="camera">
                <img src={camera} alt="camera image" />
                
            </div>
            <div   className="brain">
                <img src={brain} alt="brain image" />
            </div>
            <div className="camera-shutter">
            <img src={cameraShutter} alt="camera shutter image" />
            </div>
        </div>
    )
}