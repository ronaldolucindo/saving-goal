import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DateUtils from 'common/date';
import SavingGoalsPage from './SavingGoalsPage';

test('renders correct date', () => {
  render(<SavingGoalsPage />);
  const today = new Date();
  expect(screen.getByTestId('DateInput.monthValue').textContent).toBe(
    DateUtils.getMonthName(today.getMonth() + 1)
  );
  expect(screen.getByTestId('DateInput.yearValue').textContent).toBe(
    `${today.getFullYear()}`
  );
});

test('disables previous month button by default to not allow past dates', () => {
  render(<SavingGoalsPage />);
  const prevBtn = screen.getByTestId('DateInput.prevMonthButton');
  expect(prevBtn).toBeDisabled();
});

test('calculates correct values', () => {
  render(<SavingGoalsPage />);
  const input = screen.getByRole('textbox');
  userEvent.type(input, '12000.12');
  const nextBtn = screen.getByTestId('DateInput.nextMonthButton');
  userEvent.click(nextBtn);
  userEvent.click(nextBtn);
  userEvent.click(nextBtn);

  expect(screen.getByText('$3,000.03')).toBeInTheDocument();
  expect(screen.getByText('4 monthly deposits')).toBeInTheDocument();
});
