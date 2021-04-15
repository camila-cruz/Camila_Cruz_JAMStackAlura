import React from 'react';
import styled from 'styled-components';
import { X } from '@styled-icons/octicons/X';
import { Button } from '../../Button';

const CloseButtonWrapper = styled(Button)`
  position: absolute;
  top: 20px;
  right: 20px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  color: ${({ theme }) => theme.text.primary};

`;

export function CloseButton(closeModal) {
  return (
    <CloseButtonWrapper onClick={closeModal}>
      <X size={16} title="Botão para fechar a modal" />
    </CloseButtonWrapper>
  );
}
