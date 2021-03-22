import React from 'react';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';
import ProjectScreen from '../../src/components/screens/ProjectScreen';

function ProjectPage({
  name,
  description,
  forks,
  openIssues,
  watchers,
  stars,
  url,
}) {
  return (
    <ProjectScreen
      name={name}
      description={description}
      forks={forks}
      openIssues={openIssues}
      watchers={watchers}
      stars={stars}
      url={url}
    />
  );
}

ProjectPage.propTypes = ProjectScreen.propTypes;

export default websitePageHOC(ProjectPage, {
  pageWrapperProps: {},
});

export async function getStaticProps({ params }) {
  const repo = await fetch(`https://api.github.com/repos/camila-cruz/${params.projeto}`)
    .then(async (res) => {
      const resposta = await res.json();
      return resposta;
    });

  return {
    props: {
      name: repo.name,
      description: repo.description,
      forks: repo.forks,
      openIssues: repo.open_issues,
      watchers: repo.watchers,
      stars: repo.stargazers_count,
      url: repo.html_url,
    },
  };
}

export async function getStaticPaths() {
  const repos = await fetch('https://api.github.com/users/camila-cruz/repos')
    .then(async (res) => {
      const resposta = await res.json();
      return resposta;
    });

  const paths = repos
    .filter((repo) => !repo.fork && repo.description && !repo.description.includes('My'))
    .map((repo) => {
      const repoName = repo.name;
      return { params: { projeto: repoName } };
    });

  return {
    paths,
    fallback: false,
  };
}
