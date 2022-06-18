import Layout from '../components/Layout'
import '../styles/globals.css'
/**
 * making it universally accessible by all component
 *  
 */
function MyApp({Component, pageProps }) {
  return( 
  <Layout>
      <Component {...pageProps} />
  </Layout> 
  )
}

export default MyApp
