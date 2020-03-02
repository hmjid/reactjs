import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'
export default class index extends Component {
  static propTypes = {
    todos:PropTypes.arrayOf(PropTypes.shape({
      "userId": PropTypes.number.isRequired,
      "id": PropTypes.number.isRequired,
      "title": PropTypes.string.isRequired,
      "completed": PropTypes.bool.isRequired
    }))
  }
  componentDidMount() {

  }
  render() {
    console.log(this.props)
    return (
      <ul>
        {
          this.props.todos.map(item => <TodoItem {...item} key={item.id} onchangecompleted ={this.props.onchangecompleted} />)
        }
      </ul>

    )
  }
}

