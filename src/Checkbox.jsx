import React, { useState} from "react";

const Checkbox = ({grocery}) => {
    const [isChecked, setIsChecked] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [isCrossed, setIsCrossed] = useState(false)
    
    function handleChange(event) {
        setIsChecked(event.target.checked)
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

export default Checkbox;