import React, {useState, useEffect} from 'react';

const App = () => {
    const [n, setN] = useState(0)
    const [m, setM] = useState(0)
    const addN = ()=> {
        setN(n+1)
    }
    const addM = ()=> {
        setM(m+1)
    }
    useEffect(()=>{
        console.log('n变了')
    }, [n, m])
    return (
        <div>
            {n}
            <button onClick={addN}>n+1</button>
            <hr />
            {m}
            <button onClick={addM}>m+1</button>
        </div>
    )
}

export default App;
