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
					"| | -ls   : display current folder contents        | |",
					"| | -cat <file> : display content of file          | |",
					"| |                                                | |",
					"| |________________________________________________| |",
					"|____________________________________________________|",
				].join('\n')

		return (
		<div className='igloo cursorDefault'>
		  <pre>
        {help}
		  </pre>
        </div>)
}

export default Help;