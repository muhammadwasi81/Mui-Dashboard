import React, { useEffect } from 'react'
import ListAltIcon from '@mui/icons-material/ListAlt'
import { useRouter } from 'next/router'
import {
  Button,
  Divider,
  Drawer,
  IconButton,
  Link,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { Box } from '@mui/system'
import NextLink from 'next/link'
import { Logo } from './logo'
import { NavItem } from './nav-item'
import PropTypes from 'prop-types'
import LogoutIcon from '@mui/icons-material/Logout'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded'
import { AdminIcon } from '../icons/admin-icon.js'
import { GroupIcon } from '../icons/group.js'
import { PersonalIcon } from '../icons/personal-icon.js'
import { AdminGroupIcon } from '../icons/admingroup-icon.js'
import { AlertIcon } from '../icons/alert-icon.js'
import { ArrowIcon } from '../icons/arrow-icon.js'
import { TradingIcon } from '../icons/trading-icon.js'
import { SupportIcon } from '../icons/support-icon.js'
import { FeedbackIcon } from '../icons/feedback-icon.js'

const items = [
  {
    href: '/',
    icon: <AdminIcon fontSize="small" />,
    title: 'Downloads',
  },
  {
    href: '/group',
    icon: <GroupIcon fontSize="small" />,
    title: 'Shared Links',
  },
  {
    href: '/personal-links',
    icon: <PersonalIcon fontSize="small" />,
    title: 'Personal Links',
  },
  {
    href: '/admin-group',
    icon: <AdminGroupIcon fontSize="small" />,
    title: 'Admin groups',
  },
  {
    href: '/smart-alerts',
    icon: <AlertIcon fontSize="small" />,
    title: 'Smart Alerts',
  },
  {
    href: '/trading',
    icon: <TradingIcon fontSize="small" />,
    title: 'Trading Diary',
  },
  {
    href: '/co-development',
    icon: <ArrowIcon fontSize="small" />,
    title: 'Co-Development',
  },
  {
    divider: (
      <Divider variant="middle" sx={{ py: 1, borderColor: '#E8E8E8' }} />
    ),
  },
  {
    href: '/support',
    icon: <SupportIcon fontSize="small" />,
    title: 'Support',
  },
  {
    href: '/feedback',
    icon: <FeedbackIcon fontSize="small" />,
    title: 'Feedback',
  },
]
export const DashboardSidebar = (props) => {
  const { open, onClose } = props
  const router = useRouter()
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false,
  })

  useEffect(() => {
    if (!router.isReady) {
      return
    }
    if (open) {
      onClose?.()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath])

  const content = (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div>
          <Box sx={{ p: 3 }}>
            <NextLink href="/" passHref>
              <Link>
                <Logo sx={{ height: 42, width: 42 }} />
              </Link>
            </NextLink>
          </Box>
          <Box sx={{ px: 2 }}>
            <Box
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                px: 3,
                py: '11px',
                borderRadius: 1,
              }}
            >
              <div>
                <Typography color="inherit" variant="subtitle1">
                  Admin
                </Typography>
                <Typography color="neutral.400" variant="body2">
                  Muhammad Wasi
                </Typography>
              </div>
            </Box>
          </Box>
        </div>
        <Box sx={{ my: 2 }} />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item, index) => {
            if (item.divider) {
              return item.divider
            }
            return (
              <NavItem
                key={index}
                value={item}
                href={item.href}
                icon={item.icon}
                title={item.title}
              />
            )
          })}
        </Box>
        <Box
          sx={{
            px: 2,
            py: 3,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconButton sx={{ color: 'secondary.main', mr: 1 }} size="small">
              <FacebookRoundedIcon />
            </IconButton>
            <IconButton sx={{ color: 'secondary.main', mr: 1 }} size="small">
              <SendRoundedIcon />
            </IconButton>
            <IconButton sx={{ color: 'secondary.main', mr: 1 }} size="small">
              <SubscriptionsRoundedIcon />
            </IconButton>
          </Box>
          <Button
            color="secondary"
            component="a"
            endIcon={<LogoutIcon />}
            fullWidth
            sx={{ mt: 2 }}
            variant="contained"
          >
            Logout
          </Button>
        </Box>
      </Box>
    </>
  )

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    )
  }
  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  )
}

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
}
