import React from 'react';
import Screen404 from '../src/components/screens/404Screen';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function Page404() {
  return (
    <Screen404 />
  );
}

export default websitePageHOC(Page404, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Página não encontrada',
    },
  },
});
