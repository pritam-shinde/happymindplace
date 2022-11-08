import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import(`bootstrap/dist/js/bootstrap.bundle`)
  }, [])
  return (<>
  {/* header */}
  
  <Component {...pageProps} />
  //footer
  </>)

}

export default MyApp
