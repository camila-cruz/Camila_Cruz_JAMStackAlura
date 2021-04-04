/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Lottie } from '@crello/react-lottie';
import * as yup from 'yup';
import { Box } from '../../foundation/layout/Box';
import { Button } from '../../commons/Button';
import TextField from '../../forms/TextField';
import Text from '../../foundation/Text';
import { contactService } from '../../../services/contactService';
import { useForm } from '../../../infra/hooks/forms/useForm';
import formStates from './utils/formStates';
import FormWrapper from './FormWrapper';

const messageSchema = yup.object().shape({
  name: yup
    .string()
    .required('Preencha o seu nome')
    .min(2, 'O nome precisa ter pelo menos 2 caracteres'),
  email: yup
    .string()
    .email('Digite um e-mail válido')
    .required('Coloque o seu melhor e-mail'),
  message: yup
    .string()
    .required('Digite a sua mensagem')
    .min(5, 'A mensagem precisa ter pelo menos 5 caracteres'),
});

export default function FormContato({
  CloseButton,
  onSubmit,
  formSubmission = false,
  formState = formStates.DEFAULT,
  props,
}) {
  const [isFormSubmitted, setIsFormSubmitted] = useState(formSubmission);
  const [submissionStatus, setSubmissionStatus] = useState(formState);

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
    <FormWrapper {...props}>
      <CloseButton />
      {(isFormSubmitted && (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          minHeight="300px"
          role="alert"
        >
          <Lottie
            width="150px"
            height="150px"
            className="lottie-container basic"
            config={{
              animationData: submissionStatus.feedback.animation,
              loop: submissionStatus.feedback.loop,
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
        <form onSubmit={onSubmit || form.handleSubmit}>
          <Text as="h2" variant="h2" size={3} marginBottom="40px">Envie sua mensagem</Text>

          <div>
            <Text as="label" variant="label" htmlFor="name">
              Nome
              <TextField
                type="text"
                name="name"
                id="name"
                placeholder="Seu nome"
                value={form.values.name}
                error={form.errors.name}
                isTouched={form.isTouched.name}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
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
                placeholder="Seu melhor e-mail"
                value={form.values.email}
                error={form.errors.email}
                isTouched={form.isTouched.email}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
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
                placeholder="Sua mensagem"
                value={form.values.message}
                error={form.errors.message}
                isTouched={form.isTouched.message}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </Text>
          </div>

          {/* <pre>
            {JSON.stringify(form.errors, null, 4)}
          </pre> */}

          <Button type="submit" variant="tertiary" fullWidth disabled={form.isFormDisabled}>
            Enviar
          </Button>
        </form>
      ))}
    </FormWrapper>
  );
}
