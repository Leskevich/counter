import React from "react";
import s from './counter.module.css'
import ButtonCounter from "./buttonCounter";

type coutType = {
    count: number
    inc: () => void
    reset: () => void
    maxValue: number
    disableB: boolean
    setLocal: (value:number) => void
    startValue: number
}

let Counter = (props: coutType) => {
    const {
        count,
        maxValue,
        disableB
    } = props

    let inc = () => {
        props.inc()

    }
    let reset = () => {
        props.reset()
    }

    const isDisabledInc = count >= maxValue || disableB
    const isDisabledResetBtn = props.count === props.startValue || disableB
    const counterInspect = () => {
        if (props.startValue < 0) {
            return 'больше 0 ск'
        } else {

        }
    }

    return (
        <div className={s.counter}>
            <div className={props.count === props.maxValue ? s.errorInput : s.valueInput}>

                {props.startValue < 0 ? 'больше 0 сук' : props.count}
            </div>
            <div>
                <div className={s.buttons}>
                    <ButtonCounter value={"inc"}
                                   onClick={inc}
                                   disabled={isDisabledInc}
                    />
                    <ButtonCounter value={"reset"}
                                   onClick={reset}
                                   disabled={isDisabledResetBtn}
                    />
                </div>
            </  div>
        </div>
    )
}

export default Counter