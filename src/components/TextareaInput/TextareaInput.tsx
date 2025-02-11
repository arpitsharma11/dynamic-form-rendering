import React from "react";
import Label from "../Label/Label";
import { TextareaInputProps } from "@/common/types";

const TextareaInput: React.FC<TextareaInputProps> = ({
  label,
  required,
  onChange,
}) => {
  return (
    <div className="form-field border border-black rounded-md p-4 mb-6 relative">
        <Label label={label} required={required} />
        <textarea
            onChange={(e) => onChange(e.target.value)}
            required={required}
            className="w-full border border-none rounded-md px-3 py-2 focus:outline-none"
        />
    </div>
  );
};

export default TextareaInput;