import { put, call, all, takeLatest, takeEvery, select } from 'redux-saga/effects';

//worker
function *sagaAdd(){
	yield put({ type:"ADD" })
}

function *sagaAddAsync(){
	const action = yield call(delay, 1000)
	yield put(action)
}
function delay(d){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({
				type: "ADD"
			})
		},d)
	})
}
//watcher
function *sagaAddWatcher(){
	yield takeLatest('ADD_SAGA', sagaAdd)
}

function *sagaAddAsyncWatcher(){
	yield takeLatest('ADD_SAGA_ASYNC', sagaAddAsync)
}

function *logAndWatch(){
	yield takeEvery('*', function *logger(action) {
    const state = yield select()

    console.log('action', action)
    console.log('state after', state)
  })
}
//export
function *rootSagas(){
	yield all([
		sagaAddWatcher(),
		sagaAddAsyncWatcher(),
		logAndWatch()
	])
}

export {
	rootSagas as default
}