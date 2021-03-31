import React from 'react';
import {
  Eye,
  RepoForked,
  StarFill,
  IssueOpened,
} from '@styled-icons/octicons';
import PropTypes from 'prop-types';
import Link from '../../commons/Link';
import { Grid } from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import imagesArr from '../../../../db.json';
import { Image } from '../../commons/Image';

function RepoInfo({ children }) {
  return (
    <Grid.Col
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Grid.Col>
  );
}

RepoInfo.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function ProjectScreen({
  name,
  description,
  forks,
  openIssues,
  watchers,
  stars,
  url,
}) {
  const image = imagesArr.images.find((img) => img.title === name);

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
          <Text
            as="h2"
            variant="h2"
            size={2}
            marginBottom="16px"
            marginTop={{ xs: '32px', md: '0' }}
          >
            {name}
          </Text>
          <Text as="p" marginBottom="16px" textAlign="center">
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
          <Grid.Row
            // width={{
            //   xs: '100%',
            //   sm: '80%',
            //   md: '60%',
            //   lg: '40%',
            // }}
            width="auto"
            maxWidth="350px"
          >
            <RepoInfo>
              <RepoForked size={16} style={{ marginRight: '8px' }} alt="Forks" />
              {`${forks} `}
            </RepoInfo>
            <RepoInfo>
              <IssueOpened size={16} style={{ marginRight: '8px' }} alt="Issues abertas" />
              {`${openIssues} `}
            </RepoInfo>
            <RepoInfo>
              <Eye size={16} style={{ marginRight: '8px' }} alt="Watchers" />
              {`${watchers} `}
            </RepoInfo>
            <RepoInfo>
              <StarFill size={16} style={{ marginRight: '8px' }} alt="Stars" />
              {`${stars} `}
            </RepoInfo>
          </Grid.Row>
        </Grid.Col>
      </Grid.Row>

      <Grid.Row order={{ xs: 2, md: 0 }}>
        <Grid.Col
          value={{ xs: 12, md: 8 }}
          offset={{ xs: 0, md: 2 }}
          display="flex"
          justifyContent="center"
        >
          <Text variant="link" marginTop="16px" marginBottom="16px">
            <Link href={url} rel="noopener noreferrer" target="_blank">Visite o repositório</Link>
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
          <Image
            src={image.path}
            alt={image.description}
            height={{ xs: '180px', sm: '220px', md: '300px' }}
            shadowed
          />
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
