import { FaVolumeUp } from "react-icons/fa";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export function VolumeControls () {
    return (
        <div className="flex">
            <FaVolumeUp/>
            <Slider
                min={0}
                max={100}
                defaultValue={50}
                onChange={(value) => console.log("Volume:", value)}
                trackStyle={{
                    backgroundColor: '#333333',
                }}
                railStyle={{
                    borderColor: '#333333',
                }}
                handleStyle={{
                    borderColor: '#333333',
                    backgroundColor: '#333333',
                    opacity: 1,
                    cursor: 'pointer',
                }}
            />
        </div>
    )
}
