import React from 'react'
import ReactDOM from 'react-dom'

import '../css/styles.css'

import Editable from './Editable';

class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="app">
        <Editable/>
      </div>
    )
  }

}


ReactDOM.render(<App/>, document.querySelector('.app'))
