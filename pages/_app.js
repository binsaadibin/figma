// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Load Bootstrap's JavaScript only on the client-side
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
