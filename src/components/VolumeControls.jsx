import { FaVolumeUp } from "react-icons/fa";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export function VolumeControls () {
    return (
        <div className="flex py-2">
            <div className="mr-3 text-(--secondary) dark:text-(--bg-color)">
                <FaVolumeUp/>
            </div>
            <Slider
                min={0}
                max={100}
                defaultValue={50}
                onChange={(value) => console.log("Volume:", value)}
                trackStyle={{
                    height: '8px',
                    backgroundColor: '#333333'
                }}
                handleStyle={{
                    height: '110%',
                    borderColor: '#333333',
                    backgroundColor: '#666666',
                    cursor: 'pointer',
                    opacity: 1,
                }}
                railStyle={{
                    height: '8px',
                }}
            />
        </div>
    )
}
