import React, {useState} from 'react';
import './App.css';
import Counter from './counter/Counter';

function App() {
    let [inputCounter, setInputCounter] = useState<number>(0)
    let incButton = () => {
        if (inputCounter < 5) {
            setInputCounter(inputCounter + 1)
        } else {
            return
        }
    }
    let resetButton = () => {
        setInputCounter(0)
    }
    return (
        <div className="App">
            <Counter
                inputCounter={inputCounter}
                incButton={incButton}
                resetButton={resetButton}/>
        </div>
    );
}


export default App;
