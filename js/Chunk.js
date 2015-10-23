import React, { PropTypes, Component } from 'react';

export default class Chunk extends React.Component {

  constructor() {
    super()
  }

  static propTypes = {
    chunk: PropTypes.object.isRequired,
    map: PropTypes.string.isRequired
  }

  getChunk() {
    let chunk = this.props.chunk

    switch(chunk.type) {
      case 'smile':
        return this.getSmile()
        break

      case 'user':
        return this.getUser()
        break

      case 'document':
        return this.getDocument()
        break

      default:
        return this.getText()
    }

  }

  getText() {
    return (
      <span className='text' data-map={this.props.map}>
        {this.props.chunk.text}
      </span>
    )
  }

  getSmile() {
    return (
      <span className='smile' data-map={this.props.map}>
        <span data-map={this.props.map}> </span>
      </span>
    )
  }

  getUser() {
    let chunk = this.props.chunk

    return (
      <span
        className='user'
        data-map={this.props.map}
        contentEditable={false}>
        <a
          href={chunk.url}
          data-map={this.props.map}>{'@' + chunk.name}</a>
      </span>
    )
  }

  getDocument() {
    let chunk = this.props.chunk

    return (
      <span
        className='doc'
        data-map={this.props.map}
        contentEditable={false}>
        <a
          href={chunk.url}
          data-map={this.props.map}>{chunk.name}</a>
      </span>
    )
  }

  render() {
    return this.getChunk()
  }

}
