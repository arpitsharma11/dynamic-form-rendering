import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import TextInput from './TextInput'; // Assuming the component is in TextInput.tsx

describe('TextInput Component', () => {
  it('renders the label and input field correctly', () => {
    render(<TextInput label="Test Label" onChange={() => {}} />);

    const labelElement = screen.getByText('Test Label');
    expect(labelElement).toBeInTheDocument();

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  it('displays the required indicator when required is true', () => {
    render(<TextInput label="Test Label" required onChange={() => {}} />);

    const requiredIndicator = screen.getByText('*');
    expect(requiredIndicator).toBeInTheDocument();
  });

  it('calls the onChange function with the correct value when input changes', () => {
    const onChangeMock = vi.fn(); // Use vi.fn() instead of jest.fn()
    render(<TextInput label="Test Label" onChange={onChangeMock} />);

    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'test value' } });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith('test value');
  });

  it('applies the correct CSS classes', () => {
    render(<TextInput label="Test Label" onChange={() => {}} />);

    const divElement = screen.getByRole('textbox').parentElement;
    expect(divElement).toHaveClass(
      'form-field border border-black rounded-md p-2 mb-6 relative'
    );

    const labelElement = screen.getByText('Test Label');
    expect(labelElement).toHaveClass('absolute top-[-10px] left-4 bg-white px-2');

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveClass(
      'w-full border border-none rounded-md px-3 py-2 focus:outline-none'
    );
  });
});