import React, {useState} from 'react';
import './App.css';

function App() {
    let [inputCounter, setInputCounter] = useState(0)
    let incButton = () => {
        if (inputCounter < 5) {
            setInputCounter(inputCounter + 1)
        } else {
            return
        }
    }
    let resetButton = () => {
        setInputCounter(inputCounter = 0)
    }
    return (
        <div className="App">
            <div className='Counter'>
                <div>
                    <input className='InputCounter' value={inputCounter}/>
                </div>
                <div>
                    <button className={inputCounter < 5 ? "IncButton" : "DisableButton"}
                            onClick={incButton}
                    >inc
                    </button>
                    <button className={inputCounter == 0 ? 'DisableButton' : "ResetButton"}
                            onClick={resetButton}
                    >reset
                    </button>g
                </div>
            </div>
        </div>
    );
}


export default App;
