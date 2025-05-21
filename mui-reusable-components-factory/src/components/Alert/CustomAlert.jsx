import React from 'react';
import { Alert, Snackbar } from '@mui/material';

const CustomAlert = ({ open, onClose, severity = 'success', message, duration = 3000 }) => {
  return (
    <Snackbar open={open} autoHideDuration={duration} onClose={onClose}>
      <Alert severity={severity} onClose={onClose} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomAlert;
