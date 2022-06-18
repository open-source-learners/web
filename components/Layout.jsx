import Footer from './Footer'
import Navbar from './Navbar'
/**
 * global componect for each pages
 * 
 */
const Layout = ({children}) => {
  return (
    <div>
      <Navbar/>
       {children}
      <Footer/>
    </div>
  )
}

export default Layout
