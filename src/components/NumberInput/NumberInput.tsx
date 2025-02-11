import React from "react";
import Label from "../Label/Label";

interface NumberInputProps {
  label: string;
  required?: boolean;
  onChange: (value: number) => void;
}

const NumberInput: React.FC<NumberInputProps> = ({
  label,
  required,
  onChange,
}) => {
  return (
    <div className="form-field border border-black rounded-md p-4 mb-6 relative">
        <Label label={label} required={required} />
        <input
            type="number"
            onChange={(e) => onChange(Number(e.target.value))}
            required={required}
            className="w-full border border-none rounded-md px-3 py-2 focus:outline-none"
        />
    </div>
  );
};

export default NumberInput;