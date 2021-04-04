import React from 'react';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';
import ProjectScreen from '../../src/components/screens/ProjectScreen';
import { githubService } from '../../src/services/githubService';

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

export default websitePageHOC(ProjectPage);

export async function getStaticProps({ params }) {
  // const repo = await fetch(`https://api.github.com/repos/camila-cruz/${params.projeto}`)
  //   .then(async (res) => {
  //     const resposta = await res.json();
  //     return resposta;
  //   });

  const repo = await githubService.getRepoByName(params.projeto);

  return {
    props: {
      name: repo.name,
      description: repo.description,
      forks: repo.forks,
      openIssues: repo.open_issues,
      watchers: repo.watchers,
      stars: repo.stargazers_count,
      url: repo.html_url,
      pageWrapperProps: {
        seoProps: {
          headTitle: repo.name,
        },
      },
    },
  };
}

export async function getStaticPaths() {
  const repos = await githubService.getAllReposFromUser();

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
