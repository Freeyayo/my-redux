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

const addSaga = () => ({
	type: "ADD_SAGA"
})

const addSagaAsync = () => ({
	type: "ADD_SAGA_ASYNC"
})

const minus = () => ({
	type: "MINUS"
})

export {
	add,
	addAsync,
	addSaga,
	addSagaAsync,
	minus
}