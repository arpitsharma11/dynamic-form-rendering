import React from "react";
import Label from "../Label/Label";

interface RadioInputProps {
  label: string;
  options: string[];
  required?: boolean;
  onChange: (value: string) => void;
}

const RadioInput: React.FC<RadioInputProps> = ({
  label,
  options,
  required,
  onChange,
}) => {
  return (
    <div className="form-field border border-black rounded-md p-4 mb-6 relative">
        <Label label={label} required={required} />
        <div className="flex flex-col">
            {options.map((option: string) => (
            <label key={option} className="inline-flex items-center">
                <input
                type="radio"
                name={label}
                value={option}
                onChange={(e) => onChange(e.target.value)}
                required={required}
                className="mr-2"
                />
                {option}
            </label>
            ))}
        </div>
    </div>
  );
};

export default RadioInput;