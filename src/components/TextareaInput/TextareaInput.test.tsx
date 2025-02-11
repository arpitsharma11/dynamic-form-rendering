import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import TextareaInput from './TextareaInput'; // Assuming the component is in TextareaInput.tsx

describe('TextareaInput Component', () => {
  it('renders the label and textarea field correctly', () => {
    render(<TextareaInput label="Test Label" onChange={() => {}} />);

    // Check if the label is rendered using the Label component
    const labelElement = screen.getByText('Test Label');
    expect(labelElement).toBeInTheDocument();

    // Check if the textarea field is rendered
    const textareaElement = screen.getByRole('textbox');
    expect(textareaElement).toBeInTheDocument();
  });

  it('displays the required indicator when required is true', () => {
    render(<TextareaInput label="Test Label" required onChange={() => {}} />);

    // Check if the required indicator is displayed
    const requiredIndicator = screen.getByText('*');
    expect(requiredIndicator).toBeInTheDocument();
  });

  it('calls the onChange function with the correct value when input changes', () => {
    const onChangeMock = vi.fn();
    render(<TextareaInput label="Test Label" onChange={onChangeMock} />);

    const textareaElement = screen.getByRole('textbox');
    fireEvent.change(textareaElement, { target: { value: 'test value' } });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith('test value');
  });

  it('applies the correct CSS classes', () => {
    render(<TextareaInput label="Test Label" onChange={() => {}} />);

    const divElement = screen.getByRole('textbox').parentElement;
    expect(divElement).toHaveClass(
      'form-field border border-black rounded-md p-4 mb-6 relative'
    );

    const textareaElement = screen.getByRole('textbox');
    expect(textareaElement).toHaveClass(
      'w-full border border-none rounded-md px-3 py-2 focus:outline-none'
    );
  });
});