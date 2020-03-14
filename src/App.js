import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 1,
            arr: [1, 2, 3]
        }
    }

    render() {
        let tempArr = []
        for(let i=0; i<this.state.arr.length; i++){
           tempArr.push(<div key={i}>{this.state.arr[i]}</div>)
        }
        return (tempArr)
    }
}


export default App;
