import React from 'react';
import { TextField } from '@mui/material';

const CustomInput = ({
  label,
  type = 'text',
  value,
  onChange,
  required = false,
  disabled = false,
  error = false,
  helperText = '',
  ...props
}) => {
  return (
    <TextField
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
      error={error}
      helperText={helperText}
      fullWidth
      {...props}
    />
  );
};

export default CustomInput;
