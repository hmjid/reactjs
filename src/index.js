
import React, { Component, createContext } from 'react'
import ReactDOM from 'react-dom';
import './index.css';

const {
  Provider,
  Consumer: CounterConsumer
} = createContext()

class CounterProvider extends Component {
  constructor() {
    super()
    this.state = {
      count: 100
    }
  }
  decrementCount = () => {
    this.setState({
      count:this.state.count+1
    })
  }
  incrementCount = () => {
    this.setState({
      count:this.state.count-1
    })
  }
  render() {
    return (
      <Provider value = { {
        count : this.state.count,x:4,
        Ondecrement:this.decrementCount,
        Onincrement:this.incrementCount
        } }>
        {this.props.children}
        </Provider>
    )
  }
}
class Counter extends Component {
  render() {
    return (
      <CounterConsumer> 
        {
          ({count}) => {
          return <span>{count}</span>
          }
        }
         </CounterConsumer>
    )
  }
}
class CountBtn extends Component {
  render() {
    return (
      <CounterConsumer> 
        {
          ({Ondecrement,Onincrement}) => {
            const handClick = this.props.type==='decrement' ? Ondecrement : Onincrement
            return <button onClick = {handClick}>{this.props.type}</button>
          }
        }
         </CounterConsumer>
    )
  }
}
export default class App extends Component {
  render() {
    return (
      <>
        <CountBtn type="decrement" />
        <Counter />
        <CountBtn type="increment" />
      </>
    )
  }
}

ReactDOM.render(<CounterProvider><App /></CounterProvider>, document.getElementById('root'));

