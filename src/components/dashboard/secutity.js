import React from 'react'
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Tab,
  TextField,
  Typography,
} from '@mui/material'

export const Security = (props) => {
  return (
    <>
      <Box component="main">
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Typography variant="h6" sx={{ ml: { lg: 5 } }}>
                Security Information
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Grid container spacing={1}>
                <Grid item xs={10}>
                  <TextField
                    type="password"
                    required
                    fullWidth
                    id="outlined-required"
                    label="Old Password"
                    defaultValue="12345678"
                  />
                </Grid>
                <Grid item xs={2}>
                  <Typography color="primary" sx={{ mt: 2 }}>
                    Edit
                  </Typography>
                </Grid>
              </Grid>
              <Box sx={{ my: 3 }} />
              <Grid container spacing={1}>
                <Grid item xs={10}>
                  <TextField
                    type="password"
                    required
                    fullWidth
                    id="outlined-required"
                    label="New Password"
                    defaultValue="12345678"
                  />
                </Grid>
                <Grid item xs={2}>
                  <Typography color="primary" sx={{ mt: 2 }}>
                    Edit
                  </Typography>
                </Grid>
              </Grid>
              <Box sx={{ my: 3 }} />
              <Grid container spacing={1}>
                <Grid item xs={10}>
                  <TextField
                    type="password"
                    required
                    fullWidth
                    id="outlined-required"
                    label="Confirm New Password"
                    defaultValue="12345678"
                  />
                </Grid>
                <Grid item xs={2}>
                  <Typography color="primary" sx={{ mt: 2 }}>
                    Edit
                  </Typography>
                </Grid>
              </Grid>
              <Box sx={{ my: 3 }} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}
