import React from "react";

interface LabelProps {
    label: string;
    required?: boolean;
}

const Label: React.FC<LabelProps> = ({ label, required }) => {
    return (
        <label className="absolute top-[-10px] left-4 bg-white px-2 font-bold"> 
            {label} {required && <span className="required">*</span>}
        </label>
    );
};

export default Label;