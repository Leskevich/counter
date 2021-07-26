import React from 'react';


type counterType = {
    inputCounter: number
    incButton: () => void
    resetButton: () => void
}

const Counter = (props: counterType) => {
    return (
        <div className='Counter'>
            <div>
                <input className= {props.inputCounter===5 ? "AttentionInputCounter":'InputCounter } '} value={props.inputCounter}/>
            </div>
            <div>
                <button disabled={props.inputCounter === 5}
                        className="IncButton"
                        onClick={props.incButton}
                >inc
                </button>
                <button disabled={props.inputCounter === 0}
                        className="ResetButton"
                        onClick={props.resetButton}
                >reset
                </button>
            </div>
        </div>
    )
}

export default Counter