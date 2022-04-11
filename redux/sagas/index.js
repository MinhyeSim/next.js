import { takeLatest, all, put }from 'redux-saga/effects'
import {} from './user.saga'

export default function* rootSaga(){
    yield all([fork(watchSignup)])
}