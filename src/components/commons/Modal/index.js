import React from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { CloseButton } from './CloseButton';

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  background-color: rgba(0, 0, 0, 0.5);
  
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  margin: auto;
  overflow: scroll;
  z-index: 9999;
  
  transition: 0.3s;

  ${(props) => {
    if (props.isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
        overflow: hidden;
      `;
    }

    return css`
      opacity: 0;
      pointer-events: none;
      overflow: hidden;
    `;
  }}
`;

// Bloqueia o scroll da tela de fundo quando a modal está aberta
const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
    overflow-x: hidden;
  }
`;

function handleClose(e, onClose) {
  // Área útil do modal, onde são permitidas as ações com o mouse
  const isSafeArea = e.target.closest('[data-modal-safe-area="true"]');

  if (!isSafeArea) {
    onClose();
  }
}

export default function Modal({ isOpen, onClose, children }) {
  return (
    <ModalWrapper
      isOpen={isOpen}
      /* Procurar outro método para modal não fechar com click que termina fora */
      onMouseDown={(e) => handleClose(e, onClose)}
    >
      {isOpen && <LockScroll />}

      <motion.div
        variants={{
          open: {
            scale: 1,
          },
          closed: {
            scale: 0,
          },
        }}
        animate={isOpen ? 'open' : 'closed'}
        transition={{
          duration: 0.4,
        }}
        style={{
          display: 'flex',
          flex: 1,
        }}
      >
        {children(() => CloseButton(onClose), { 'data-modal-safe-area': 'true' })}
      </motion.div>
    </ModalWrapper>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};
