import React from 'react';

const Ls = () => {
	
	const contents = sessionStorage.getItem('oldPath')

	switch (contents) {
		case 'dossier2' :
			return (
				<div className='igloo cursorDefault'>
				  <pre>
		    	    file4 file5 file6
				  </pre>
		    </div>)
		case 'dossier1' :
			return (
				<div className='igloo cursorDefault'>
				  <pre>
		    	   file2 file3
				  </pre>
		    </div>)
		default : 
			return (
				<div className='igloo cursorDefault'>
				  <pre>
		    	    file1 dossier1/ dossier2/
				  </pre>
		    </div>)
	}
}

export default Ls;