import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { restaurantActions } from "../../redux/reducers/restaurantReducer.ts";
import tableStyles from "../common/styles/table.module.css";

export async function getServerSideProps({ params }) {
    const id = params.id
    const res = await fetch(`http://localhost:5000/restaurant/${id}`)
    const data = await res.json()

    return {
        props: {
            data,
            id
        },
    };
}

const updateRestaurant = ({ data, id }) => {
    const [restaurant, setRestaurant] = useState({
        id: id,
        service_id: data.service_id,
        local_entity_code: data.local_entity_code,
        management_no: data.management_no,
        license_no: data.license_no,
        name: data.name,
        food_type: data.food_type,
        food_main: data.food_main,
        address: data.address,
        phone: data.phone,
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setRestaurant({ ...restaurant, [name]: value });
    };

    const updateRestaurant = (e) => {
        e.preventDefault();
        dispatch(restaurantActions.updateRequest(restaurant));
        setRestaurant({
            id: "",
            service_id: '',
            local_entity_code: '',
            management_no: '',
            license_no: '',
            name: '',
            food_type: '',
            food_main: '',
            address: '',
            phone: '',
        });
    };

    const deleteRestaurant = (e) => {
        dispatch(restaurantActions.deleteRequest(restaurant));
    }

    return (
        <form onSubmit={updateRestaurant}>
            <table className={tableStyles.table}>
                <thead>
                    <tr>
                        <th colSpan={2}>
                            <h1>음식정 수정과 삭제</h1>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <b>음식점명</b>
                        </td>
                        <td>
                            <input type="text" name="name" value={restaurant.name} onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>음식유형</b>
                        </td>
                        <td>
                            <input type="text" name="food_type" value={restaurant.food_type} onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td htmlFor="">
                            <b>메인메뉴</b>
                        </td>
                        <td>
                            <input type="text" name="food_main" value={restaurant.food_main} onChange={handleChange} />
                        </td>
                    </tr>

                    <tr>
                        <td htmlFor="">
                            <b>주소</b>
                        </td>
                        <td>
                            <input type="text" name="address" value={restaurant.address} onChange={handleChange} />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <b>연락처</b>
                        </td>
                        <td>
                            <input type="text" name="phone" value={restaurant.phone} onChange={handleChange} />
                        </td>
                    </tr>

                    <tr>
                        <td colSpan={2}>
                            <button type="submit">수정</button>
                            <button type="button" onClick={deleteRestaurant}>삭제</button>
                            <br />
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
};

export default updateRestaurant;
