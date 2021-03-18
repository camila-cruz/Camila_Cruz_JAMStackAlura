import React from 'react';
import HomeScreen from '../src/components/screens/HomeScreen';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function HomePage() {
  return (
    <HomeScreen />
  );
}

export default websitePageHOC(HomePage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
    menuProps: {
      display: false,
    },
  },
});
