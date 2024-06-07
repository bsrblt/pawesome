import React from "react";

interface FormFieldProps {
  label?: string;
  id: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  pattern?: string;
  setWidth?: string;
  minLength?: number;
  maxLength?: number;
  type?: string;
  placeholder?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  name,
  type,
  value,
  minLength,
  maxLength,
  placeholder,
  onChange,
  required = false,
  setWidth,
  pattern,
}) => {
  return (
    <div className="my-1 z-10">
      <label className="block text-gray-700 mb-[6px] pl-[1px]" htmlFor={id}>
        {label}
      </label>
      <input
        className="w-full px-3 py-2 border rounded-lg shadow-sh"
        style={{ width: setWidth }}
        type={type}
        id={id}
        name={name}
        value={value}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        pattern={pattern}
      />
    </div>
  );
};

export default FormField;
