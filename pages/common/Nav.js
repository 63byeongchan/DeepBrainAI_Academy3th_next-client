import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles/Nav.module.css";

export default function Nav() {
  const router = useRouter()
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.li_left}> <Link href='/'>
          <a className={router.pathname === "/" ? "active" : ''}>HOME</a>
        </Link> </li>
        <div>
          <li className={styles.li}> <Link href='/restaurant'>
            <a className={router.pathname === "/restaurant" ? "active" : ''}>모범음식점 리스트</a>
          </Link> </li>
        </div>
        <li className={styles.li_right}> <Link href='/user/join'>
          <a className={router.pathname === "/user/join" ? "active" : ''}>회원가입</a>
        </Link> </li>
        <li className={styles.li_right}> <Link href='/user/login'>
          <a className={router.pathname === "/user/login" ? "active" : ''}>로그인</a>
        </Link> </li>
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
      `}</style>
    </nav>
  );
}

