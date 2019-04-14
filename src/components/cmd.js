
import React, { Component } from 'react';

import controlKey from './controlKey.js'
class  Cmd extends Component {
	constructor(props) {
			super(props)
			this.state = {
				path : 'visitor@pixels:~',
				cmd: ' ' ,
				width : 5,
				refresh : false,
				authorizedKeys : [],
			}
			this.valid = this.valid.bind(this)
		}

	componentDidMount() {
		if (this.props.neuronnes) {
			this.setState({authorizedKeys : controlKey() })
		}
	}

	valid(event){
		if (this.state.authorizedKeys.includes(event.keyCode)){
				this.setState({cmd : `${this.state.cmd}${event.key}`})
		} else if (event.keyCode === 13 ) {
				sessionStorage.setItem('oldPath',  `${this.state.path}$`)
				sessionStorage.setItem('oldCmd',  document.getElementById('cmd').value)
				this.setState({cmd : " ",  path : `${this.state.path}`})
		} else {
				if (event.keyCode !== 16) // SHIFT
					console.log('%c# UNAUTHORIZED #','background:yellow;color:red;')
		}
  }

	render() {
		if (this.props.neuronnes) {
			return (
				<div id='input' className='horizontal cmdContainer'>
		          <p id='path' className='path'>{this.state.path}$</p>
		          <input id='cmd' autoFocus={true} onKeyDown={event => this.valid(event)} readOnly
		  					value={this.state.cmd} style={{width: `${(Number(this.state.cmd.length) * 11.5)}px`}} />
		  				<p className='caret'></p>
		        </div>
			)
		}
		else {
			return (
						<div className={`horizontal logContainer`} >
		          <p className='path'>{sessionStorage.getItem('oldPath')}</p>
		          <input className='log' disabled={true} value={sessionStorage.getItem('oldCmd')} />  
		        </div>
				)
		}
	}
}

export default Cmd;