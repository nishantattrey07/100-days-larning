/* eslint-disable react/prop-types */
export function Button({ButtonName,ClickFunction,ButtonColor}) { 
    return (
        <button onClick={ClickFunction} style={{backgroundColor:`${ButtonColor}`}}>{ButtonName}</button>
    )
}