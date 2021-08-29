import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter/counter";
import StartCouter from './Counter/startCouter';


function App() {

    let [count, setCount] = useState(0)
    let [maxValue, setMaxValue] = useState(4)
    let [startValue, setStartValue] = useState(0)

    let [startCounter, setStartCounter] = useState(true)

    const setCounterValue = () => {
        setStartCounter(false)
    }
    const disableCounter = () => setStartCounter(true)

    let inc = () => {
        setCount(count + 1)
    }
    let reset = () => {
        setCount(startValue)
    }

    let max = (maxValue: number) => {
        setMaxValue(maxValue)
    }
    let startcouter = (value: number) => {
        setStartValue(value)
        setCount(value)
    }

    return (
        <div className='blok'>
            <div>
                <StartCouter max={max}
                             maxValue={maxValue}
                             startValue={startValue}
                             startcouter={startcouter}
                             setCounterValue={setCounterValue}
                             disableCounter={disableCounter}
                />
            </div>
            <div>
                <Counter count={count}
                         inc={inc}
                         reset={reset}
                         maxValue={maxValue}
                         startCounter={startCounter}

                />
            </div>

        </div>
    )


}


export default App;


