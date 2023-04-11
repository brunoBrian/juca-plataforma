import { globalStyles } from '@styles/global';
import React from 'react';
import { setConfiguration } from 'react-grid-system';

globalStyles();
setConfiguration({ gutterWidth: 20, maxScreenClass: 'xl' });

function MyApp({ Component, pageProps }) {
  const CustomLayout = Component.layout ? Component.layout : React.Fragment;

  return (
    <CustomLayout>
      <Component {...pageProps} />
    </CustomLayout>
  );
}

export default MyApp;
