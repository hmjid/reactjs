import React, { Component,createRef } from 'react'
import PropTypes from 'prop-types';

export default class TodoInput extends Component {
  constructor (){
    super()
    this.state = {
      inputValue : '',
    }
    this.inputDom = createRef()
  }
  handleKeyUp = () => {
    
  }
  handleInputChange = (e) => {
    this.setState({
      inputValue :e.currentTarget.value,
    })
  }
  handleClick = () => {
    this.props.Additem(this.state.inputValue)
    this.setState({
      inputValue:''
    },() => {
      this.inputDom.current.focus()
      
    })
  }
  render() {
    return (
      <div>
        <input
         type="text"
         value={this.state.inputValue}
         onChange = {this.handleInputChange }
         onKeyUp={this.handleKeyUp}
         ref = {this.inputDom}
         />
        &nbsp;<button onClick={this.handleClick}>提交</button>
      </div>
    )
  }
}