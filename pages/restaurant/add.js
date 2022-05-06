import React, { useState } from "react";
import { useDispatch } from "react-redux";
import tableStyles from "../../components/common/styles/table.module.css";
import { restaurantActions } from "../../redux/reducers/restaurantReducer";

const AddRestaurant = () => {
    const [restaurant, setRestaurant] = useState({
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

    const dispatch = useDispatch();

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setRestaurant({ ...restaurant, [name]: value });
    };

    const addRestaurantHandler = (e) => {
        e.preventDefault();
        dispatch(restaurantActions.addRequest(restaurant))
        setRestaurant({
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
    return (
        <form onSubmit={addRestaurantHandler}>
            <table className={tableStyles.table}>
                <thead>
                    <tr>
                        <th colSpan={2}>
                            <h1>음식점 등록</h1>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <b>음식점명</b>
                        </td>
                        <td>
                            <input type="text" name="name" onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>음식유형</b>
                        </td>
                        <td>
                            <input type="text" name="food_type" onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td htmlFor="">
                            <b>메인메뉴</b>
                        </td>
                        <td>
                            <input type="text" name="food_main" onChange={handleChange} />
                        </td>
                    </tr>

                    <tr>
                        <td htmlFor="">
                            <b>주소</b>
                        </td>
                        <td>
                            <input type="text" name="address" onChange={handleChange} />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <b>전화번호</b>
                        </td>
                        <td>
                            <input type="text" name="phone" onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button type="submit">등록하기</button>
                            <br />
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
};

export default AddRestaurant;
