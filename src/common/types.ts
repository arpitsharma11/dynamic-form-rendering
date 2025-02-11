export interface TextInputProps {
  label: string;
  required?: boolean;
  onChange: (value: string) => void;
}

export interface SelectInputProps {
    label: string;
    options: string[] | [];
    required?: boolean;
    onChange: (value: string) => void;
}


export interface FormField {
    type: 'text' | 'select' | 'number' | 'checkbox' | 'radio' | 'textarea';
    label: string;
    required?: boolean;
    options?: string[];
    conditionalFields?: { [key: string]: FormField[] };
}
  
export interface FormConfig {
    fields: FormField[];
}

export interface LabelProps {
    label: string;
    required?: boolean;
}

export interface TextareaInputProps {
  label: string;
  required?: boolean;
  onChange: (value: string) => void;
}

export interface RadioInputProps {
  label: string;
  options: string[];
  required?: boolean;
  onChange: (value: string) => void;
}

export interface CheckboxInputProps {
  label: string;
  required?: boolean;
  onChange: (value: boolean) => void;
}

export interface NumberInputProps {
  label: string;
  required?: boolean;
  onChange: (value: number) => void;
}

export interface SelectInputProps {
  label: string;
  options: string[] | [];
  required?: boolean;
  onChange: (value: string) => void;
}

export interface FormRendererProps {
    config: FormConfig;
}
