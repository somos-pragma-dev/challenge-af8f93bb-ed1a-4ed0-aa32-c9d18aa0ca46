import { useState, useCallback } from 'react';

const useForm = (validator) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({...prevValues, [name]: value }));
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const validationErrors = validator(values);
    if (Object.keys(validationErrors).length === 0) {
      console.log('Formulario enviado:', values);
    } else {
      setErrors(validationErrors);
    }
  }, [values, validator]);

  return {
    values,
    handleChange,
    errors,
    handleSubmit
  };
};

export default useForm;