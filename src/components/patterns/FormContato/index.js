/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Lottie } from '@crello/react-lottie';
import * as yup from 'yup';
import { Grid } from '../../foundation/layout/Grid';
import { Box } from '../../foundation/layout/Box';
import { Button } from '../../commons/Button';
import TextField from '../../forms/TextField';
import Text from '../../foundation/Text';

import loadingAnimation from './animations/loading.json';
import successAnimation from './animations/success.json';
import errorAnimation from './animations/error.json';
import { contactService } from '../../../services/contact';
import { useForm } from '../../../infra/hooks/forms/useForm';

const FormWrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;

  padding-top: 80px;
  padding-bottom: 80px;

  background-color: ${({ theme }) => theme.mainUi.background.light.primary};
  color: ${({ theme }) => theme.mainUi.text.light.primary};

  /* 
  height: 100%;
  clip-path: polygon(25% 10%, 75% 10%, 100% 50%, 75% 90%, 25% 90%, 0% 50%); */
`;

const formStates = {
  DEFAULT: {
    animation: '',
    buttonText: 'Enviar mensagem',
  },
  LOADING: {
    animation: loadingAnimation,
    text: 'Aguarde',
  },
  DONE: {
    animation: successAnimation,
    text: 'Mensagem enviada!',
    buttonText: 'Nova mensagem',
  },
  ERROR: {
    animation: errorAnimation,
    text: 'Houve um erro!',
    buttonText: 'Tente novamente',
  },
};

const messageSchema = yup.object().shape({
  name: yup
    .string()
    .required('Preencha o seu nome')
    .min(2, 'O nome precisa ter pelo menos 2 caracteres'),
  email: yup
    .string('Coloque o seu melhor e-mail')
    .required(),
  message: yup
    .string()
    .required('Digite a sua mensagem')
    .min(10, 'A mensagem precisa ter pelo menos 10 caracteres'),
});

function FormContent() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(formStates.DEFAULT);

  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const form = useForm({
    initialValues,
    onSubmit: (messageDTO) => {
      setIsFormSubmitted(true);
      setSubmissionStatus(formStates.LOADING);

      contactService.sendMessage(messageDTO)
        .then(() => {
          setSubmissionStatus(formStates.DONE);
        })
        .catch(() => {
          setSubmissionStatus(formStates.ERROR);
        });
    },
    validateSchema: async (values) => messageSchema.validate(values, {
      abortEarly: false,
    }),
  });

  function resetForm() {
    if (submissionStatus !== formStates.ERROR) {
      form.handleReset();
    }

    setSubmissionStatus(formStates.DEFAULT);
    setIsFormSubmitted(false);
  }

  return (
    <>
      {(isFormSubmitted && (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          minHeight="300px"
        >
          <Lottie
            width="150px"
            height="150px"
            className="lottie-container basic"
            config={{
              animationData: submissionStatus.animation,
              loop: false,
              autoplay: true,
            }}
          />
          <Text as="h2" variant="h2" size={1}>{submissionStatus.text}</Text>
          {(submissionStatus !== formStates.DEFAULT && submissionStatus !== formStates.LOADING) && (
            <Button variant="tertiary" onClick={resetForm} marginTop="20px">
              {submissionStatus.buttonText}
            </Button>
          )}
        </Box>
      )) || (submissionStatus === formStates.DEFAULT && (
        <form onSubmit={form.handleSubmit}>
          <Text as="h2" variant="h2" size={3} marginBottom="40px">Envie sua mensagem</Text>

          <div>
            <Text as="label" variant="label" htmlFor="name">
              Nome
              <TextField
                type="text"
                name="name"
                id="name"
                value={form.values.name}
                onChange={form.handleChange}
              />
            </Text>
          </div>

          <div>
            <Text as="label" variant="label" htmlFor="email">
              E-mail
              <TextField
                type="email"
                name="email"
                id="email"
                value={form.values.email}
                onChange={form.handleChange}
              />
            </Text>
          </div>

          <div>
            <Text as="label" variant="label" htmlFor="message">
              Mensagem
              <TextField
                textarea
                name="message"
                id="message"
                value={form.values.message}
                onChange={form.handleChange}
              />
            </Text>
          </div>

          <Button type="submit" variant="tertiary" fullWidth disabled={form.isFormDisabled}>
            Enviar
          </Button>
        </form>
      ))}
    </>
  );
}

// eslint-disable-next-line react/prop-types
export default function FormContato({ CloseButton, props }) {
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
          <CloseButton />
          <FormContent />
        </FormWrapper>
      </Grid.Col>
    </Grid.Row>
  );
}
