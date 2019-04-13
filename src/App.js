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
	}
	componentDidMount() {
		sessionStorage.clear()
	  sessionStorage.setItem('oldCmd' , '')  
 		sessionStorage.setItem('oldPath', '')
    	document.addEventListener("click", this.focus, false);

	}

	focus() {
		document.getElementById('cmd').focus()
	}

	onChange(event) {
		this.setState({cmd : event.target.value})
	}
	
  render() {
    return (
      <div className="shell vertical">
      	<Igloo />
      	<h2>Hello pixel , Welcome to mind, Enjoy ur think !</h2>
       	<Shell />
      	<Cmd />
      	<Cmd neuronnes />
      </div>
    );
  }
}

export default App;