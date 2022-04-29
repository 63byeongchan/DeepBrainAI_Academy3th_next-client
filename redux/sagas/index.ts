import { all } from 'redux-saga/effects'
import { watchJoin, watchLogin, watchLogout, watchModifyUser, watchDelUser } from './userSaga.ts'


export default function* rootSaga() {
    yield all([watchJoin(), watchLogin(), watchLogout(), watchModifyUser(), watchDelUser()])

}

