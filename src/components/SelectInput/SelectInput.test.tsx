import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SelectInput from './SelectInput'; // Assuming the component is in SelectInput.tsx

describe('SelectInput Component', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];

  it('renders the label, select field, and options correctly', () => {
    render(<SelectInput label="Test Label" options={options} onChange={() => {}} />);

    const labelElement = screen.getByText('Test Label');
    expect(labelElement).toBeInTheDocument();

    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();

    options.forEach(option => {
      const optionElement = screen.getByRole('option', { name: option });
      expect(optionElement).toBeInTheDocument();
    });
  });

  it('displays the required indicator when required is true', () => {
    render(<SelectInput label="Test Label" options={options} required onChange={() => {}} />);

    const requiredIndicator = screen.getByText('*');
    expect(requiredIndicator).toBeInTheDocument();
  });

  it('calls the onChange function with the correct value when an option is selected', () => {
    const onChangeMock = vi.fn();
    render(<SelectInput label="Test Label" options={options} onChange={onChangeMock} />);

    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: 'Option 2' } });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith('Option 2');
  });

  it('applies the correct CSS classes', () => {
    render(<SelectInput label="Test Label" options={options} onChange={() => {}} />);

    const divElement = screen.getByRole('combobox').parentElement?.parentElement; // Get the parent div
    expect(divElement).toHaveClass(
      'form-field border border-black rounded-md p-4 mb-6 relative'
    );

    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toHaveClass(
      'w-full border border-none rounded-md px-3 py-2 focus:outline-none appearance-none'
    );
  });

  it('renders the ChevronDown icon', () => {
    render(<SelectInput label="Test Label" options={options} onChange={() => {}} />);

    const iconElement = screen.getByTestId('ChevronDownIcon'); // Assuming you add data-testid="ChevronDownIcon" to the icon
    expect(iconElement).toBeInTheDocument();
  });
});