import React, { useState } from "react";

const Context = React.createContext(null)

    
const ProviderWrapper = (props) => {
    const [good, setGood] = useState(0);
    const [ok, setOk] = useState(0);
    const [bad, setBad] = useState(0);

    function increaseGood(){
        setGood(good +1);
    }

    function increaseOk(){
        setOk(ok + 1);
    }

    function increaseBad(){
        setBad(bad + 1);
    }

    function resetAll(){
        setGood(0);
        setOk(0);
        setBad(0);
    }

    const exposedValue = {
        good,
        ok,
        bad,
        increaseGood,
        increaseOk,
        increaseBad,
        resetAll
    }
    
    return <Context.Provider value={exposedValue}>
        { props.children }
    </Context.Provider>    
}
    
export {    
    Context,
    ProviderWrapper,    
} 
export default Context;

