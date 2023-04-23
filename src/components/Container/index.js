import Footer from '../Footer';
import Navbar from '../Navbar';

export default function Container({ children, canGoBack = false, arrowColor = '', totalCoins = 0 }) {
  return (
    <>
      <Navbar canGoBack={canGoBack} arrowColor={arrowColor} totalCoins={totalCoins} />
      {children}
      <Footer/>
    </>
  )
}