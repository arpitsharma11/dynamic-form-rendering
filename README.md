# Dynamic Form Renderer

This project implements a dynamic form rendering system using React and TypeScript, allowing forms to be configured via JSON. It supports various input types and conditional rendering of fields based on user selections.

## Features

* Dynamic form rendering from JSON configuration.
* Support for various input types: text, select, number, checkbox, radio, textarea.
* Conditional rendering of fields based on user input.
* Basic validation for required fields.
* Clear and user-friendly UI.

## Components

* **`DynamicForm`:** The main component that handles form rendering and state management.
* **`TextInput`:** Renders a text input field.
* **`SelectInput`:** Renders a select dropdown with options.
* **`NumberInput`:** Renders a number input field.
* **`CheckboxInput`:** Renders a checkbox input.
* **`RadioInput`:** Renders a group of radio buttons.
* **`TextareaInput`:** Renders a textarea input field.
* **`Label`:** Renders a label with optional required indicator.

## Getting Started

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Run the development server: `npm start`

## Usage

1. Define your form configuration in JSON format.
2. Pass the configuration to the `DynamicForm` component.

## Example JSON Configuration

```json
{
  "fields": [
    {
      "type": "text",
      "label": "Name",
      "required": true
    },
    {
      "type": "select",
      "label": "Country",
      "options": ["USA", "Canada", "Mexico"],
      "conditionalFields": {
        "USA": [
          {
            "type": "text",
            "label": "State"
          }
        ]
      }
    }
  ]
}