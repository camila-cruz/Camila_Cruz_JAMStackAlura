import { GraphQLClient, gql as GraphQLTag } from 'graphql-request';

export const gql = GraphQLTag;

export function CMSGraphQLClient({ preview } = { preview: false }) {
  const token = process.env.DATO_CMS_TOKEN;
  const DATO_CMS_URL = preview
    ? 'https://graphql.datocms.com/preview'
    : 'https://graphql.datocms.com/';

  const client = new GraphQLClient(DATO_CMS_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return {
    async query({ query, variables = {} }) {
      const response = await client.request(query, variables);

      return response;
    },
  };
}
