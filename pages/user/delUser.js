import React from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../../redux/reducers/userReducer.ts';
export default function withdrawUser() {
    const dispatch = useDispatch()
    return <form onSubmit={
        e => {
            e.preventDefault()
            const flag = confirm('회원정보도 함께 삭제됩니다\n정말 탈퇴하시겠습니까?')
            let user = JSON.parse(localStorage.getItem('loginUser'))
            if (flag) dispatch(userActions.delUserRequest({ 'userid': user.userid }))
        }
    }
    >
        <button type="submit">탈퇴하기</button>
    </form>
}    