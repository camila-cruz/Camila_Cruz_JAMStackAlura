import React from 'react';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';
import ProjectScreen, { getContent } from '../../src/components/screens/ProjectScreen';
import { githubService } from '../../src/services/githubService';

function ProjectPage({
  name,
  description,
  content,
  imageSrc,
  altImageText,
  forks,
  openIssues,
  watchers,
  stars,
  url,
  previewMode,
}) {
  return (
    <ProjectScreen
      name={name}
      description={description}
      content={content}
      imageSrc={imageSrc}
      altImageText={altImageText}
      forks={forks}
      openIssues={openIssues}
      watchers={watchers}
      stars={stars}
      url={url}
      previewMode={previewMode}
    />
  );
}

ProjectPage.propTypes = ProjectScreen.propTypes;

export default websitePageHOC(ProjectPage);

export async function getStaticProps({ params, preview }) {
  const previewMode = Boolean(preview);
  const { paginaProjeto } = await getContent({
    projeto: params.projeto,
    preview,
  });
  const repo = await githubService.getRepoByName(params.projeto);

  return {
    props: {
      name: paginaProjeto.projetoTituloPagina,
      description: repo.description,
      content: paginaProjeto.projetoDescricao,
      // title: paginaProjeto.projetoTituloPagina,
      imageSrc: paginaProjeto.projetoImagem.url,
      altImageText: paginaProjeto.projetoImagem.responsiveImage.alt,
      forks: repo.forks,
      openIssues: repo.open_issues,
      watchers: repo.watchers,
      stars: repo.stargazers_count,
      url: repo.html_url,
      previewMode,
      pageWrapperProps: {
        seoProps: {
          headTitle: paginaProjeto.projetoTituloPagina,
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
