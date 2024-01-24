import React from 'react';
import LoginForm from '../LoginForm';

import Button from '../../Button/Button';
import Paper from '../../Paper/Paper';
import TextField from '../../TextField/TextField';
import Typography from '../../Typography/Typography';

export default (
  <LoginForm uxpId="Card-1">
    <Paper uxpId="paper-1">
      <Typography variant="h2" uxpId="textfield">
        Sign in with Manifest
      </Typography>
      <TextField
        label="Username"
        placeholder="Enter username"
        style={{ paddingTop: `15px` }}
        fullWidth
        required
        name="userName"
        uxpId="textfield-2"
      />
      <TextField
        label="Password"
        placeholder="Enter password"
        style={{ paddingTop: `15px` }}
        type="password"
        fullWidth
        required
        name="password"
        uxpId="textfield-1"
      />
      <Button type="submit" color="primary" variant="contained" uxpId="Button-1">
        Sign in
      </Button>
      <Button type="submit" color="primary" variant="contained" uxpId="Button-2">
        Lite Sign In
      </Button>
    </Paper>
  </LoginForm>
);
