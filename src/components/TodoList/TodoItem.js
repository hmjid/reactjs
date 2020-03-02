import React, { Component } from 'react'

export default class InputItem extends Component {
  constructor (props){
    super()
    this.state = {
      completedText:''
    }

  }
  static getDerivedStateFromProps(props){
    return {
      completedText:props.completed?'完成':'未完成'
    }
  }
  handlecheck = () => {
    const {onchangecompleted,id} = this.props
    onchangecompleted && onchangecompleted(id)
  }
  shouldComponentUpdate(nextstate,prevstate){
    return nextstate.completed!=prevstate.completed
  }
  render() {
    return (
      <li>
        <input type="checkbox" onChange={this.handlecheck} checked={this.props.completed}  /> 
        {this.props.title}

        {this.state.completedText}
      </li>
    )
  }
}
