import React from "react";
import s from './counter.module.css'

type coutType = {
    count: number
    inc: () => void
    reset: () => void
    maxValue: number
    startCounter: boolean
}

let Counter = (props: coutType) => {
    const {
        count,
        maxValue,
        startCounter
    } = props

    let inc = () => {
        props.inc()
    }
    let reset = () => {
        props.reset()
    }

    const isMaxCount = count >= maxValue;
    const isDisabledInc = isMaxCount || startCounter
    const isDisabledResetBtn = props.count === 0 || startCounter

    return (
        <div className={s.counter}>
            <div className={props.count === props.maxValue ? s.errorInput : s.valueInput}>
                {props.count}
            </div>
            <div>
                <div className={s.buttons}>
                    <button disabled={isDisabledInc}
                            onClick={inc}>
                        inc
                    </button>
                    <button disabled={isDisabledResetBtn}
                            onClick={reset}
                    >
                        Reset
                    </button>
                </div>
            </  div>
        </div>
    )
}

export default Counter