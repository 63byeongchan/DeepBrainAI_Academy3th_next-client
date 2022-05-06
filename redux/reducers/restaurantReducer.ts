import { createSlice } from "@reduxjs/toolkit";

export interface RestaurantType {
    id: string;
    service_id: string;
    local_entity_code: string;
    management_no: string;
    license_no: string;
    name: string;
    food_type: string;
    food_main: string;
    address: string;
    phone: string;
}

export interface RestaurantState {
    loading: boolean;
    data: RestaurantType[];
    error: any;
}

const initialState: RestaurantState = {
    loading: false,
    data: [],
    error: null,
};

const restaurantSlice = createSlice({
    name: "restaurants",
    initialState,
    reducers: {
        addRequest(state: RestaurantState, payload) {
            state.loading = true;
        },
        addSuccess(state: RestaurantState, { payload }) {
            state.data = [...state.data, payload];
            state.loading = false;
            window.location.href = '/restaurant'
        },
        addFail(state: RestaurantState, { payload }) {
            state.data = payload;
            state.loading = false;
        },
        updateRequest(state: RestaurantState, payload) {
            state.loading = true;
        },
        updateSuccess(state: RestaurantState, { payload }) {
            state.data = [...state.data, payload];
            state.loading = false;
            window.location.href = '/restaurant'
        },
        updateFail(state: RestaurantState, { payload }) {
            state.data = payload;
            state.loading = false;
        },
        deleteRequest(state: RestaurantState, payload) {
            state.loading = true;
        },
        deleteSuccess(state: RestaurantState, { payload }) {
            state.data = [...state.data, payload];
            state.loading = false;
            window.location.href = '/restaurant'
        },
        deleteFail(state: RestaurantState, { payload }) {
            state.data = payload;
            state.loading = false;
        },
    },
});

const { reducer, actions } = restaurantSlice;
export const restaurantActions = actions;
export default reducer;
