import React from "react";
import s from './counter.module.css'


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
                    className={s.buttons}
            >
                {props.value}
            </button>


        </div>
    )
}

export default ButtonCounter