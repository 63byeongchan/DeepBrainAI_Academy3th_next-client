import axios from 'axios';
import { useEffect, useState } from 'react';
import tableStyles from '../common/styles/table.module.css'
import Link from 'next/link'

export default function GetUsers() {

    const columns = ["No.", "사용자ID", "이름", "이메일", "전화번호", "생년월일", "주소"];
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/user/getUsers').then((res) => {
            console.log('RES', res)
            setData(res.data)
        }).catch(err => {
            alert('ERROR')
        })
    }, [])
    return (<>
        <form>
            <table className={tableStyles.table} >
                <thead>
                    <tr>
                        <th colSpan={7}><h1>회원목록</h1></th>
                    </tr>
                    <tr>
                        {columns.map((column, index) => {
                            return (
                                <th key={index}>{column}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data?.length === 0
                        ? <tr><td colSpan={6}>{'데이터가 없습니다'}</td></tr>
                        : data?.map((user, idx) => {
                            return (
                                <tr key={user.userid}>
                                    <td>{idx + 1}</td>
                                    <td>{user.userid}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.birth}</td>
                                    <td>{user.address}</td>
                                </tr>)
                        })
                    }
                </tbody>
            </table>
        </form>
        <style jsx>{`
            td{
                min-width : 150px;
            }
        `}</style>
    </>)
}