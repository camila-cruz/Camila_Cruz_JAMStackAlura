/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid } from '../../foundation/layout/Grid';
import { Button } from '../../commons/Button';
import TextField from '../../forms/TextField';

const FormWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;

  padding-top: 80px;
  padding-bottom: 80px;

  /* 
  height: 100%;
  clip-path: polygon(25% 10%, 75% 10%, 100% 50%, 75% 90%, 25% 90%, 0% 50%); */
  background-color: white;
`;

function FormContent() {
  const [messageInfo, setMessageInfo] = useState({
    name: '',
    email: '',
    message: '',
  });

  const messageDTO = {
    name: messageInfo.name,
    email: messageInfo.email,
    message: messageInfo.email,
  };

  function handleChange(e) {
    const fieldName = e.target.getAttribute('name');

    setMessageInfo({
      ...messageInfo,
      [fieldName]: e.target.value,
    });
  }

  function onSubmit(e) {
    e.preventDefault();

    fetch('https://contact-form-api-jamstack.herokuapp.com/message', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messageDTO),
    })
      .then((res) => res.json())
      .then((data) => {
        // eslint-disable-next-line no-console
        console.log(data);
      });
  }

  return (
    <form onSubmit={onSubmit}>
      <h2>Envie sua mensagem</h2>

      <div>
        <label htmlFor="name">
          Nome
          <TextField type="text" name="name" id="name" value={messageInfo.name} onChange={handleChange} />
        </label>
      </div>

      <div>
        <label htmlFor="email">
          E-mail
          <TextField type="email" name="email" id="email" value={messageInfo.email} onChange={handleChange} />
        </label>
      </div>

      <div>
        <label htmlFor="message">
          Mensagem
          <TextField type="text" name="message" id="message" value={messageInfo.message} onChange={handleChange} textarea />
        </label>
      </div>

      <Button type="submit" variant="tertiary" fullWidth>
        Enviar
      </Button>
    </form>
  );
}

// eslint-disable-next-line react/prop-types
export default function FormContato({ props }) {
  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="center"
    >
      <Grid.Col
        value={{ xs: 12, md: 6, lg: 4 }}
        alignSelf="center"
      >
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <FormWrapper {...props}>
          <FormContent />
        </FormWrapper>
      </Grid.Col>
    </Grid.Row>
  );
}
