
import React from 'react';
import { TextField, Button, Typography, Container, Box, Link, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import loginImage from '../assets/log.png';
import { useDispatch } from 'react-redux';
import { fetchUserData, UserData } from '../app/api';
import { setUser } from '../features/userSlice';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const data: UserData = await fetchUserData(); 
      dispatch(setUser(data)); 
      navigate(data.role === 'admin' ? '/admin' : '/user'); 
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <Container component="main" maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              justifyContent: 'center',
              height: { md: '100vh' },
              padding: 2,
            }}
          >
            <img
              src={loginImage}
              alt="Login"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '100%',
                objectFit: 'contain',
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: { xs: 'auto', md: '100vh' },
              padding: 4,
            }}
          >
            <Typography component="h1" variant="h5">
              Service Login
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
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
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" align="center">
                  {"Don't have an account? "}
                  <Link href="#" variant="body2" onClick={handleRegister}>
                    Register here
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
