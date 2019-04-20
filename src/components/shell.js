import React from 'react';

import Help from './help.js'
import Ls from './ls.js'
import Cat from './cat.js'

const Shell = (step) => {

	if (JSON.parse(sessionStorage.getItem('history'))[step.index].split(' ')[0] === 'cat') {
			const file =  JSON.parse(sessionStorage.getItem('history'))[step.index]
										.split(' ')
										.filter(elt => elt!=='')[1]

			return <Cat file={file} />		
	}
	switch (JSON.parse(sessionStorage.getItem('history'))[step.index]) {
		case 'help' : 
			return <Help />
		case 'ls' :
			return <Ls />
		default : 
			return (<div >
						<p className=''>{`command not found: 
						${JSON.parse(sessionStorage.getItem('history'))[step.index]}`}</p>
			        </div>);
	}
}


export default Shell;