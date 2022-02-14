import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

const onChange = jest.fn();

test('renders prepend', () => {
  render(<Input prepend="$" />);
  const prepend = screen.getByTestId('Input.prepend');
  expect(prepend).toBeInTheDocument();
  expect(prepend).toHaveTextContent('$');
});

test('renders correct value', () => {
  render(<Input value="text" onChange={onChange} />);
  expect(screen.getByRole('textbox')).toHaveValue('text');
});

test('calls onChange function', () => {
  render(<Input type="text" onChange={onChange} />);

  const input = screen.getByRole('textbox');
  userEvent.type(input, 'my{space}text');
  expect(onChange).toBeCalled();
});

test('focuses on label click', () => {
  render(
    <Input name="myInput" id="myInput" label="myLabel" onChange={onChange} />
  );

  userEvent.click(screen.getByText('myLabel'));
  expect(screen.getByRole('textbox')).toHaveFocus();
});
