import axios, { AxiosResponse } from "axios";

const SERVER = "http://127.0.0.1:5000";
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege...",
};

export interface RestaurantType {
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

export const addApi = async (payload: {
    service_id: string;
    local_entity_code: string;
    management_no: string;
    license_no: string;
    name: string;
    food_type: string;
    food_main: string;
    address: string;
    phone: string;
}) => {
    try {
        const response: AxiosResponse<unknown, RestaurantType[]> = await axios.post(
            `${SERVER}/restaurant`,
            payload,
            { headers }
        );
        return response.data;
    } catch (err) {
        return err;
    }
};

export const updateApi = async (payload: {
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
}) => {
    try {
        const response: AxiosResponse<unknown, RestaurantType[]> = await axios.put(
            `${SERVER}/restaurant/${payload.id}`,
            payload,
            { headers }
        );
        return response.data;
    } catch (err) {
        return err;
    }
};

export const deleteApi = async (payload: {
    id: string;
}) => {
    try {
        const response: AxiosResponse<unknown, RestaurantType[]> = await axios.delete(
            `${SERVER}/restaurant/${payload.id}`,
            { headers }
        );
        return response.data;
    } catch (err) {
        return err;
    }
};