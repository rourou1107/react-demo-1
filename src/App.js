import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {x: 1}
    }

    onClick = () => {
        this.setState((state) => ({x: state.x + 1}));
        this.setState((state) => ({x: state.x - 1}));
    };

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.n !== this.state.n;
    }

    render() {
        console.log('render了');
        return (
            <div>
                {this.state.x}
                <button onClick={this.onClick}>+1</button>
            </div>
        );
    }
}


export default App;
