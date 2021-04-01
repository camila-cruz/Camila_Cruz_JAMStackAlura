import { useEffect, useState } from 'react';

function formatErrors(errors = []) {
  return errors.reduce((errorsAcc, error) => {
    const fieldName = error.path;
    const errorMessage = error.message;

    return {
      ...errorsAcc,
      [fieldName]: errorMessage,
    };
  }, {});
}

export function useForm({ initialValues, onSubmit, validateSchema }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isTouched, setTouchedFields] = useState({});
  const [isFormDisabled, setIsFormDisabled] = useState(true);

  function handleChange(e) {
    const { value } = e.target;
    const fieldName = e.target.getAttribute('name');

    setValues({
      ...values,
      [fieldName]: value,
    });
  }

  async function validate(currentValues) {
    try {
      await validateSchema(currentValues);
      setErrors({});
      setIsFormDisabled(false);
    } catch (err) {
      const formatedErrors = formatErrors(err.inner);
      setErrors(formatedErrors);
      setIsFormDisabled(true);
    }
  }

  function handleReset() {
    setValues(initialValues);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
  }

  function handleBlur(e) {
    const fieldName = e.target.getAttribute('name');

    setTouchedFields({
      ...isTouched,
      [fieldName]: true,
    });
  }

  useEffect(() => {
    validate(values);
  }, [values]);

  return {
    values,
    handleChange,
    handleSubmit,
    handleReset,
    handleBlur,
    errors,
    isTouched,
    isFormDisabled,
    setIsFormDisabled,
  };
}
