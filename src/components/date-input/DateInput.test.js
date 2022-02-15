import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DateInput from './DateInput';

const onNextMonth = jest.fn();
const onPrevMonth = jest.fn();

test('renders correct values', () => {
  render(<DateInput monthValue="August" yearValue={2022} />);
  expect(screen.getByTestId('DateInput.monthValue').textContent).toBe('August');
  expect(screen.getByTestId('DateInput.yearValue').textContent).toBe('2022');
});

test('calls onNextMonth function', () => {
  render(<DateInput onNextMonth={onNextMonth} onPrevMonth={onPrevMonth} />);

  const nextBtn = screen.getByTestId('DateInput.nextMonthButton');
  userEvent.click(nextBtn);
  expect(onNextMonth).toBeCalled();
  expect(onPrevMonth).not.toBeCalled();
});

test('calls onPrevMonth function', () => {
  render(<DateInput onNextMonth={onNextMonth} onPrevMonth={onPrevMonth} />);

  const prevBtn = screen.getByTestId('DateInput.prevMonthButton');
  userEvent.click(prevBtn);
  expect(onPrevMonth).toBeCalled();
  expect(onNextMonth).not.toBeCalled();
});

test('disables next month button', () => {
  render(
    <DateInput
      onNextMonth={onNextMonth}
      onPrevMonth={onPrevMonth}
      isNextMonthDisabled
    />
  );

  const prevBtn = screen.getByTestId('DateInput.prevMonthButton');
  const nextBtn = screen.getByTestId('DateInput.nextMonthButton');
  expect(nextBtn).toBeDisabled();
  expect(prevBtn).not.toBeDisabled();
  userEvent.click(nextBtn);
  expect(onNextMonth).not.toBeCalled();
});

test('disables prev month button', () => {
  render(
    <DateInput
      onNextMonth={onNextMonth}
      onPrevMonth={onPrevMonth}
      isPrevMonthDisabled
    />
  );

  const prevBtn = screen.getByTestId('DateInput.prevMonthButton');
  const nextBtn = screen.getByTestId('DateInput.nextMonthButton');
  expect(prevBtn).toBeDisabled();
  expect(nextBtn).not.toBeDisabled();
  userEvent.click(prevBtn);
  expect(onPrevMonth).not.toBeCalled();
});
