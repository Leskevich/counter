import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter/counter";
import StartCouter from './Counter/startCouter';


function App() {


    const valueFromLocalStorage = Number(localStorage.getItem('count')) ;

    let [count, setCount] = useState(valueFromLocalStorage)
    let [maxValue, setMaxValue] = useState(0)
    let [startValue, setStartValue] = useState(0)
    let [disableB, setDisableB] = useState(true)



    const setLocal = (value:number) => {
       localStorage.setItem('count',JSON.stringify(value) )
    }

    const setDisableButton = () => {
        setDisableB(false)
        if(startValue>=0){setCount(startValue)}
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
                             count={count}
                             setLocal={setLocal}
                />
            </div>
            <div>
                <Counter count={count}
                         inc={inc}
                         reset={reset}
                         maxValue={maxValue}
                         disableB={disableB}
                         setLocal={setLocal}
                         startValue={startValue}

                />
            </div>

        </div>
    )


}


export default App;


