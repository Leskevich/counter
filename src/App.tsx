import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter/counter";
import StartCouter from "./Counter/startCouter";


function App() {
    let [count, setCount] = useState(0)
    let [error, setError] = useState(false)
    let [maxCout, setMaxCount]= useState(7)
    let [startCount, setStartCount] = useState(0)


    let inc = () => {
        count < maxCout ?
            setCount(count + 1) : setError(true)
    }
    let reset = () => {
        setCount(0)
        setError(false)
    }
    let resetMaxCount = (value:number) =>{
        setMaxCount(value)
    }
    let resetStartCout= (value:number) => {
        setStartCount(value)
        setCount(value)

    }

    return (
        <div className='blok'>
            <div>
                <StartCouter  resetMaxCount={resetMaxCount}
                              maxCout={maxCout}
                              resetStartCout={resetStartCout}
                              startCount={startCount}
                />
            </div>
            <div>
                <Counter count={count} inc={inc} reset={reset} maxCout={maxCout} error={error}/>
            </div>

        </div>
    )


}


export default App;


