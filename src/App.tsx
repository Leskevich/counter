import React, {useState} from 'react';
import './App.css';
import Counter from './counter/Counter';
import {stateType} from './state/state';
import Tablo from './counter/tablo';
import Inc from "./counter/inc";
import ResetButton from "./counter/reset";

type propsType = {
    state: stateType
}


function App(props: propsType) {
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
            <div>
                <Counter
                    inputCounter={inputCounter}
                    incButton={incButton}
                    resetButton={resetButton}/>
            </div>
            <div>
                <Tablo state={props.state}/>
                <div>
                    <div><Inc/></div>
                    <div><ResetButton/></div>
                </div>

            </div>
        </div>

    );


}


export default App;


