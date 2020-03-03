import React, { Component } from 'react';
import {Counter,CountBtn} from './components'

import Rewired from './Rewired'

@Rewired

class App extends Component {
  render() {
    return (
      <>
        <CountBtn type="decrement" />
        <Counter />
        <CountBtn type="increment" />
      </>
    );
  }
}

export default App