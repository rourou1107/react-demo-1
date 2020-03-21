import React, {createContext, useContext, useState} from 'react';
import ReactDOM from 'react-dom';

const C = createContext(null)

const App = () => {
    const [n, setN] = useState(0)
    return (
        <C.Provider value={{n, setN}}>
            <Father/>
        </C.Provider>
    );
};
function Father () {
    const {n} = useContext(C)
    return (
        <div>
            我是爸爸：n为 {n}
            <Child/>
        </div>
    )
}
function Child () {
    const {n, setN} = useContext(C)

    return (
        <div>
            我是儿子：n为 {n}
            <button onClick={()=>setN(n=>n+1)}>n+1</button>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));

