import Navbar from '../components/Navbar';
import '../styles/globals.css';
import '../components/footer';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
