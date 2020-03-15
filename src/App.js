import React, {useState, useEffect} from 'react';

const App = () => {
    const [childVisible, setChildVisible] = useState(true)
    const show = ()=> {
        setChildVisible(true)
    }
    const hide = ()=> {
        setChildVisible(false)
    }
    return (
        <div>
            {childVisible ? <button onClick={hide}>hide</button> : <button onClick={show}>show</button>}
            {childVisible ? <Child /> : null}
        </div>
    )
}
const Child = ()=>{
    useEffect(()=>{
        return ()=>{
            console.log('销毁了')
        }
    })
    return (
        <div>我是 child</div>
    )
}
export default App;
