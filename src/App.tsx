import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter/counter";
import StartCouter from './Counter/startCouter';


function App() {



    let [count, setCount] = useState(0)
    let [maxValue, setMaxValue] = useState(0)
    let [startValue, setStartValue] = useState(0)
    let [disableB, setDisableB] = useState(true)

    const setLocal = () => {
       localStorage.setItem('count',JSON.stringify(count) )
    }

    const setDisableButton = () => {
        setDisableB(false)
    }
    const disableCounter = () => setDisableB(true)

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
                             setDisableButton={setDisableButton}
                             disableCounter={disableCounter}
                             disableB={disableB}
                />
            </div>
            <div>
                <Counter count={count}
                         inc={inc}
                         reset={reset}
                         maxValue={maxValue}
                         disableB={disableB}
                         setLocal={setLocal}

                />
            </div>

        </div>
    )


}


export default App;


