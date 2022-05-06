import { put, takeLatest } from 'redux-saga/effects'
import { restaurantActions } from '../reducers/restaurantReducer.ts';
import { addApi, updateApi, deleteApi } from '../api/restaurantApi.ts'

interface RestaurantType {
    type: string;
    payload: {
        id: String,
        service_id: String,
        local_entity_code: String,
        management_no: String,
        license_no: String,
        name: String,
        food_type: String,
        food_main: String,
        address: String,
        phone: String
    }
}

interface RestaurantSuccessType {
    type: string;
    payload: {
        ok: string
    }
}

function* addRestaurant(restaurant: RestaurantType) {
    try {
        const response: RestaurantSuccessType = yield addApi(restaurant.payload)
        yield put(restaurantActions.addSuccess(response))
    } catch (err) {
        yield put(restaurantActions.addFail(err))
    }
}

export function* watchAdd() {
    yield takeLatest(restaurantActions.addRequest, addRestaurant)
}

function* updateRestaurant(restaurant: RestaurantType) {
    try {
        const response: RestaurantSuccessType = yield updateApi(restaurant.payload)
        yield put(restaurantActions.updateSuccess(response))
    } catch (err) {
        yield put(restaurantActions.updateFail(err))
    }
}

export function* watchUpdate() {
    yield takeLatest(restaurantActions.updateRequest, updateRestaurant)
}

function* deleteRestaurant(restaurant: RestaurantType) {
    try {
        const response: RestaurantSuccessType = yield deleteApi(restaurant.payload)
        yield put(restaurantActions.deleteSuccess(response))
    } catch (err) {
        yield put(restaurantActions.delteFail(err))
    }
}

export function* watchDelete() {
    yield takeLatest(restaurantActions.deleteRequest, deleteRestaurant)
}