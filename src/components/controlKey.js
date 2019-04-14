const controleKey = (key) => {
	
	let i = 67
	let j = 48
	let authorizedKeys = []
	
	while ( i < 91) {
		authorizedKeys.push(i++)
	}
	while ( j < 58) {
		authorizedKeys.push(j++)
	}

	authorizedKeys.push(190) // .
	authorizedKeys.push(191) // /
	authorizedKeys.push(92) // ~
	authorizedKeys.push(189) // -
	authorizedKeys.push(32) // SPACE


	return authorizedKeys
}

export default controleKey;