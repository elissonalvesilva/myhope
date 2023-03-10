import Footer from '../Footer';
import Navbar from '../Navbar';

export default function Container({ children, canGoBack = false, arrowColor = '' }) {
  return (
    <>
      <Navbar canGoBack={canGoBack} arrowColor={arrowColor} />
      {children}
      <Footer/>
    </>
  )
}