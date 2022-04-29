import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { userActions } from "../../redux/reducers/userReducer.ts"
import tableStyles from '../common/styles/table.module.css'
import Profile from "./[id]"

const ModifyUser = () => {
    const [profile, setProfile] = useState({})
    const dispatch = useDispatch()
    const router = useRouter();
    useEffect(() => {
        const loginUser = localStorage.getItem('loginUser')
        const user = JSON.parse(loginUser)
        setProfile(user)
    }, [])
    const handleChange = e => {
        const { value, name } = e.target
        setProfile({ ...profile, [name]: value })
    }
    return (
        <>
            <form onSubmit={
                e => {
                    e.preventDefault()
                    let flag = confirm('정말 수정하시겠습니까?')
                    if (!flag) return
                    console.log(' 진행 : 수정하기');
                    let result = dispatch(userActions.modifyUserRequest(profile))
                    console.log('result :',)
                    setProfile(result.payload)
                    // router.push('/user/profile')
                    window.location.href = '/user/profile'

                }
            }>
                <table className={tableStyles.table} >
                    <thead>
                        <tr>
                            <th colSpan={2}> <h1>회원 프로필 </h1></th>
                        </tr>
                    </thead>
                    < tbody >
                        <tr>
                            <td><b>사용자ID </b></td >
                            <td><input value={profile.userid} disabled name="userid" type="text" onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td><b>패스워드 </b></td >
                            <td><input value={profile.password} name="password" type="password" onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td htmlFor="" > <b>이메일 </b></td>
                            <td><input value={profile.email} name="email" type="text" onChange={handleChange} /></td>
                        </tr>

                        <tr>
                            <td htmlFor="" > <b>이름 </b></td>
                            <td><input value={profile.name} name="name" type="text" onChange={handleChange} /></td>
                        </tr>

                        <tr>
                            <td><b>전화번호 </b></td>
                            <td><input value={profile.phone} name="phone" type="text" onChange={handleChange} /></td>
                        </tr>

                        <tr>
                            <td><b>생년월일 </b></td>
                            <td><input value={profile.birth} name="birth" type="text" onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td><b>주소 </b></td >
                            <td><input value={profile.address} name="address" type="text" onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td colSpan={2}><button type="submit">수정하기</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <style jsx>{`
                td{
                    min-width : 200px;
                }
                input{
                    text-align:center;
                    font-size : 18px;
                }
            `}</style>
        </>
    )
}
export default ModifyUser;