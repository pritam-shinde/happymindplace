import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import { Header } from '../Components/components'


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import(`bootstrap/dist/js/bootstrap.bundle`)
  }, [])
  return (<>
    <Header />

    <Component {...pageProps} />
  </>)

}
export default MyApp
