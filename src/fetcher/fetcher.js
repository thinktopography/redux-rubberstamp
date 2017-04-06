import React from 'react'

class Fetcher extends React.Component {

  static propTypes = {
    endpoint: React.PropTypes.string,
    method: React.PropTypes.string,
    status: React.PropTypes.string,
    text: React.PropTypes.string,
    onFetch: React.PropTypes.func
  }

  render() {
    const { text } = this.props
    const btnClass = this._btnClass()
    return <button className={ btnClass } onClick={ this._handleClick.bind(this) }>{ text }</button>
  }

  _btnClass() {
    const { status } = this.props
    if(status === 'pending') return 'btn btn-default'
    if(status === 'success') return 'btn btn-success'
    if(status === 'failure') return 'btn btn-danger'
  }

  _handleClick() {
    this.props.onFetch(this.props.method, this.props.endpoint)
  }

}

export default Fetcher
