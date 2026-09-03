export const loanValidator = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'El nombre es requerido';
  }
  if (!values.amount || values.amount <= 0) {
    errors.amount = 'El monto del préstamo debe ser mayor que cero';
  }
  if (!values.term || values.term <= 0) {
    errors.term = 'El plazo debe ser mayor que cero';
  }
  if (!values.type) {
    errors.type = 'El tipo de préstamo es requerido';
  }

  return errors;
};