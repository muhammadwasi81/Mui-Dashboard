import { format } from 'date-fns'
import 'react-perfect-scrollbar/dist/css/styles.css'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {
  Box,
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  Typography,
} from '@mui/material'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { SeverityPill } from '../SeverityPill'

const uuid = () => {
  const head = Date.now().toString(36)
  const tail = Math.random().toString(36).substr(2)
  return `${head}${tail}`
}

const orders = [
  {
    id: uuid(),
    date: '22-02-2022',
    time: '10:00 PM',
    ipAddress: '192.162.20.22',
    status: 'Success at first attempt',
    action: 'Login',
  },
  {
    id: uuid(),
    date: '23-02-2022',
    time: '11:00 PM',
    ipAddress: '192.162.20.22',
    status: 'Disconnection',
    action: 'Login',
  },
  {
    id: uuid(),
    date: '26-03-2022',
    time: '12:00 PM',
    ipAddress: '192.162.20.22',
    status: 'Success at first attempt',
    action: 'Login',
  },
  {
    id: uuid(),
    date: '22-02-2022',
    time: '1:00 PM',
    ipAddress: '192.162.20.22',
    status: 'pending',
    action: 'Login',
  },
]

export const Activity = (props) => (
  <>
    <Box sx={{ my: 2, ml: { lg: 5 } }}>
      <Typography variant="h6">Account Activity</Typography>
    </Box>
    <Card {...props}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Ip Address</TableCell>
                <TableCell sortDirection="desc">
                  <Tooltip enterDelay={300} title="Sort">
                    <TableSortLabel active direction="desc">
                      Change made
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow hover key={order.id}>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.time}</TableCell>
                  <TableCell>{order.ipAddress}</TableCell>
                  <TableCell>
                    <SeverityPill
                      color={
                        (order.status === 'Success at first attempt' &&
                          'success') ||
                        (order.status === 'Disconnection' && 'error') ||
                        'warning'
                      }
                    >
                      {order.status}
                    </SeverityPill>
                  </TableCell>
                  <TableCell>{order.action}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2,
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon fontSize="small" />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  </>
)
