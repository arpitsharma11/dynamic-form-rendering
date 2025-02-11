import React from "react";

interface TextInputProps {
  label: string;
  required?: boolean;
  onChange: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  required,
  onChange,
}) => {
  return (
    <div className="form-field border border-black rounded-md p-2 mb-6 relative">
      <label 
        className="absolute top-[-10px] left-4 bg-white px-2">
        {label} {required && <span className="required">*</span>}
      </label>
      <input
        className="w-full border border-none rounded-md px-3 py-2 focus:outline-none"
        type="text"
        onChange={(e) => onChange(e.target.value)}
        required={required}
      />
    </div>
  );
};
export default TextInput;