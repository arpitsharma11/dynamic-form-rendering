import React from "react";
import { ChevronDown } from 'lucide-react';
import Label from "../Label/Label";

interface SelectInputProps {
  label: string;
  options: string[];
  required?: boolean;
  onChange: (value: string) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  options,
  required,
  onChange,
}) => {
  return (
    <div className="form-field border border-black rounded-md p-4 mb-6 relative">
      <Label label={label} required={required} />
      <div className="relative">
        <select 
          onChange={(e) => onChange(e.target.value)} 
          required={required}
          className="w-full border border-none rounded-md px-3 py-2 focus:outline-none appearance-none" 
        >
        {options.map((option: string) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
        </select>
        <div 
          className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          data-testid="ChevronDownIcon" // Added data-testid for testing
        >
        <ChevronDown className="h-4 w-4" />
        </div>
      </div>
      
    </div>
  );
};

export default SelectInput;