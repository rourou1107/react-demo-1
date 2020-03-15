import React, {useState, useEffect} from 'react';

const App = () => {
    const [n, setN] = useState(0)
    const useUpdate = (fn, dep)=>{
        const [nUpdateCount, setNUpdateCount] = useState(0)
        useEffect(() => {
            setNUpdateCount(x=> x+1)
        }, [dep])
        useEffect(() => {
            if(nUpdateCount > 1) {
                fn()
            }
        }, [nUpdateCount, fn])
    }
    useUpdate(()=>{console.log('n变了')}, n)

    const addN = () => {
        setN(n + 1)
    }
    return (
        <div>
            {n}
            <button onClick={addN}>+1</button>
        </div>
    )
}
export default App;
