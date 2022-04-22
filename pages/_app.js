import { Layout } from "./common";
import { wrapper } from '../redux/store.ts'
import "../styles/globals.css";
const App = ({ Component, pageProps }) => {
  return (<>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
  )
}

export default wrapper.withRedux(App)