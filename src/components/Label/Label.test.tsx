import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Label from './Label'; // Assuming the component is in Label.tsx

describe('Label Component', () => {
  it('renders the label text correctly', () => {
    render(<Label label="Test Label" />);
    const labelElement = screen.getByText('Test Label');
    expect(labelElement).toBeInTheDocument();
  });

  it('displays the required indicator when required is true', () => {
    render(<Label label="Test Label" required />);
    const requiredIndicator = screen.getByText('*');
    expect(requiredIndicator).toBeInTheDocument();
  });

  it('applies the correct CSS classes', () => {
    render(<Label label="Test Label" />);
    const labelElement = screen.getByText('Test Label');
    expect(labelElement).toHaveClass(
      'absolute top-[-10px] left-4 bg-white px-2 font-bold'
    );
  });
});