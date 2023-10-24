import * as React from 'react';
import SignIn from '../Signin';
import { v4 as uuidv4 } from 'uuid';
import Avatar from '../../../components/../components/Avatar/Avatar';
import Button from '../../../components/Button/Button';
import TextField from '../../../components/TextField/TextField';
import FormControlLabel from '../../../components/FormControlLabel/FormControlLabel';
import Checkbox from '../../../components/Checkbox/Checkbox';
import Link from '../../../components/Link/Link';
import Grid from '../../../components/Grid/Grid';
import Box from '../../../components/Box/Box';
import Icon from '../../../components/Icon/Icon'
import Typography from '../../../components/Typography/Typography';
import Container from '../../../components/Container/Container';

const id = uuidv4();

export default (
  <SignIn uxpId={uuidv4()}>
    <Container component="main" maxWidth="xs" uxpId={uuidv4()}>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        uxpId={uuidv4()}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} uxpId={uuidv4()}>
          <Icon uxpId={uuidv4()}>home</Icon>
        </Avatar>
        <Typography component="h1" variant="h5" uxpId={uuidv4()}>
          Sign in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }} uxpId={uuidv4()}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            uxpId={uuidv4()}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            uxpId={uuidv4()}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" uxpId={uuidv4()} />}
            label="Remember me"
            uxpId={uuidv4()}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            uxpId={uuidv4()}
          >
            Sign In
          </Button>
          <Grid container uxpId={uuidv4()}>
            <Grid item xs uxpId={uuidv4()}>
              <Link href="#" variant="body2" uxpId={uuidv4()}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item uxpId={uuidv4()}>
              <Link href="#" variant="body2" uxpId={uuidv4()}>
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>

    </Container>
  </SignIn>
);
