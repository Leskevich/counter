import React, {ChangeEvent} from "react";


type startCounterType = {
    max: (maxValue: number) => void
    maxValue: number
    startValue: number
    startcouter: (value: number) => void
    setCounterValue: () => void
    disableCounter: () => void

}

let StartCouter = (props: startCounterType) => {

    let maxvalue = (e: ChangeEvent<HTMLInputElement>) => {
        props.disableCounter()
        let value = e.currentTarget.value
        props.max(Number(value))
    }
    let startvalue = (e: ChangeEvent<HTMLInputElement>) =>{
        props.disableCounter()
        let value = e.currentTarget.value
        props.startcouter(+value)
    }


    return (

        <div>
            <div>
                <div>
                    "max value"
                    <input onChange={maxvalue}
                           value={props.maxValue}
                    />
                </div>
                <div>
                   <span>
                       "start value"
                   </span>
                    <input onChange={startvalue}
                           value={props.startValue}/>
                </div>
            </div>
            <div>
                <button onClick={props.setCounterValue}>
                    set
                </button>
            </div>
        </div>
    )
}

export default StartCouter