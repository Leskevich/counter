import React, {ChangeEvent} from "react";


type startCounterType={
    resetMaxCount:(value:number)=>void
    maxCout:number
    resetStartCout: (value:number)=>void
    startCount:number
}

let StartCouter = (props:startCounterType) => {
    let onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value
        props.resetMaxCount(Number(value))
    }

    let onChangeStartValue=(e: ChangeEvent<HTMLInputElement>)=>{
        let value = e.currentTarget.value
        props.resetStartCout(Number(value))
    }
    return (

        <div>
            <div>

                <div>"max value"<input onChange={onChangeMaxValue} value={props.maxCout} /></div>
                <div>"start value"<input onChange={onChangeStartValue} value={props.startCount} /></div>


            </div>
            <div>
                <button>set</button>
            </div>
        </div>
    )
}

export default StartCouter