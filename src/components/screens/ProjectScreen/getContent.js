import { CMSGraphQLClient, gql } from '../../../infra/cms/CMSGraphQLClient';

export async function getContent(projeto) {
  const query = gql`
    query {
      paginaProjeto(filter: {projetoNome: {eq: "${projeto}"}}) {
        projetoNome
        projetoImagem {
          responsiveImage {
            alt
          }
          url
        }
        projetoDescricao
        projetoTituloPagina
      }
    }
  `;

  // const client = CMSGraphQLClient();

  const projectInfo = await CMSGraphQLClient().query({ query });

  return projectInfo;
}
