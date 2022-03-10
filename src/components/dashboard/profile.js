import React from 'react'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import {
  Box,
  Card,
  Divider,
  Grid,
  Tab,
  TextField,
  Typography,
} from '@mui/material'

export const Profile = (props) => {
  const [value, setValue] = React.useState('Sign In and Security')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <>
      <Box component="main">
        <Typography variant="h4">Profile</Typography>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                textColor="primary"
                indicatorColor="primary"
                variant="scrollable"
                scrollButtons="auto"
              >
                <Tab
                  label="Personal Information"
                  value="personal Information"
                />
                <Tab
                  label="Sign In and Security"
                  value="Sign In and Security"
                />
                <Tab
                  label="Connect & View Social Media Information"
                  value="Connect & View Social Media Information"
                />
                <Tab label="Personalization" value="Personalization" />
                <Tab label="Centralin Points" value="Centralin Points" />
              </TabList>
            </Box>
            <TabPanel value="personal Information">
              personal Information
            </TabPanel>
            <TabPanel value="Sign In and Security">
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <Typography variant="h6" sx={{ ml: { lg: 5 } }}>
                    Sign In
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Email Address"
                    defaultValue="johnDoe@example.com"
                  />
                  <Box sx={{ my: 3 }} />
                  <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Confirm Email Address"
                    defaultValue="johnDoe@example.com"
                  />
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value="Connect & View Social Media Information">
              Connect & View Social Media Information
            </TabPanel>
            <TabPanel value="Centralin Points">Centralin</TabPanel>
          </TabContext>
          <Divider sx={{ borderColor: ' #E5E5E5' }} />
        </Box>
      </Box>
    </>
  )
}
