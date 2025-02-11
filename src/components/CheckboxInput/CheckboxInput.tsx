import React from "react";

interface CheckboxInputProps {
  label: string;
  required?: boolean;
  onChange: (value: boolean) => void;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  label,
  required,
  onChange,
}) => {
  return (
    <div className="form-field border border-black rounded-md p-4 mb-6 relative flex items-center">
      <input
        type="checkbox"
        onChange={(e) => onChange(e.target.checked)}
        required={required}
        className="mr-2"
      />
      <label>
        {label} {required && <span className="required">*</span>}
      </label>
    </div>
  );
};

export default CheckboxInput;