import React from 'react';

const Igloo = () => {
	const ascii = [
					"              _           ",
					" ___ ___ __ _| |___  ___  ",
					"/ -_) -_) _` | / _ \\/ _ \\ ",
					"\\___\\___\\__, |_\\___/\\___/ ",
					"        |___/           v.1",
				].join('\n')

		return (
		<div className='igloo'>
		  <pre>
            	{ascii}
		  </pre>
        </div>)
}

export default Igloo;