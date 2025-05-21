import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const CustomCard = ({ image, title, description, children }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {image && <CardMedia component="img" height="140" image={image} alt={title} />}
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
};

export default CustomCard;
