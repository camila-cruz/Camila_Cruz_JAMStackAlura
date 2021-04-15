/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid } from '../../../foundation/layout/Grid';

const FormBase = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;

  padding-top: 80px;
  padding-bottom: 80px;

  background-color: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.text.primary};

  max-width: 600px;
  /* 
  height: 100%;
  clip-path: polygon(25% 10%, 75% 10%, 100% 50%, 75% 90%, 25% 90%, 0% 50%); */

  & > form {
    min-width: 350px;
    width: auto;
    max-width: 400px;
    padding-left: 20px;
    padding-right: 20px;
}
`;

export default function FormWrapper({ children, ...props }) {
  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="center"
    >
      <Grid.Col
        value={{ xs: 12, md: 7, lg: 5 }}
        alignSelf="center"
      >
        <FormBase {...props}>
          {children}
        </FormBase>
      </Grid.Col>
    </Grid.Row>
  );
}

FormWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
