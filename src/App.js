import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {x: 1}
    }

    add = () => {
        this.setState(state => ({x: state.x + 1}))
    }

    render() {
        let message
        if (this.state.x % 2 === 0) {
            message = <div>偶数</div>
        } else {
            message = <div>奇数</div>
        }
        return (
            <>
                {message}
                <button onClick={this.add}>+1</button>
            </>
        )
    }
}


export default App;
