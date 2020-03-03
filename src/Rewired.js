import React, {Component} from 'react'
import { CounterProvider} from './CounterProvider'

export default  (Assembly) => {
  return class Rewired extends Component {
    render() {
      return (
        <CounterProvider>
          <Assembly />
        </CounterProvider>
      )
    }
  }
}
