import React, { Component,createRef } from 'react'
//详情https://www.npmjs.com/package/prop-types
import PropTypes from 'prop-types';
export default class Ref extends Component {

  constructor (){
    super()
    this.state = {
      inputValue : 'rrrr',
      text : '1111'
    }
    this.inputDom = createRef()
  }
  handleKeyUp = () => {
    
  }
  handleInputChange = (e) => {
    console.log(e.currentTarget)
    this.setState({
      inputValue :e.currentTarget.value,
    })
  }
  handleClick = () => {
    this.setState({
      text :this.state.inputValue,
    },() => {
      this.inputDom.current.focus()
    })
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.text}</h1>
        <input
         type="text"
         value={this.state.inputValue}
         onChange = {this.handleInputChange }
         onKeyUp={this.handleKeyUp}
         ref = {this.inputDom}
         />
         <button onClick={this.handleClick}>变</button>
      </div>
    )
  }
}