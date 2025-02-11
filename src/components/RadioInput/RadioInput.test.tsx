import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import RadioInput from './RadioInput'; // Assuming the component is in RadioInput.tsx

describe('RadioInput Component', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];

  it('renders the label and radio buttons correctly', () => {
    render(<RadioInput label="Test Label" options={options} onChange={() => {}} />);

    const labelElement = screen.getByText('Test Label');
    expect(labelElement).toBeInTheDocument();

    options.forEach(option => {
      const radioElement = screen.getByRole('radio', { name: option });
      expect(radioElement).toBeInTheDocument();
    });
  });

  it('displays the required indicator when required is true', () => {
    render(<RadioInput label="Test Label" options={options} required onChange={() => {}} />);

    const requiredIndicator = screen.getByText('*');
    expect(requiredIndicator).toBeInTheDocument();
  });

  it('calls the onChange function with the correct value when a radio button is selected', () => {
    const onChangeMock = vi.fn();
    render(<RadioInput label="Test Label" options={options} onChange={onChangeMock} />);

    const radioElement = screen.getByRole('radio', { name: 'Option 2' });
    fireEvent.click(radioElement);

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith('Option 2');
  });

  it('applies the correct CSS classes', () => {
    render(<RadioInput label="Test Label" options={options} onChange={() => {}} />);

    const divElement = screen.getByRole('radio', { name: 'Option 1' }).parentElement?.parentElement?.parentElement; // Get the parent div
    expect(divElement).toHaveClass(
      'form-field border border-black rounded-md p-4 mb-6 relative'
    );
  });
});