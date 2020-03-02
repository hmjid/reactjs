import React, { Component } from 'react'
import TodoHeader from './TodoHeader'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

import {getTodos} from '../services';

export default class index extends Component {
  constructor (){
    super()
    this.state = {
      todos:[],
      isloging: false
    }
  }
  componentDidMount = () => {
    // console.log(this.http)
    getTodos()
    .then(resp => {
      setTimeout(()=>{
        this.setState({
          todos : resp.data
        },()=>{
          this.setState({
            isloging : true
          })
        })
      },500)
    })
    .catch(err => {
      console.log(err)
    })
  }
  Additem = (value) => {
    this.setState(prevstate => {
      return {
        todos:[
          {
            id:this.state.todos.length+1,
            title:value,
            userid : 4,
            completed:false
          },
          ...prevstate.todos
        ]
      }
    })

  }
  onchangecompleted = (id) => {
    this.setState(prevstate => {
      return {
        todos:
          prevstate.todos.map(item => {
            if (item.id==id) {item.completed =!item.completed}
            return item
          })
        
      }
    })
  }
  render() {
    return (
      <div>
        <TodoHeader title ="代办事项列表" />
        <TodoInput Additem = {this.Additem} />
        {this.state.isloging
          ?
          <TodoList todos={this.state.todos} onchangecompleted = {this.onchangecompleted} />
          :
          '加载中....'
        }
      </div>
    )
  }
}
