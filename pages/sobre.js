import React from 'react';
import AboutScreen from '../src/components/screens/AboutScreen';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function AboutPage(props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <AboutScreen {...props} />;
}

export default websitePageHOC(AboutPage, {});

export async function getStaticProps() {
  const repos = await fetch('https://api.github.com/users/camila-cruz/repos')
    .then(async (res) => {
      const resposta = await res.json();
      return resposta;
    });

  return {
    props: {
      repos,
    },
  };
}
