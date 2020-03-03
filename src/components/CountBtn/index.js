import React, { Component } from 'react'
import {CounterConsumer} from '../../CounterProvider'
export default class CountBtn extends Component {
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