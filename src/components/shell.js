import React from 'react';

import Help from './help.js'
import Ls from './ls.js'
import Cat from './cat.js'

const Shell = (step) => {
	const cmd = JSON.parse(sessionStorage.getItem('history'))[step.index]
							.split(' ')[0]
	
	switch (cmd) {
		case 'help' : 
			return <Help />
		case 'exit' :
			exit()
			break;
		case 'ls' :
			return <Ls />
		case 'cat' :
			const file =  JSON.parse(sessionStorage.getItem('history'))[step.index]
												.split(' ')
												.filter(elt => elt!=='')[1]

			return <Cat file={file} />		
		default : 
			return (<div >
								<p className=''>{`command not found: 
								${JSON.parse(sessionStorage.getItem('history'))[step.index]}`}</p>
			        </div>);
	}
}

const exit = () => {
	const logLength = window.history.length

	// if tab was open with Js
	window.close()
	// else back to first page logged in window's history
	window.history.back(logLength - 1)
}

export default Shell;