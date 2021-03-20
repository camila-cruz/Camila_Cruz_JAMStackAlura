import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';
import Text from '../../../foundation/Text';
import Link from '../../Link';
import { CardWrapper } from '../styles/CardWrapper';

const RepoCardBase = styled.div`
  position: relative;

  padding: 10px;
  text-align: center;

  font-size: ${({ theme }) => theme.typography.h3.size[0]}px;
  font-weight: ${({ theme }) => theme.weight.bold};

  /* background-color: ${({ theme }) => theme.mainUi.background.light.secondary}; */
  color: ${({ theme }) => theme.mainUi.text.light.primary};


  ${breakpointsMedia({
    xs: css`
      min-width: 250px;
    `,
    sm: css`
      min-width: 250px;
    `,
    md: css`
      width: 250px;
    `,
  })}
`;

RepoCardBase.CardTitle = styled(CardWrapper.CardTitle)`
  padding: 5px;
`;

RepoCardBase.Body = styled.div`
  border: 2px solid ${({ theme }) => theme.mainUi.background.light.secondary};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 8px;

  ${breakpointsMedia({
    xs: css`
      min-height: 170px;
    `,
    sm: css`
      min-height: 170px;
    `,
    md: css`
      height: 170px;
    `,
  })}

  & > a {
    font-size: ${({ theme }) => theme.typography.paragraph.size[0]}px;
    color: ${({ theme }) => theme.mainUi.text.light.primary};
    text-decoration: none;
    width: fit-content;
    align-self: center;
  }
`;

export default function RepoCard({ name, description, url }) {
  return (
    <RepoCardBase>
      <RepoCardBase.CardTitle>
        <Text variant="paragraph" fontWeight="700">
          {/* eslint-disable-next-line react/prop-types */}
          {name.replace(/(_)/g, ' ')}
        </Text>
      </RepoCardBase.CardTitle>
      <RepoCardBase.Body>
        <Text variant="paragraph" fontWeight="500">
          {description}
        </Text>
        <Link href={url}>
          <Text variant="link">Veja o repositório</Text>
        </Link>
      </RepoCardBase.Body>
    </RepoCardBase>
  );
}

RepoCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
