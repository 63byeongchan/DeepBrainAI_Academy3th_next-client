import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import tableStyles from '../common/styles/table.module.css'
export default function Restaurant() {

    const [restaurants, setRestaurants] = useState([])
    useEffect(() => {
        (async () => {
            const data = await axios.get('http://localhost:5000/restaurant')
            const restaurants = data.data
            console.log('useEffect :', restaurants)
            setRestaurants(restaurants)
        })()
    }, [])
    return (
        <table className={tableStyles.table}>
            <thead>
                <tr>
                    <th colSpan={5}>
                        <a className='center' target='_blank' href="https://www.data.go.kr/data/15076765/fileData.do">{'행정안전부 모범음식점 리스트'}</a>
                        <Link href="/restaurant/add">
                            <button className='add'>+ 음식점 <br></br> 추가</button>
                        </Link>
                    </th>
                </tr>
                <tr>
                    <th>음식점명</th>
                    <th>음식유형</th>
                    <th>메인메뉴</th>
                    <th>주소</th>
                    <th>전화번호</th>
                </tr>
            </thead>
            <tbody>
                {restaurants?.length === 0 && (<tr><td colSpan={5}>{'현재는 데이터가 없습니다'}</td></tr>)}
                {restaurants?.map((restaurant) => (
                    <Link href={`/restaurant/${restaurant._id}`}>
                        <tr className='row'>
                            <td>{restaurant.name}</td>
                            <td>{restaurant.food_type}</td>
                            <td>{restaurant.food_main}</td>
                            <td>{restaurant.address}</td>
                            <td>{restaurant.phone}</td>
                        </tr>
                    </Link>
                ))}
            </tbody>
            <style jsx>{`
            .center{
                margin-left : 80px;
            }
            a{
                font-size : 36px;
                margin : 16px 16px;
            }
            a :hover{
                color: blue;
            }
            th{
                padding : 12px;
            }
            .add{
                font-weight:600;
                border-radius : 5px;
                background-color : #9cef9c;
                float : right;
                width : 80px;
                transition : 0.2s;
            }
            .add:hover{
                color : yellow;
                background-color : #12b012;
            }
            .add:active{
                background-color : #d0ecbe;
            }
            .row:hover{
                background-color : aliceblue;
                transform : scale(1.02);
                transition : 0.15s;
                cursor:pointer;
            }
            .row:active{
                background-color : #b1d6f7;
            }
            `}</style>
        </table>

    )
}

// export async function getServerSideProps() {
//     const data = await (await axios.get('http://localhost:5000/api/restaurant')).json()
//     const restaurants = data['results']
//     return {
//         props: {
//             restaurants,
//         }
//     }
// }