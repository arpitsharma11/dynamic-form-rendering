import React, { useState } from "react";
import { FormConfig, FormField } from "../../common/types";
import TextInput from "../TextInput/TextInput";
import SelectInput from "../SelectInput/SelectInput";
import NumberInput from "../NumberInput/NumberInput";
import CheckboxInput from "../CheckboxInput/CheckboxInput";
import RadioInput from "../RadioInput/RadioInput";
import TextareaInput from "../TextareaInput/TextareaInput";

interface FormRendererProps {
  config: FormConfig;
}

const DynamicForm: React.FC<FormRendererProps> = ({ config }) => {
  const [formData, setFormData] = useState<{ [key: string]: any }>({});

  const handleChange = (name: string, value: any) => {
    setFormData({...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form Data:", formData);
  };

  const handleReset = () => {
    setFormData({});
  };

  const renderField = (field: FormField) => {
    switch (field.type) {
      case "text":
        return (
          <TextInput
            key={field.label}
            label={field.label}
            required={field.required}
            onChange={(value) => handleChange(field.label, value)}
          />
        );
      case "select":
        return (
          <div key={field.label}>
            <SelectInput
              label={field.label}
              options={field.options || []}
              required={field.required}
              onChange={(value) => handleChange(field.label, value)}
            />
            {field.conditionalFields &&
              Object.keys(field.conditionalFields).map((condition) => {
                if (formData[field.label] === condition) {
                  return field.conditionalFields && field.conditionalFields[condition]?.map(
                    (conditionalField) => renderField(conditionalField)
                  );
                }
                return null;
              })}
          </div>
        );
      case "number":
        return (
          <NumberInput
            key={field.label}
            label={field.label}
            required={field.required}
            onChange={(value) => handleChange(field.label, value)}
          />
        );
      case "checkbox":
        return (
          <CheckboxInput
            key={field.label}
            label={field.label}
            required={field.required}
            onChange={(value) => handleChange(field.label, value)}
          />
        );
      case "radio":
        return (
          <RadioInput
            key={field.label}
            label={field.label}
            options={field.options || []}
            required={field.required}
            onChange={(value) => handleChange(field.label, value)}
          />
        );
      case "textarea":
        return (
          <TextareaInput
            key={field.label}
            label={field.label}
            required={field.required}
            onChange={(value) => handleChange(field.label, value)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto p-4">
        {config.fields.map((field) => renderField(field))}
        <div className="flex justify-end mt-4">
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
                Submit
            </button>
            <button
                type="button"
                onClick={handleReset}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
                Reset
            </button>
        </div>
    </form>
  );
};

export default DynamicForm