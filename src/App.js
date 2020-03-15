import React, {useState} from 'react';

const App = () => {
    const [n, setN] = useState(0)
    const addN = ()=> {
        setN(n+1)
    }
    return (
        <div>
            {n}
            <button onClick={addN}>n+1</button>
        </div>
    )
}

export default App;
