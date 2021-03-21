import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../commons/Link';
import { Grid } from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';

export default function ProjectScreen({
  name,
  description,
  forks,
  openIssues,
  watchers,
  stars,
  url,
}) {
  return (
    <Grid.Container
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
      padding="48px"
    >
      <Grid.Row order={{ xs: 2, md: 0 }}>
        <Grid.Col
          value={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Text as="h2" variant="h2" size={2} marginBottom="16px">
            {name}
          </Text>
          <Text as="p" marginBottom="32px">
            {description}
          </Text>
        </Grid.Col>
      </Grid.Row>

      <Grid.Row order={{ xs: 2, md: 0 }}>
        <Grid.Col
          value={{ xs: 12, md: 8 }}
          offset={{ xs: 0, md: 2 }}
          display="flex"
          justifyContent="center"
        >
          <Text marginBottom="16px">
            {`${forks} `}
            forks
            {` | ${openIssues} `}
            issues abertas
            {` | ${watchers} `}
            watchers
            {` | ${stars} `}
            stars
          </Text>
        </Grid.Col>
      </Grid.Row>

      <Grid.Row order={{ xs: 2, md: 0 }}>
        <Grid.Col
          value={{ xs: 12, md: 8 }}
          offset={{ xs: 0, md: 2 }}
          display="flex"
          justifyContent="center"
        >
          <Text variant="link" marginBottom="32px">
            <Link href={url} rel="noopener noreferrer">Visite o repositório</Link>
          </Text>
        </Grid.Col>
      </Grid.Row>

      <Grid.Row order={1}>
        <Grid.Col
          value={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          aqui vai uma imagem
          {/* <img src="https://via.placeholder.com/800x300" alt="Placeholder" /> */}
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
}

ProjectScreen.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  forks: PropTypes.number.isRequired,
  openIssues: PropTypes.number.isRequired,
  watchers: PropTypes.number.isRequired,
  stars: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};
