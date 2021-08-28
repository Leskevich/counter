import React from "react";
import s from './counter.module.css'

type coutType = {
    count: number
    inc: () => void
    reset: () => void
    maxCout: number
    error:boolean
}

let Counter = (props: coutType) => {

    let inc = () => {
        props.inc()
    }
    let reset = () => {
        props.reset()
    }

    return (
        <div className={s.counter}>
            <div>
                <input className={props.count===props.maxCout? s.errorInput:s.valueInput} value={props.count}/>
            </div>
            <div>
                <div className={s.buttons}>
                    <button disabled={props.error}
                            onClick={inc}>inc</button>
                    <button disabled={props.count===0}
                            onClick={reset}>Reset</button>
                </div>
            </  div>
        </div>
    )
}

export default Counter