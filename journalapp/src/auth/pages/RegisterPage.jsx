import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
    <AuthLayout title={'Registro'}>
      <form>

        <Grid container>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField label='Nombre completo' type='text' fullWidth sx={{ marginBottom: 3 }} />
            <TextField label='Contrasenia' type='password' fullWidth />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField label='Correo' type='Email' placeholder='correo@google.com' fullWidth sx={{ marginBottom: 3 }} />
            <TextField label='Contrasenia' type='password' fullWidth />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12}>
            <Button variant='contained' fullWidth>Crear cuenta</Button>
          </Grid>
        </Grid>

        <Grid container direction={'row'} sx={{ marginTop: 2 }} justifyContent="end">
          <Typography sx={{ mr: 1 }}>Ya tienes una cuenta?</Typography>
          <Link component={RouterLink} to='/auth/login'>
           Iniciar
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  )
}
