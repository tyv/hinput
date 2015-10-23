import React from 'react'
import ReactDOM from 'react-dom'

import Chunk from './Chunk'
import Insert from './Insert'

import getSelectedNode from '../utils/getSelectedNode'
import sanitizeInput from '../utils/sanitizeInput'

export default class Editable extends React.Component {

  constructor() {
    super()

    this.state = {
        map_0: {
          text: 'abc '
        },
        map_1: {
          type: 'smile'
        },
        map_2: {
          text: ' def'
        }
    }
  }

  getChunks() {
    return Object.keys(this.state).map((key, index) => ::this.getChunk(key))
  }

  getChunk(key, index) {
    return (
      <Chunk
        chunk={this.state[key]}
        map={key}
        key={key}/>
    )
  }

  onChange(e) {

    let el = getSelectedNode()
    let thisEl = ReactDOM.findDOMNode(this);
    let map = el.dataset.map;

    var that = this

    setTimeout(() => { // After event

      if (map) {

        let isPresent = thisEl.querySelector('[data-map="' + map + '"]')

        if (isPresent) {

          if (el.classList.contains('text')) {
            this.setState({[el.dataset.map]: { text: el.innerText }})
          }

        } else {

          delete that.state[map]
          that.setState(that.state)

        }
      }
    }, 0)
  }

  onInsert(type) {

    switch(type) {
      case 'user':
        this.setState({
          [this.getNewMapKey()] : {
            type: 'user',
            url: '/@yuri',
            name: 'Yuri Tkachenko'
          }
        })
        break

      case 'document':
        this.setState({
          [this.getNewMapKey()] : {
            type: 'document',
            url: 'http://example.com/doc',
            name: 'Super document'
          }
        })
        break
    }

  }

  getNewMapKey() {

    let mapKey = Number(Object.keys(this.state).sort().pop().split('_').pop()) + 1

    return 'map_' + mapKey;

  }

  render() {
    return (
      <div className="editable">

        <div
          className='hinput'
          contentEditable='true'
          onKeyDown={::this.onChange}
          onPaste={sanitizeInput}>

            {this.getChunks()}
            <br/>

        </div>

        {/* This are dev/demo components */}
        <div className="inserts">
          <Insert type='user' handler={this.onInsert.bind(this, 'user')} />
          <Insert type='document' handler={this.onInsert.bind(this, 'document')} />
        </div>

      </div>
    )
  }

}
