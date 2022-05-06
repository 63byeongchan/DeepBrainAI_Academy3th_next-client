import { all } from 'redux-saga/effects';
import { watchJoin, watchLogin, watchLogout, watchModifyUser, watchDelUser } from './userSaga.ts';
import { watchAdd, watchUpdate, watchDelete } from './restaurantSagas.ts';


export default function* rootSaga() {
    yield all([watchJoin(), watchLogin(), watchLogout(), watchModifyUser(), watchDelUser(),
    watchAdd(), watchUpdate(), watchDelete()])

}

