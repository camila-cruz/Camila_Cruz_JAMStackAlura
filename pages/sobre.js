import React from 'react';
import AboutScreen from '../src/components/screens/AboutScreen';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import { githubService } from '../src/services/githubService';

function AboutPage(props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <AboutScreen {...props} />;
}

export default websitePageHOC(AboutPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Sobre',
    },
  },
});

export async function getStaticProps() {
  try {
    const allRepos = await githubService.getAllReposFromUser();
    const repos = allRepos.filter((repo) => !repo.fork && repo.description && !repo.description.includes('My'));

    return {
      props: {
        repos,
      },
    };
  } catch (err) {
    return {
      props: {
        repos: [],
      },
    };
  }
}
