const add = () => ({
	type: "ADD"
})

const addAsync = () => dispatch => {
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({
				type: "ADD"
			})
		}, 1000)
	}).then(action => dispatch(action))
}

const minus = () => ({
	type: "MINUS"
})

export {
	add,
	addAsync,
	minus
}