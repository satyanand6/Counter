import React from "react";

function Counter() {
    var [i, setI] = React.useState(0)
    function inc() {
        setI(i + 1)
        console.log(i)
    }
    function dec() {
        setI(i - 1)
        console.log(i)
    }

    return (
        <div style={{ border: "2px solid" }}>
            <h1>counter: {i}</h1>
            <button onClick={inc}>increment</button>
            <button onClick={() => { dec() }}>decrement</button>
        </div>

    )
}

export default Counter;