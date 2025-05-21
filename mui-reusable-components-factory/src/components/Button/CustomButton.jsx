import React from 'react';
import { Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';

const CustomButton = ({
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  disabled = false,
  startIcon,
  endIcon,
  loading = false,
  children,
  ...props
}) => {
  return loading ? (
    <LoadingButton
      variant={variant}
      color={color}
      size={size}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      loading
      {...props}
    >
      {children}
    </LoadingButton>
  ) : (
    <Button
      variant={variant}
      color={color}
      size={size}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
