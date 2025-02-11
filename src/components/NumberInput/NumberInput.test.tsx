import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import NumberInput from './NumberInput'; // Assuming the component is in NumberInput.tsx

describe('NumberInput Component', () => {
  it('renders the label and number input field correctly', () => {
    render(<NumberInput label="Test Label" onChange={() => {}} />);

    const labelElement = screen.getByText('Test Label');
    expect(labelElement).toBeInTheDocument();

    const numberInputElement = screen.getByRole('spinbutton');
    expect(numberInputElement).toBeInTheDocument();
  });

  it('displays the required indicator when required is true', () => {
    render(<NumberInput label="Test Label" required onChange={() => {}} />);

    const requiredIndicator = screen.getByText('*');
    expect(requiredIndicator).toBeInTheDocument();
  });

  it('calls the onChange function with the correct value when input changes', () => {
    const onChangeMock = vi.fn();
    render(<NumberInput label="Test Label" onChange={onChangeMock} />);

    const numberInputElement = screen.getByRole('spinbutton');
    fireEvent.change(numberInputElement, { target: { value: '123' } });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(123); // Expecting a number value
  });

  it('applies the correct CSS classes', () => {
    render(<NumberInput label="Test Label" onChange={() => {}} />);

    const divElement = screen.getByRole('spinbutton').parentElement;
    expect(divElement).toHaveClass(
      'form-field border border-black rounded-md p-4 mb-6 relative'
    );

    const numberInputElement = screen.getByRole('spinbutton');
    expect(numberInputElement).toHaveClass(
      'w-full border border-none rounded-md px-3 py-2 focus:outline-none'
    );
  });
});