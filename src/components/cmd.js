
import React, { Component } from 'react';

class  Cmd extends Component {
	constructor(props) {
			super(props)
			this.state = {
				path : 'visitor@pixels:~',
				cmd: ' ' ,
				width : 5,
				refresh : false,
			}
			this.onChange = this.onChange.bind(this)  
			this.valid = this.valid.bind(this)
		}

  componentDidMount(){
  	if (!this.props.neuronnes) {
    	  document.addEventListener("keydown", this.valid, false);
  	}
  }
  componentWillUnmount() {
  	if (!this.props.neuronnes) {
	    document.removeEventListener("keydown", this.valid, false);
  	}
  }

	valid(event){
    if (event.keyCode === 13 ) {
				sessionStorage.setItem('oldPath',  `${this.state.path}$`)
				sessionStorage.setItem('oldCmd',  document.getElementById('cmd').value)
				document.getElementById('cmd').value = " "
				document.getElementById('cmd').style = "width:11.5px;"
				this.setState({cmd : " ",  path : `${this.state.path}`})
		}
  }

	onChange(event) {
		this.setState({cmd : event.target.value})
	}

	render() {
		if (this.props.neuronnes) {
			return (
				<div id='input' className='horizontal cmdContainer'>
		          <p id='path' className='path'>{this.state.path}$</p>
		          <input id='cmd' autoFocus={true} onChange={event => this.onChange(event)}
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