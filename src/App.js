import React from 'react';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '肉肉',
      x: 1
    }
  }
  onClick = ()=>{
    this.setState((state)=>({x: state.x+1}), ()=>{
    })
    console.log(this.state)
  }
  render(){
    return (
        <div>
          {this.state.x}
          --------父---------
          <A name={this.state.name}
             x={this.state.x}
             onClick={this.onClick}
          />
        </div>
    );
  }
}

class A extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>
        {this.props.name}
        --------子--------
        {this.props.x}
        <button onClick={this.props.onClick}>+1</button>
      </div>
    )
  }
}

export default App;
