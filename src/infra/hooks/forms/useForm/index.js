import { useEffect, useState } from 'react';

export function useForm({ initialValues, onSubmit, validateSchema }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
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
      setErrors(err);
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

  useEffect(() => {
    validate(values);
  }, [values]);

  return {
    values,
    handleChange,
    handleSubmit,
    handleReset,
    errors,
    isFormDisabled,
    setIsFormDisabled,
  };
}
