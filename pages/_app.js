
import '../styles/globals.css';
import '../components/footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
