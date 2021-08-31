import React, {ChangeEvent} from "react";
import ButtonCounter from "./buttonCounter";
import s from './counter.module.css'


type startCounterType = {
    max: (maxValue: number) => void
    maxValue: number
    startValue: number
    startcouter: (value: number) => void
    setDisableButton: () => void
    disableCounter: () => void
    disableB:boolean

}

let StartCouter = (props: startCounterType) => {

    let maxvalue = (e: ChangeEvent<HTMLInputElement>) => {
        props.disableCounter()
        let value = e.currentTarget.value
        props.max(Number(value))
    }
    let startvalue = (e: ChangeEvent<HTMLInputElement>) => {
        props.disableCounter()
        let value = e.currentTarget.value
        props.startcouter(+value)
    }

    const disabled = !props.disableB || props.startValue<0

    return (

        <div className={s.startCounter}>
            <div >
                <div className={s.inputStartCounter}>
                    <span>
                        max value
                    </span>
                    <input onChange={maxvalue}
                           value={props.maxValue}
                           className={s.valueInput}
                           type='number'
                    />
                </div>
                <div className={s.inputStartCounter}>
                   <span>
                       start value
                   </span>
                    <input onChange={startvalue}
                           value={props.startValue}
                           className={s.valueInput}
                    />
                </div>
            </div>
            <div className={s.buttonStartCounter}>
                <ButtonCounter
                value={'set'}
                onClick={props.setDisableButton}
                disabled={disabled}
                />
            </div>
        </div>
    )
}

export default StartCouter