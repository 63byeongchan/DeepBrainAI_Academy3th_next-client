import style from "./styles/Layout.module.css";
import Nav from "./Nav";
import Footer from "./Footer";
import Head from "next/head";
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport"
          content="width=device-width, user-scalable=no, 
      initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"></meta>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Lim Byeongchan</title>
      </Head>
      <div className={style.container}>
        <Nav />
        <main className={style.main}>{children}</main>
        <Footer />
      </div>
    </>
  );
}

