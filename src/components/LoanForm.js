import React from 'react';
import { useForm } from '../hooks/useForm';
import { loanValidator } from '../validators/loanValidator';

const LoanForm = () => {
  const {
    values,
    handleChange,
    errors,
    handleSubmit
  } = useForm(loanValidator);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input type="text" name="name" value={values.name || ''} onChange={handleChange} />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label>Monto del préstamo:</label>
        <input type="number" name="amount" value={values.amount || ''} onChange={handleChange} />
        {errors.amount && <p>{errors.amount}</p>}
      </div>
      <div>
        <label>Plazo:</label>
        <input type="number" name="term" value={values.term || ''} onChange={handleChange} />
        {errors.term && <p>{errors.term}</p>}
      </div>
      <div>
        <label>Tipo de préstamo:</label>
        <input type="text" name="type" value={values.type || ''} onChange={handleChange} />
        {errors.type && <p>{errors.type}</p>}
      </div>
      <button type="submit">Solicitar préstamo</button>
    </form>
  );
};

export default LoanForm;