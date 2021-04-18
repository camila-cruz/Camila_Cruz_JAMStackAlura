import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const ModeSwitcherBase = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  height: 70px;
  width: 140px;
  padding: 4px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  font-size: 14px;
  text-decoration: none;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0px #b5b5b5, 0px 0px 3px 0 #b5b5b5;

  & > span {
    text-transform: uppercase;
    font-weight: 700;
  }

  ${({ preview }) => {
    if (preview) {
      return css`
        background-color: ${({ theme }) => theme.actions.disabled};
        color: white;
      `;
    }
    return css`
      color: white;
      background-color: ${({ theme }) => theme.actions.info};
    `;
  }}  
`;

export default function ModeSwitcher({ preview }) {
  const key = process.env.NEXT_PUBLIC_PREVIEW_MODE_KEY;
  const switcherAction = preview
    ? 'desativar'
    : 'ativar';

  const url = preview
    ? 'exit-preview'
    : 'preview';

  return (
    <ModeSwitcherBase
      href={`/api/${url}?key=${key}`}
      preview={preview}
    >
      Clique aqui para
      {' '}
      <span>{switcherAction}</span>
      {' '}
      o modo de preview
    </ModeSwitcherBase>
  );
}

ModeSwitcher.propTypes = {
  preview: PropTypes.bool.isRequired,
};
