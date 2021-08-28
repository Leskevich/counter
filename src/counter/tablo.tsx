import React from "react";
import {stateType} from "../state/state";

 type tabloStateType = {
     state:stateType
 }

let Tablo = (props:tabloStateType) => {
    return(
        <div>
            <input value={props.state.tablo} />
        </div>
    )
}


export default Tablo