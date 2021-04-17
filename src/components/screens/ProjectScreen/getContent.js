import { CMSGraphQLClient, gql } from '../../../infra/cms/CMSGraphQLClient';

export async function getContent({ projeto, preview }) {
  const client = CMSGraphQLClient({ preview });

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

  const projectInfo = await client.query({ query });

  return projectInfo;
}
