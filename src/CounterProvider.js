import React, { Component, createContext } from 'react'

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

export { 
  CounterConsumer ,
  CounterProvider 
}