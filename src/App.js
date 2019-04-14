import React, { Component } from 'react';


import Shell from './components/shell.js'
import Cmd from './components/cmd.js'
import Igloo from './components/ascii.js'

import './style.css'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			steps: 0,
		}
		this.execute = this.execute.bind(this)
		this.log = this.log.bind(this)
	}
	componentDidMount() {
		sessionStorage.clear()
  	document.addEventListener("click", this.focus, false);
  	document.addEventListener("keydown", this.execute, false);
	}

	execute(event) {
		if (event.keyCode === 13){

			let history = []
			history.push(sessionStorage.getItem('oldCmd'))

			if (sessionStorage.getItem('history')){
				JSON.parse(sessionStorage.getItem('history')).map(elt => history.push(elt) ) }
	
			sessionStorage.setItem('history', JSON.stringify(history))
	
			if (sessionStorage.getItem('oldCmd') === 'clear') {
				this.setState({steps : 0})
			} else {
				this.setState({steps : (this.state.steps + 1) })
			}
		}
	}
	focus() {
		document.getElementById('cmd').focus()
	}

	log() {
		let array = []
		let i = 0

		while (i++ < this.state.steps) {
			array.push('')
		}

			return array.map((elt, index) =>	{ return (
													<div className='vertical FadeIn' key={index} >
      											<Cmd step={index} />
													  <Shell step={index} /> 
													</div> ) }).reverse()
	}

  render() {
    return (
      <div id="shell" className="shell vertical">
      	<Igloo />
      	<h2>Hello pixel , Welcome to mind, Enjoy ur think !</h2>
      	{this.log()}
      	<Cmd neuronnes />
      </div>
    );
  }
}

export default App;