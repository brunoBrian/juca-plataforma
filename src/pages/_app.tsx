import { globalStyles } from '@styles/global';
import { setConfiguration } from 'react-grid-system';

globalStyles();
setConfiguration({ gutterWidth: 20, maxScreenClass: 'xl' });

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
