import React from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';
import PropTypes from 'prop-types';

const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.mainUi.text.light.primary};

  /* Efeito de hover */
  &:after {    
    position: relative;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    background: ${({ theme }) => theme.mainUi.text.light.primary};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  &:hover {
    &:after { 
      width: 100%;
      left: 0; 
    }
  }
`;

export default function Link({ href, children, ...props }) {
  return (
    <NextLink href={href} passHref>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <StyledLink {...props}>
        {children}
      </StyledLink>
    </NextLink>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
