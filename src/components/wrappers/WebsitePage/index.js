/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../../foundation/layout/Box';
import Cabecalho from '../../commons/Cabecalho';
import Footer from '../../commons/Footer';
import SEO from '../../commons/SEO';

export default function WebsitePageWrapper({ children, seoProps, menuProps }) {
  return (
    <>
      <SEO {...seoProps} />
      <Box>
        {menuProps.display && <Cabecalho />}
        {children}
        <Footer />
      </Box>
    </>
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
