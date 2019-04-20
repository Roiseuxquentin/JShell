import React from 'react';

const Cat = (file) => {
	
	const file1 = [
					" ____________________________________________________ ",
					"|  ________________________________________________  |",
					"| |                                                | |",
					"| |                   FILE 1                       | |",
					"| |                 blablabla                      | |",
					"| |________________________________________________| |",
					"|____________________________________________________|",
				].join('\n')

	switch (file.file) {
		case 'file1' :
			return (
				<div className='igloo cursorDefault'>
				  <pre>
		    	   {file1} 
				  </pre>
		    </div>)
		case undefined :
			return (
				<div className='igloo cursorDefault'>
				  <pre>
						Aucun fichier ou dossier renseigne
				  </pre>
		    </div>)
		default : 
			return (
				<div className='igloo cursorDefault'>
				  <pre>
		    	    {`${file.file}: Aucun fichier ou dossier de ce type`}
				  </pre>
		    </div>)
	}
}

export default Cat;