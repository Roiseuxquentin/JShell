import React from 'react';

import Help from './help.js'

const Shell = (step) => {
// console.log(JSON.parse(sessionStorage.getItem('historyOutput')))
	// switch (JSON.parse(sessionStorage.getItem('historyOutput'))[step]) {
	// 	case 'unauthorized' :
	if (sessionStorage.getItem('oldCmd') === 'help' && (step.step === 0)) {
		sessionStorage.setItem('oldCmd', '')
		return <Help />
	}else {
			return (<div>
						<p className='FadeIn'>...</p>
			        </div>);
	}

	// 	case 'help' : 
	// 		return <Help />
	// 	default : 
	// 		console.log('switch');	
	// }
}


export default Shell;