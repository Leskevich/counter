import React from "react";


type buttonCounterT = {
    value: string
    disabled: boolean
    onClick: () => void
}

const ButtonCounter = (props: buttonCounterT) => {
    return (
        <div>
            <button onClick={props.onClick}
                    disabled={props.disabled}
            >
                {props.value}
            </button>


        </div>
    )
}

export default ButtonCounter