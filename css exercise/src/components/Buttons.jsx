/* eslint-disable react/prop-types */
export function Button({click,looks,name}) { 
    return (
        <button onClick={click} style={looks}>{name}</button>
    )
}