
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./styles/Nav.module.css";
import tableStyles from './styles/table.module.css'
import SubMenu from "./SubMenu";
export default function Nav() {
  const [userUrls, setUserUrls] = useState([])
  const [userSubTitle, setUserSubTitle] = useState([])
  const router = useRouter()
  const basicUrls = ["/basic/counter", "/basic/calc"]
  const basicSubTitle = ["Counter", "Calc"]



  useEffect(() => {
    const loginUser = localStorage.getItem("loginUser");
    if (loginUser === null) {
      setUserUrls(["/user/join", "/user/login"])
      setUserSubTitle(["회원가입", "로그인"])
    } else {
      setUserUrls(["/user/logout", "/user/profile", "/user/modifyUser", "/user/withdrawUser", "/user/getUsers"])
      setUserSubTitle(["로그아웃", "프로필", "회원수정", "회원탈퇴", "회원목록"])
    }
  }, [])

  return (
    <nav className={styles.nav}>
      <ul>
        <li className={`${styles.li_left} ${router.pathname === "/" ? "active" : ''}`}>
          <Link href='/'>
            <a>HOME</a>
          </Link>
        </li>
        {/* <div> */}
        <li className={`${styles.li} ${router.pathname === "/restaurant" ? "active" : ''}`}>
          <Link href='/restaurant'>
            <a>모범음식점 리스트</a>
          </Link>
        </li>
        {/* </div> */}
        <div className="tr_fixed left">
          <SubMenu title={"Basic"} urls={basicUrls} subTitles={basicSubTitle} />
        </div>
        <div className="tr_fixed right">
          <SubMenu title={"User"} urls={userUrls} subTitles={userSubTitle} />
        </div>
        <li className={`${styles.li_right} ${router.pathname === "/user/join" ? "active" : ''}`}>
          <Link href='/user/join'>
            <a>회원가입</a>
          </Link>
        </li>
        <li className={`${styles.li_right} ${router.pathname === "/user/login" ? "active" : ''}`}>
          <Link href='/user/login'>
            <a>로그인</a>
          </Link>
        </li>
        {/* <li className={styles.li}> <Link href='/user/user-list'>사용자목록</Link> </li> */}
      </ul>
      <style jsx>{` nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
        ul{
          width:100%;
          padding-inline-start: 0px;
          padding-right : 30px;
        }
        div{
          display:inline-block !important;
        }
        .tr_fixed{
              position: fixed;
              top: 3px;
        }
        .tr_fixed.right{
              right: 8px;
        }
        .tr_fixed.left{
              left : 8px;
        }
      `}</style>
    </nav>
  );
}

