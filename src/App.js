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
	}
	componentDidMount() {
		sessionStorage.clear()
	  sessionStorage.setItem('oldCmd' , '')  
 		sessionStorage.setItem('oldPath', '')
  	document.addEventListener("click", this.focus, false);
  	document.addEventListener("keydown", this.execute, false);
	}

	execute(event) {
		if (event.keyCode === 13){
			if (sessionStorage.getItem('oldCmd') === 'clear') {
				this.setState({steps : 0})
			} else {
				this.setState({steps : (this.state.steps + 1)})
			}
		}
	}
	focus() {
		document.getElementById('cmd').focus()
	}
	historiK() {
		let array = []
		let i = 0

		while (i++ < this.state.steps) {
			array.push('')
		}
			return array.map((elt, index) =>	{ return (
													<div className='vertical' key={index} >
      											<Cmd />
													  <Shell /> 
													</div> ) })

	}


  render() {
    return (
      <div id="shell" className="shell vertical">
      	<Igloo />
      	<h2>Hello pixel , Welcome to mind, Enjoy ur think !</h2>
      	{this.historiK()}
      	<Cmd neuronnes />
      </div>
    );
  }
}

export default App;