import React, { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import CustomButton from './components/Button/CustomButton';
import CustomModal from './components/Modal/CustomModal';
import CustomAlert from './components/Alert/CustomAlert';
import CustomInput from './components/Input/CustomInput';
import CustomCard from './components/Card/CustomCard';

const TestPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);

  return (
    <Box sx={{ padding: 4 }}>
      {/* Buttons and Modal Section */}
      <Stack direction="row" spacing={2} mb={4}>
        <CustomButton onClick={() => setModalOpen(true)}>Open Modal</CustomButton>
        <CustomButton color="secondary" onClick={() => setAlertOpen(true)}>Show Alert</CustomButton>
      </Stack>

      {/* Modal */}
      <CustomModal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Typography variant="h6" mb={2}>This is a custom modal</Typography>
        <CustomButton onClick={() => setAlertOpen(true)}>Trigger Alert Inside Modal</CustomButton>
      </CustomModal>

      {/* Alert */}
      <CustomAlert
        open={alertOpen}
        onClose={() => setAlertOpen(false)}
        severity="info"
        message="This is an info alert!"
      />

      {/* Input Field */}
      <Box my={4}>
        <CustomInput label="Your Name" required fullWidth />
      </Box>

      {/* Card */}
      <CustomCard
        image="/mena.png"
        title="Beautiful Landscape"
        description="This is a reusable card component with a scenic image."
      >
        <CustomButton>Learn More</CustomButton>
      </CustomCard>
    </Box>
  );
};

export default TestPage;
