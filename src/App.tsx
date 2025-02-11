import React from "react";
import DynamicForm from "./components/DynamicForm/DynamicForm";
import { FormConfig } from "./common/types";

const formConfig: FormConfig = {
  fields: [
    {
      type: "text",
      label: "Name",
      required: true,
    },
    {
      type: "select",
      label: "Country",
      options: ["USA", "Canada", "Mexico"],
      conditionalFields: {
        USA: [
          {
            type: "text",
            label: "State",
          },
        ],
        Canada: [
          {
            type: "number",
            label: "Province Code",
          },
        ],
      },
    },
    {
      type: "number",
      label: "Age",
      required: true,
    },
    {
      type: "checkbox",
      label: "Agree to terms",
      required: true,
    },
    {
      type: "radio",
      label: "Gender",
      options: ["Male", "Female", "Other"],
      required: true,
    },
    {
      type: "textarea",
      label: "Comments",
    },
  ],
};

const App: React.FC = () => {
  return (
    <div className="w-1/2">
      <h1>Dynamic Form</h1>
      <DynamicForm config={formConfig} />
    </div>
  );
};

export default App;