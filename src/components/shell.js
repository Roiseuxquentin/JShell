import React from 'react';

import Help from './help.js'
import Ls from './ls.js'
import Cat from './cat.js'

const Shell = (step) => {
	const cmd = JSON.parse(sessionStorage.getItem('history'))[step.index]
							.split(' ')[0]
	
	if ( cmd === 'cat') {
		const file =  JSON.parse(sessionStorage.getItem('history'))[step.index]
									.split(' ')
									.filter(elt => elt!=='')[1]

		return <Cat file={file} />		
	}

	switch (cmd) {
		case 'help' : 
			return <Help />
		case 'ls' :
			return <Ls />
		case 'exit' :
			exit()
			break;
		default : 
			return (<div >
								<p className=''>{`command not found: 
								${JSON.parse(sessionStorage.getItem('history'))[step.index]}`}</p>
			        </div>);
	}
}

const exit = () => {
	const home = window.history.length
	window.close()
	window.history.back(home - 1)
}


export default Shell;