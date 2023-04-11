import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';

export default function App() {
  return (
    <Box sx={{ width: '100%', maxWidth: 500, margin: '0 auto' }}>
      <Typography variant="h1" gutterBottom>
        Hello MUI!
      </Typography>

      <Stack spacing={2} direction="row">
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </Box>
  );
}
