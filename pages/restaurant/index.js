import axios from 'axios'
import { useEffect, useState } from 'react'
import tableStyles from '../common/styles/table.module.css'
export default function Restaurant() {

    const [restaurants, setRestaurants] = useState([])
    // useEffect(() => {
    //     (async () => {
    //         const data = await axios.get('http://localhost:5000/api/restaurant')
    //         const restaurants = data.results
    //         console.log('useEffect :', restaurants)
    //         setRestaurants(restaurants)
    //     })()
    // }, [])
    return (
        <table className={tableStyles.table}>
            <thead>
                <tr>
                    <th colSpan={5}>
                        <a target='_blank' href="https://www.data.go.kr/data/15076765/fileData.do"><h2>{'행정안전부 모범음식점 리스트'}</h2></a>
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
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                ))}
            </tbody>
            <style jsx>{`
            a{
                font-size : 20px;
            }
            a:hover{
                font-size: 20px !important;
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