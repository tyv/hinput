import React, { PropTypes, Component } from 'react';

export default class Insert extends React.Component {

  constructor() {
    super()
  }

  static propTypes = {
    handler: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired
  }

  render() {
    return (
      <button
        onClick={this.props.handler}
        contentEditable={false}>
          {'Insert ' + this.props.type}
      </button>
    )
  }

}
