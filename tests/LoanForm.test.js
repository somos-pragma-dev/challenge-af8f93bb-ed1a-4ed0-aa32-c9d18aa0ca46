import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import LoanForm from '../src/components/LoanForm';

describe('LoanForm', () => {
  test('renders the form', () => {
    const { getByLabelText } = render(<LoanForm />);
    expect(getByLabelText('Nombre:')).toBeInTheDocument();
    expect(getByLabelText('Monto del préstamo:')).toBeInTheDocument();
    expect(getByLabelText('Plazo:')).toBeInTheDocument();
    expect(getByLabelText('Tipo de préstamo:')).toBeInTheDocument();
  });

  test('displays validation errors', async () => {
    const { getByLabelText, getByText } = render(<LoanForm />);
    fireEvent.submit(getByText('Solicitar préstamo'));
    await waitFor(() => {
      expect(getByText('El nombre es requerido')).toBeInTheDocument();
      expect(getByText('El monto del préstamo debe ser mayor que cero')).toBeInTheDocument();
      expect(getByText('El plazo debe ser mayor que cero')).toBeInTheDocument();
      expect(getByText('El tipo de préstamo es requerido')).toBeInTheDocument();
    });
  });
});