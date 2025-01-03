import React, { createContext, useContext, useState } from 'react';

const myContext = createContext();

function CounterContextProvider({children}){
    const [count, setCount] = useState(0);

    return <myContext.Provider value={{count,setCount}}>
        {children}
    </myContext.Provider>
}

function Parent() {
  

  return (
    <CounterContextProvider>
    <Incrase />
      <Decrease/>
      <Value />
    </CounterContextProvider>
      
  );
}

function Decrease() {

    const {count,setCount} = useContext(myContext);
  return <button onClick={() => setCount(count - 1)}>Decrease</button>;
}

function Incrase() {
    const {count,setCount} = useContext(myContext);
  return <button onClick={() => setCount(count + 1)}>Increase</button>;
}

function Value() {
    const {count} = useContext(myContext);
  return <p>Count: {count}</p>;
}



export default Parent
