import React from 'react';

class App extends React.Component {
    divRef = undefined

    constructor(props) {
        super(props);
        this.state = {
            width: undefined
        }
        this.divRef = React.createRef()
    }

    componentDidMount() {
        const div = this.divRef.current
        const {width} = div.getBoundingClientRect()
        this.setState(state => ({width}))
    }

    render() {
        return (<div ref={this.divRef}>
            hi
            <span>{this.state.width}</span>
        </div>)
    }
}


export default App;
