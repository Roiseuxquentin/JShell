import React from 'react';

const Help = () => {
	const help = [
					" ____________________________________________________ ",
					"|  ________________________________________________  |",
					"| |                                                | |",
					"| |                                                | |",
					"| |                     COMMANDES                  | |",
					"| |                                                | |",
					"| | -help : display this menu                      | |",
					"| | -clear: clear shell                            | |",
					"| |                                                | |",
					"| |                                                | |",
					"| |________________________________________________| |",
					"|____________________________________________________|",
				].join('\n')

		return (
		<div className='igloo'>
		  <pre>
        {help}
		  </pre>
        </div>)
}

export default Help;