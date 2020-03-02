import React, { Component } from 'react'
//详情https://www.npmjs.com/package/prop-types
import PropTypes from 'prop-types';
export default class App extends Component {
  static propTypes = {
    title:PropTypes.string.isRequired,
    num:PropTypes.number.isRequired
  }
  static defaultProps = {
    title:'默认title',
    num:0
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
    <h1>{this.props.title}</h1>
    <h1>{this.props.num}</h1>

        </header>
      </div>
    )
  }
}
/*
App.propTypes = {
  title:PropTypes.string.isRequired,
  num:PropTypes.number.isRequired
}
*/