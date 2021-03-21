/* eslint-disable react/jsx-props-no-spreading */
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '../../foundation/layout/Box';
import Cabecalho from '../../commons/Cabecalho';
import Footer from '../../commons/Footer';
import SEO from '../../commons/SEO';
import Modal from '../../commons/Modal';
import FormContato from '../../patterns/FormContato';

export const WebsitePageContext = createContext({
  toggleModal: () => {},
});

export default function WebsitePageWrapper({
  children,
  seoProps,
  menuProps,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <WebsitePageContext.Provider
      value={{
        toggleModal: () => {
          setIsOpen(!isOpen);
        },
      }}
    >
      <SEO {...seoProps} />
      <Box>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
          {(props) => <FormContato props={props} />}
        </Modal>

        {menuProps.display && <Cabecalho />}
        {children}
        <Footer />
      </Box>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  menuProps: {
    display: true,
  },
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  children: PropTypes.node.isRequired,
};
