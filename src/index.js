import React, {memo, useMemo, useState} from 'react';
import ReactDOM from 'react-dom';


const App = () => {
    console.log('App 执行了')
    const [n, setN] = useState(0)
    const [m, setM] = useState(0)
    function addN(){
        setN(n+1)
    }
    const addM = useMemo(()=>{
        return ()=>{
            setM(m+1)
        }
    }, [m])
    return (
        <div>
            {n}
            <button onClick={addN}>n+1</button>
            <Child m={m} addM={addM}/>
        </div>
    );
};

const Child = memo((prop) => {
    console.log('Child 执行了')
    return (
        <div>
            {prop.m}
            <button onClick={prop.addM}>n+1</button>
        </div>
    )
})

ReactDOM.render(<App/>, document.getElementById('root'));

