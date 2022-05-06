import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { userActions } from '../../redux/reducers/userReducer.ts';
import { } from "../../redux/reducers/userReducer.ts"
import tableStyles from '../common/styles/table.module.css'
export default function Join() {
    const [user, setUser] = useState({
        userid: '', password: '', email: '', name: '', phone: '', birth: '', address: ''
    })
    const dispatch = useDispatch()
    const handleChange = e => {
        e.preventDefault()
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }
    return <form onSubmit={
        e => {
            e.preventDefault()
            console.log(' 진행 1: 회원가입 클릭 ');
            dispatch(userActions.joinRequest(user))
            setUser({
                userid: '', password: '', email: '', name: '', phone: '', birth: '', address: ''
            })
        }
    }
    >
        <table className={tableStyles.table}>
            <thead>
                <tr>
                    <th colSpan={2}><h1>회원가입</h1></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>사용자ID</b></td>
                    <td><input type="text" name='userid' placeholder='ID를 입력해주세요' onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td><b>비밀번호</b></td>
                    <td><input type="password" name='password' placeholder='패스워드를 입력해주세요' onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td htmlFor=""><b>이메일</b></td>
                    <td><input type="text" name='email' placeholder='이메일을 입력해주세요' onChange={handleChange} /></td>
                </tr>

                <tr>
                    <td htmlFor=""><b>이름</b></td>
                    <td><input type="text" name='name' placeholder='이름을 입력해주세요' onChange={handleChange} /></td>
                </tr>

                <tr>
                    <td><b>전화번호</b></td>
                    <td><input type="text" name='phone' placeholder='전화번호를 입력해주세요' onChange={handleChange} /></td>
                </tr>

                <tr>
                    <td><b>생년월일</b></td>
                    <td><input type="text" name='birth' placeholder='생년월일을 입력해주세요' onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td><b>주소</b></td>
                    <td><input type="text" name='address' placeholder='주소를 입력해주세요' onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td colSpan={2}><button type="submit" onClick={e => { window.location.href = "./login" }}>회원가입</button><br /></td>
                </tr>
            </tbody>
        </table>
        <style jsx>
            {`form {
                    width : 60% !important;
                }`}
        </style>
    </form>
}