import React, { useState} from "react";

export const Checkbox = ({grocery}) => {
    const [isChecked, setIsChecked] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [isCrossed, setIsCrossed] = useState(false)
    
    function handleChange() {
        setIsChecked(true)
    }

    return(
        <div className="item">
            <div className="input-container">
                <input type="checkbox"  checked={isChecked} onChange={handleChange}/>
            </div>
            <p>
            {grocery}
            </p>
        </div>
    )
}