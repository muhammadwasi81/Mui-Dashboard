import {
  AppBar,
  Avatar,
  Badge,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { Box } from '@mui/system'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SettingsIcon from '@mui/icons-material/Settings'

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}))

export const label = { inputProps: { 'aria-label': 'Switch demo' } }

export const DashboardNavbar = (props) => {
  const { onSidebarOpen, ...other } = props
  const [subject, setSubject] = React.useState('English')

  const handleChange = (event) => {
    setSubject(event.target.value)
  }

  return (
    <DashboardNavbarRoot
      sx={{
        left: { lg: 280 },
        width: {
          lg: 'calc(100% - 280px)',
        },
      }}
      {...other}
    >
      <Toolbar disableGutters sx={{ minHeight: 64, left: 0, px: 2 }}>
        <IconButton
          onClick={onSidebarOpen}
          sx={{ display: { xs: 'inline-flex', lg: 'none' } }}
        >
          <MenuIcon fontSize="small" />
        </IconButton>
        <Typography
          variant="h4"
          color="black"
          sx={{ display: { xs: 'none', lg: 'block' } }}
        >
          Welcome to Centerlin!
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Typography
          color="black"
          fontSize="small"
          sx={{ display: { xs: 'none', lg: 'block' } }}
        >
          Training Mode
        </Typography>
        <Switch {...label} defaultChecked color="info" />
        {/* select Box */}
        <FormControl
          sx={{ m: 1, minWidth: 80, display: { xs: 'none', lg: 'block' } }}
        >
          <InputLabel id="demo-simple-select-autowidth-label">
            Language
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            defaultValue={'English'}
            onChange={handleChange}
            autoWidth
            label="Subject"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'English'} style={{ color: 'info.main' }}>
              English
            </MenuItem>
            <MenuItem value={'French'}>French</MenuItem>
            <MenuItem value={'chinese'}>Chinese</MenuItem>
          </Select>
        </FormControl>
        <Tooltip title="Notifications">
          <IconButton sx={{ ml: 1 }}>
            <NotificationsIcon fontSize="medium" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Settings">
          <IconButton sx={{ ml: 1 }}>
            <SettingsIcon fontSize="medium" />
          </IconButton>
        </Tooltip>
        <Avatar
          alt="Cindy Baker"
          src="https://mui.com/static/images/avatar/1.jpg"
          sx={{ height: 40, width: 40, ml: 1 }}
        />
      </Toolbar>
    </DashboardNavbarRoot>
  )
}

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func,
}
